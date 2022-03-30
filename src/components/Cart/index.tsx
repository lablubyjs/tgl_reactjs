import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { IoTrashOutline } from 'react-icons/io5';
import { IoAlertCircleOutline } from 'react-icons/io5';

import { betsServices } from '@shared/services/index';
import {
	formatNumbers,
	formatValueToCurrency,
	getGameColor,
	getGameName,
	getGamePrice,
	getGamePriceNumber,
} from '@shared/utils/index';

import { asyncAddBets } from '@store/bets-slice';
import { emptyCart, removeToCart } from '@store/cart-slice';

import { useAppDispatch, useAppSelector } from 'src/hooks';

import { Button, EmptyMessage, Modal } from '@components/index';

import {
	ButtonSave,
	ButtonTrash,
	CartTotal,
	ContainerCart,
	GameInfo,
	GamesContainer,
	Content,
	ButtonModal,
	ContentModal,
} from './style';

const Cart = () => {
	const gamesInCart = useAppSelector((state) => state.cart.games);
	const cartTotal = useAppSelector((state) => state.cart.cartTotal);
	const minCartValue = useAppSelector((state) => state.cart.minCartValue);
	const games = useAppSelector((state) => state.games.list);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { newBet } = betsServices();

	const [cartModal, setCartModal] = useState(<Modal />);
	const [showModal, setShowModal] = useState(false);

	const closeModal = () => {
		setShowModal(false);
	};

	const confirmBuy = async () => {
		console.log(gamesInCart);
		setShowModal(false);
		try {
			await toast.promise(newBet({ games: gamesInCart }), {
				pending: 'Loading',
				success: 'Purchase made successfully',
				error: 'Purchase failure',
			});

			dispatch(asyncAddBets('/bet/all-bets?'));
			dispatch(emptyCart());
			navigate('/home', { replace: true });
		} catch (error: any) {
			if (error.status === 401) {
				toast.error(error.data.message);
			}
		}
	};

	const goToCartHandler = () => {
		if (cartTotal >= minCartValue) {
			console.log('confirmar', cartTotal, cartModal, showModal);
			setShowModal(true);
			setCartModal(
				<Modal onClose={closeModal}>
					<ContentModal>
						<IoAlertCircleOutline />
						<p>
							Your cart has a total{' '}
							<strong>{formatValueToCurrency(cartTotal.toString())} </strong>
							of in games. Do you want to complete the buy?
						</p>
						<div>
							<ButtonModal onClick={confirmBuy}>Confirm</ButtonModal>
							<ButtonModal onClick={closeModal}>Cancel</ButtonModal>
						</div>
					</ContentModal>
				</Modal>
			);
		} else {
			console.log('ainda falta', cartTotal, minCartValue - cartTotal);
			setShowModal(true);
			setCartModal(
				<Modal onClose={closeModal}>
					<ContentModal>
						<IoAlertCircleOutline />
						<p>
							Minimum value of{' '}
							<strong>{formatValueToCurrency(minCartValue.toString())} </strong>
							not reached, please add more{' '}
							<strong>
								{formatValueToCurrency((minCartValue - cartTotal).toString())}
							</strong>{' '}
							in games to cart to complete purchase
						</p>
						<ButtonModal onClick={closeModal}>OK</ButtonModal>
					</ContentModal>
				</Modal>
			);
		}
	};

	return (
		<ContainerCart>
			<h1>Cart</h1>
			{gamesInCart.length === 0 && (
				<EmptyMessage
					message='No games added to cart'
					type='CART'
					fontSize={20}
				/>
			)}

			<GamesContainer>
				{gamesInCart.map((game, index) => {
					const price = getGamePriceNumber(games, game.game_id);

					const dispatchHandler = () => {
						setShowModal(false);
						dispatch(removeToCart({ index, price }));
					};

					const removeToCartHandler = () => {
						setShowModal(true);
						setCartModal(
							<Modal onClose={closeModal}>
								<ContentModal>
									<IoAlertCircleOutline />
									<p>Do you really want to delete from cart?</p>
									<div>
										<ButtonModal onClick={dispatchHandler}>Confirm</ButtonModal>
										<ButtonModal onClick={closeModal}>Cancel</ButtonModal>
									</div>
								</ContentModal>
							</Modal>
						);
					};

					return (
						<Content>
							<ButtonTrash onClick={removeToCartHandler}>
								<IoTrashOutline />
							</ButtonTrash>
							<GameInfo color={getGameColor(games, game.game_id)}>
								<p className='gameNumbers'>
									{formatNumbers(game.numbers.join(','))}
								</p>
								<div>
									<p className='gameName'>{getGameName(games, game.game_id)}</p>
									<p>{getGamePrice(games, game.game_id)}</p>
								</div>
							</GameInfo>
						</Content>
					);
				})}
			</GamesContainer>

			<CartTotal>
				<p>
					<strong>CART </strong> TOTAL:{' '}
					{formatValueToCurrency(cartTotal.toString())}
				</p>
			</CartTotal>

			<ButtonSave>
				<Button
					goTo={'Save'}
					fontSize={35}
					color={'var(--light-green)'}
					onGoTo={goToCartHandler}
				/>
			</ButtonSave>

			{showModal && cartModal}
		</ContainerCart>
	);
};

export default Cart;

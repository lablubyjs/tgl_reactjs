import Button from '@components/Button';
import EmptyMessage from '@components/EmptyMessage';
import Modal from '@components/Modal';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import valueFormat, {
	getGameColor,
	getGameName,
	getGamePrice,
	getGamePriceNumber,
} from 'src/utils';
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
import { betsServices } from '@shared/services';
import { toast } from 'react-toastify';
import { asyncAddBets } from '@store/bets-slice';
import { useNavigate } from 'react-router-dom';
import { IoTrashOutline } from 'react-icons/io5';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { removeToCart } from '@store/cart-slice';

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
			const response = await toast.promise(newBet({ games: gamesInCart }), {
				pending: 'Carregando',
				success: 'Compra realizada com sucesso',
				error: 'Falha na compra',
			});

			dispatch(asyncAddBets('/bet/all-bets?'));

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
							<strong>{valueFormat('PRICE', cartTotal.toString())} </strong>
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
							<strong>{valueFormat('PRICE', minCartValue.toString())} </strong>
							not reached, please add more{' '}
							<strong>
								{valueFormat('PRICE', (minCartValue - cartTotal).toString())}
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

					const removeToCartHandler = () => {
						dispatch(removeToCart({ index, price }));
					};

					return (
						<Content>
							<ButtonTrash onClick={removeToCartHandler}>
								<IoTrashOutline />
							</ButtonTrash>
							<GameInfo color={getGameColor(games, game.game_id)}>
								<p className='gameNumbers'>
									{valueFormat('NUMBERS', game.numbers.join(','))}
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
					{valueFormat('PRICE', cartTotal.toString())}
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

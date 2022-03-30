import React, { useEffect, useState } from 'react';

import { BsCart3 } from 'react-icons/bs';
import { IoAlertCircleOutline } from 'react-icons/io5';

import { selectedGame } from '@store/games-slice';
import { addToCart } from '@store/cart-slice';

import { useAppDispatch, useAppSelector } from 'src/hooks';

import { completeArray, getGameColor } from '@shared/utils';

import {
	ButtonGame,
	Modal,
	ButtonModal,
	ContentModal,
} from '@components/index';

import {
	ButtonAction,
	ButtonNumber,
	ButtonsActions,
	ContainerGames,
} from './styles';

const GamesContainer = (): JSX.Element => {
	const listGamesStore = useAppSelector((state) => state.games.list);
	const gameSelect = useAppSelector((state) => state.games.currentGame);
	const games = useAppSelector((state) => state.games.list);

	const dispatch = useAppDispatch();

	const [gameName, setGameName] = useState('');
	const [gameDescription, setGameDescription] = useState('');
	const [gameRange, setGameRange] = useState(0);
	const [numbers, setNumbers] = useState<number[]>([]);
	const [modal, setModal] = useState(<Modal />);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		if (gameSelect.range > 0) {
			setGameName(gameSelect.type);
			setGameDescription(gameSelect.description);
			setGameRange(gameSelect.range);
			dispatch(selectedGame(gameSelect.id));
		}
	}, [gameSelect, dispatch]);

	const clearGameHandler = () => {
		setNumbers([]);
	};

	const addToCartHandler = () => {
		if (numbers.length === gameSelect.max_number) {
			dispatch(
				addToCart({
					game: {
						game_id: gameSelect.id,
						numbers: numbers.sort((a, b) => {
							return a - b;
						}),
					},
					price: gameSelect.price,
				})
			);
			clearGameHandler();
		} else {
			setShowModal(true);
			setModal(
				<Modal>
					<ContentModal>
						<IoAlertCircleOutline />
						<p>
							The game is not complete, please add more{' '}
							<strong>{gameSelect.max_number - numbers.length}</strong> numbers
							before adding to cart
						</p>
						<div>
							<ButtonModal onClick={() => setShowModal(false)}>OK</ButtonModal>
						</div>
					</ContentModal>
				</Modal>
			);
		}
	};

	const completeGameHandler = () => {
		if (numbers.length < gameSelect.max_number) {
			setNumbers((prevState) => {
				return prevState.concat(
					completeArray(numbers, gameSelect.max_number, gameRange)
				);
			});
		} else {
			setShowModal(true);
			setModal(
				<Modal>
					<ContentModal>
						<IoAlertCircleOutline />
						<p>The game is complete, please clear game or add game to cart</p>
						<div>
							<ButtonModal onClick={() => setShowModal(false)}>OK</ButtonModal>
						</div>
					</ContentModal>
				</Modal>
			);
		}
	};

	return (
		<ContainerGames>
			<h1>
				<strong>New Bet </strong>for {gameName}
			</h1>

			<h3>Choose a game</h3>

			{Object.keys(listGamesStore).map((key: any) => {
				const OnClickHandler = () => {
					setGameName(listGamesStore[key].type);
					setGameDescription(listGamesStore[key].description);
					setGameRange(listGamesStore[key].range);
					dispatch(selectedGame(listGamesStore[key].id));
					clearGameHandler();
				};

				return (
					<ButtonGame
						onClick={OnClickHandler}
						key={listGamesStore[key].id}
						name={listGamesStore[key].type}
						color={listGamesStore[key].color}
						isSelected={listGamesStore[key].isSelected ? true : false}
					/>
				);
			})}

			<h4>Fill your bet</h4>
			<p>{gameDescription}</p>

			{Array.from({ length: gameRange }).map((_, index) => {
				let backgroundColor = '';
				const indexNumber = index + 1;

				numbers.indexOf(indexNumber) !== -1
					? (backgroundColor = getGameColor(games, gameSelect.id))
					: (backgroundColor = '');

				const onClickButtonNumberHandler = () => {
					if (
						numbers.indexOf(indexNumber) === -1 &&
						numbers.length < gameSelect.max_number
					) {
						setNumbers((prevState) => {
							return [...prevState, indexNumber];
						});
					} else if (
						numbers.length === gameSelect.max_number &&
						numbers.indexOf(indexNumber) === -1
					) {
						setShowModal(true);
						setModal(
							<Modal>
								<ContentModal>
									<IoAlertCircleOutline />
									<p>
										The game is complete, you can deselect a number by clicking
										on it.
									</p>
									<div>
										<ButtonModal onClick={() => setShowModal(false)}>
											OK
										</ButtonModal>
									</div>
								</ContentModal>
							</Modal>
						);
					} else {
						setNumbers((prevState) => {
							return prevState.filter((item) => item !== indexNumber);
						});
					}
				};

				return (
					<ButtonNumber
						key={index + 1}
						value={index + 1}
						onClick={onClickButtonNumberHandler}
						backgroundColor={backgroundColor}>
						{index < 9 ? `0${index + 1}` : index + 1}
					</ButtonNumber>
				);
			})}

			<ButtonsActions>
				<div>
					<ButtonAction
						onClick={completeGameHandler}
						color='var(--green)'
						backgroundColor='transparent'
						width={164}>
						Complete Game
					</ButtonAction>
					<ButtonAction
						onClick={clearGameHandler}
						color='var(--green)'
						backgroundColor='transparent'
						width={135}>
						Clear Game
					</ButtonAction>
				</div>
				<ButtonAction
					onClick={addToCartHandler}
					color='var(--white)'
					backgroundColor='var(--green)'
					width={209}>
					<BsCart3 />
					Add to cart
				</ButtonAction>
			</ButtonsActions>

			{showModal && modal}
		</ContainerGames>
	);
};

export default GamesContainer;

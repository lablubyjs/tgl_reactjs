import ButtonGame from '@components/Games/ButtonGame';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { selectedGame, selectGame } from '@store/games-slice';
import {
	ButtonAction,
	ButtonNumber,
	ButtonsActions,
	ContainerGames,
} from './style';
import { BsCart3 } from 'react-icons/bs';
import { addToCart } from '@store/cart-slice';

const GamesContainer = () => {
	const listGamesStore = useAppSelector((state) => state.games.list);
	const gameSelect = useAppSelector((state) => state.games.currentGame);
	const dispatch = useAppDispatch();

	const [gameName, setGameName] = useState('');
	const [gameDescription, setGameDescription] = useState('');
	const [gameRange, setGameRange] = useState(0);

	useEffect(() => {
		if (gameSelect.range > 0) {
			setGameName(gameSelect.type);
			setGameDescription(gameSelect.description);
			setGameRange(gameSelect.range);
			dispatch(selectedGame(gameSelect.id));
		}
	}, [gameSelect]);

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

			{Array.from({ length: gameRange }).map((_, index) => (
				<ButtonNumber key={index + 1} value={index + 1}>
					{index < 9 ? `0${index + 1}` : index + 1}
				</ButtonNumber>
			))}

			<ButtonsActions>
				<ButtonAction
					color='var(--green)'
					backgroundColor='transparent'
					width={164}>
					Complete Game
				</ButtonAction>
				<ButtonAction
					color='var(--green)'
					backgroundColor='transparent'
					width={135}>
					Clear Game
				</ButtonAction>
				<ButtonAction
					onClick={() => {
						dispatch(
							addToCart({
								game: {gameID: gameSelect.id, numbers: [0,0,0]},
								price: gameSelect.price,
							})
						);
					}}
					color='var(--white)'
					backgroundColor='var(--green)'
					width={209}>
					<BsCart3 />
					Add to cart
				</ButtonAction>
			</ButtonsActions>
		</ContainerGames>
	);
};

export default GamesContainer;

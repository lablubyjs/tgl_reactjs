import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
	formatDate,
	formatNumbers,
	formatValueToCurrency,
	getGameColor,
} from '@shared/utils';

import { asyncAddGames, selectGame } from '@store/games-slice';
import {
	addQuery,
	asyncAddBets,
	removeQuery,
	resetQuerys,
} from '@store/bets-slice';

import { useAppDispatch, useAppSelector } from 'src/hooks';

import { Button, ButtonGame, EmptyMessage } from '@components/index';

import {
	Bet,
	ButtonsGamesContainer,
	ContainerBets,
	HeaderBets,
} from './styles';

const ButtonsGames = (): JSX.Element => {
	const listGamesStore = useAppSelector((state) => state.games.list);
	const dispatch = useAppDispatch();
	const url = useAppSelector((state) => state.bets.querys.join(''));

	useEffect(() => {
		dispatch(asyncAddGames());
	}, []);

	return (
		<ButtonsGamesContainer>
			{Object.keys(listGamesStore).map((key: any) => {
				const OnClickHandler = () => {
					const type = `type%5B%5D=${listGamesStore[key].type}&`;

					if (url.includes(type)) {
						dispatch(removeQuery(listGamesStore[key].type));
					} else {
						dispatch(addQuery(listGamesStore[key].type));
					}
					dispatch(selectGame(listGamesStore[key].id));
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
		</ButtonsGamesContainer>
	);
};

const BetsContainer = (): JSX.Element => {
	const games = useAppSelector((state) => state.games.list);

	const bets = useAppSelector((state) => state.bets.bets);

	const url = useAppSelector((state) => state.bets.querys.join(''));

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const goToHandler = () => {
		navigate('/games');
		dispatch(resetQuerys());
	};

	useEffect(() => {
		dispatch(asyncAddBets(url));
	}, [url]);

	return (
		<ContainerBets>
			<HeaderBets>
				<div>
					<h1>RECENT GAMES</h1>
					<div>
						<h3>Filters</h3>
						<ButtonsGames />
					</div>
				</div>
				<Button
					goTo='New Bet'
					fontSize={24}
					color='var(--light-green)'
					onGoTo={goToHandler}
				/>
			</HeaderBets>

			{Object.keys(bets).map((key) => {
				return (
					<Bet key={key} color={getGameColor(games, bets[key].type.id)}>
						<hr />
						<div className='content'>
							<p className='numbers'>
								{formatNumbers(bets[key].choosen_numbers)}
							</p>
							<p className='date-price'>
								{formatDate(bets[key].created_at)} - (
								{formatValueToCurrency(bets[key].price)})
							</p>
							<p className='type'>{bets[key].type.type}</p>
						</div>
					</Bet>
				);
			})}

			{Object.keys(bets).length === 0 && (
				<EmptyMessage
					message={`You don't have any bets yet...`}
					type='BET'
					fontSize={30}>
					<Link to='/games'>Choose a bet?</Link>
				</EmptyMessage>
			)}
		</ContainerBets>
	);
};

export default BetsContainer;

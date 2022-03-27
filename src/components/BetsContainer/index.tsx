import Button from '@components/Button';
import ButtonGame from '@components/Games/ButtonGame';
import ButtonsGames from '@components/Games/ButtonsGames';
import { asyncAddBets } from '@store/bets-slice';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import valueFormat, { getGameColor } from 'src/utils';
import { Bet, ContainerBets, HeaderBets } from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const BetsContainer = (): JSX.Element => {
	const games = useAppSelector((state) => state.games.list);

	const bets = useAppSelector((state) => state.bets.bets);

	const url = useAppSelector((state) => state.bets.querys.join(''));

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const goToHandler = () => {
		navigate('/games');
	};

	useEffect(() => {
		dispatch(asyncAddBets(url));
	}, [url]);

	return (
		<ContainerBets>
			<HeaderBets>
				<div>
					<h1>RECENT GAMES</h1>
					<h3>Filters</h3>
					<ButtonsGames />
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
								{valueFormat('NUMBERS', bets[key].choosen_numbers)}
							</p>
							<p className='date-price'>
								{valueFormat('DATE', bets[key].created_at)} - (
								{valueFormat('PRICE', bets[key].price)})
							</p>
							<p className='type'>{bets[key].type.type}</p>
						</div>
					</Bet>
				);
			})}
		</ContainerBets>
	);
};

export default BetsContainer;

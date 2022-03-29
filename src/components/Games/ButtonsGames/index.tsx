import { useAppDispatch, useAppSelector } from 'src/hooks';
import ButtonGame from '../ButtonGame';
import { addQuery, removeQuery } from '@store/bets-slice';
import { selectGame } from '@store/games-slice';
import { ButtonsGamesContainer } from './styles';

const ButtonsGames = (): JSX.Element => {
	const listGamesStore = useAppSelector((state) => state.games.list);
	const dispatch = useAppDispatch();
	const url = useAppSelector((state) => state.bets.querys.join(''));

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

export default ButtonsGames;

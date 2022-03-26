import { asyncAddGames } from '@store/games-slice';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import ButtonGame from '../ButtonGame';

const ButtonsGames = (): JSX.Element => {
	const dispatch = useAppDispatch();

	const listGamesStore = useAppSelector((state) => state.games);

	useEffect(() => {
		dispatch(asyncAddGames());
	}, []);

	return (
		<div>
			{Object.keys(listGamesStore).map((listkey) =>
				Object.keys(listkey).map((key) => {
					console.log(listGamesStore.list[key].type);
					<ButtonGame
						name={'listGamesStore.list[key].type'}
						color={'listGamesStore.list[key].color'}
						isSelected={false}
					/>;
				})
			)}
		</div>
	);
};

export default ButtonsGames;

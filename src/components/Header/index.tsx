import { HeaderProps } from '../../types';
import React from 'react';
import { HeaderContainer, Logo, Navigation } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@components/Button';
// import { userActions } from '@store/user-slice';
import { useAppDispatch } from 'src/hooks';

const Header = (props: HeaderProps) => {
	// const { removeUser } = userActions;
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const removeUserHandler = () => {
		// dispatch(removeUser());

		navigate('/auth');
	};

	return (
		<HeaderContainer>
			<Logo>
				<Link to='/home'>
					TGL
					<hr />
				</Link>
				{props.showHomeLink && <Button
					goTo='Home'
					fontSize={20}
					color='var(--grey)'
					showIcon={false}
				/>}
			</Logo>
			<Navigation>
				<Button
					goTo='Account'
					fontSize={20}
					color='var(--grey)'
					showIcon={false}
				/>
				<Button
					goTo='Log out'
					arrow='rigth'
					fontSize={20}
					color='var(--grey)'
					onGoTo={removeUserHandler}
				/>
			</Navigation>
		</HeaderContainer>
	);
};

export default Header;

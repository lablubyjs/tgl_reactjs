import { HeaderProps } from '../../types';
import React, { useState } from 'react';
import { HeaderContainer, Logo, Navigation, UserAccountContainer } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@components/Button';
import { asyncAddUser, removeUser } from '@store/user-slice';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import Modal from '@components/Modal';
import { CgProfile } from 'react-icons/cg';

const Header = (props: HeaderProps) => {
	const [showModal, setShowModal] = useState(false);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const user = useAppSelector((state) => state.user.user);

	const removeUserHandler = () => {
		dispatch(removeUser());
		navigate('/auth');
	};

	const goToHomeHandler = () => {
		navigate('/home');
	};

	const goToAccountHandler = () => {
		console.log(user);
		setShowModal(true);
		dispatch(asyncAddUser());
	};

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<HeaderContainer>
			<Logo>
				<Link to='/home'>
					TGL
					<hr />
				</Link>
				{props.showHomeLink && (
					<Button
						goTo='Home'
						fontSize={20}
						color='var(--grey)'
						showIcon={false}
						onGoTo={goToHomeHandler}
					/>
				)}
			</Logo>
			<Navigation>
				<Button
					goTo='Account'
					fontSize={20}
					color='var(--grey)'
					showIcon={false}
					onGoTo={goToAccountHandler}
				/>
				<Button
					goTo='Log out'
					arrow='rigth'
					fontSize={20}
					color='var(--grey)'
					onGoTo={removeUserHandler}
				/>
			</Navigation>

			{showModal && (
				<Modal onClose={closeModal}>
					<UserAccountContainer>
						<h1>My Account</h1>
						{<div>{user.picture}</div>}
						{!user.picture && <CgProfile />}
						<h3>{user.name}</h3>
						<h4>{user.email}</h4>
						<button onClick={closeModal}>Close</button>
					</UserAccountContainer>
				</Modal>
			)}
		</HeaderContainer>
	);
};

export default Header;

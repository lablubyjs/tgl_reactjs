import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { asyncAddUser, removeUser } from '@store/user-slice';

import { useAppDispatch, useAppSelector } from 'src/hooks';

import { HeaderProps } from '../../types';

import { Button, ButtonModal, Modal, UserAccount } from '@components/index';

import { HeaderContainer, Logo, Navigation } from './styles';

const Header = (props: HeaderProps) => {
	const [showModal, setShowModal] = useState(false);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const removeUserHandler = () => {
		dispatch(removeUser());
		navigate('/auth');
	};

	const goToHomeHandler = () => {
		navigate('/home');
	};

	const goToAccountHandler = async () => {
		await dispatch(asyncAddUser());
		setShowModal(true);
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
					<UserAccount />
					<div style={{ textAlign: 'center', margin: 0 }}>
						<ButtonModal onClick={closeModal}>Close</ButtonModal>
					</div>
				</Modal>
			)}
		</HeaderContainer>
	);
};

export default Header;

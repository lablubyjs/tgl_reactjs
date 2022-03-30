import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { CgProfile } from 'react-icons/cg';

import { asyncAddUser, removeUser } from '@store/user-slice';

import { useAppDispatch, useAppSelector } from 'src/hooks';

import { FormValues, HeaderProps } from '../../types';

import { Button, Modal } from '@components/index';

import { InputContainer } from '..';

import {
	HeaderContainer,
	Logo,
	Navigation,
	UserAccountContainer,
} from './styles';

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

	const onChangeMyAccountHandler = () => {};

	const schema = yup.object().shape({
		email: yup
			.string()
			.email('Invalid email')
			.required('Please provide a valid email'),
		name: yup.string().required('Enter a name'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schema),
	});

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
						{user.picture && <div>{user.picture}</div>}
						{!user.picture && <CgProfile />}
						<form onSubmit={handleSubmit(onChangeMyAccountHandler)}>
							<InputContainer error={errors.email}>
								<input
									placeholder='Email'
									value={'user.email'}
									{...register('email')}
								/>
							</InputContainer>
							<InputContainer error={errors.password}>
								<input
									placeholder='Name'
									value={user.name}
									type='text'
									{...register('name')}
								/>
							</InputContainer>
							<div>
								<button onClick={onChangeMyAccountHandler}>Change data</button>
								<button onClick={closeModal}>Close</button>
							</div>
						</form>
					</UserAccountContainer>
				</Modal>
			)}
		</HeaderContainer>
	);
};

export default Header;

import React from 'react';
import { toast } from 'react-toastify';
import { CgProfile } from 'react-icons/cg';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { userServices } from '@shared/services';

import { useAppSelector } from 'src/hooks';

import { FormValues } from '../../types';

import { InputContainer } from '@components/index';

import { UserAccountContainer } from './styles';

const UserAccount = (): JSX.Element => {
	const user = useAppSelector((state) => state.user.user);

	const { updateMyUser } = userServices();

	const onChangeUserAccountHandler = async (data: FormValues) => {
		try {
			await toast.promise(
				updateMyUser({
					email: data.email!,
					name: data.name!,
				}),
				{
					pending: 'Loading',
					success: 'Successfully changed',
					error: 'Changed failed',
				}
			);

			setTimeout(() => {
				window.location.reload();
			}, 1000);
		} catch (error: any) {
			if (error) {
				toast.error(error.data.message);
			}
		}
	};

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
		control,
		formState: { errors },
	} = useForm<FormValues>({
		defaultValues: {
			name: user.name,
			email: user.email,
		},
		resolver: yupResolver(schema),
	});

	return (
		<UserAccountContainer>
			<h1>My Account</h1>
			{user.picture && <div>{user.picture}</div>}
			{!user.picture && <CgProfile />}
			<form onSubmit={handleSubmit(onChangeUserAccountHandler)}>
				<InputContainer error={errors.email}>
					<Controller
						name='email'
						control={control}
						render={({ field }) => {
							return (
								<input placeholder='Email' {...register('email')} {...field} />
							);
						}}
					/>
				</InputContainer>

				<InputContainer error={errors.name}>
					<Controller
						name='name'
						control={control}
						render={({ field }) => {
							return (
								<input
									placeholder='Name'
									type='text'
									{...register('name')}
									{...field}
								/>
							);
						}}
					/>
				</InputContainer>
				<div>
					<button type='submit'>Change data</button>
				</div>
			</form>
		</UserAccountContainer>
	);
};

export default UserAccount;

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { FormValues } from '../../types/index';

import { authServices } from '@shared/services';

import {
	Container,
	Content,
	Footer,
	Form,
	Slogan,
	InputContainer,
	Button,
	ContainerForm,
	Title,
} from '@components/index';

export default function ChangePassword(): JSX.Element {
	const navigate = useNavigate();

	const { changePassword } = authServices();

	const goToHandler = () => {
		navigate('/auth');
	};

	const schema = yup.object().shape({
		password: yup.string().required('Enter a password'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password'), null], 'Passwords must be the same')
			.required('Enter a password'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schema),
	});

	const onChangePasswordHandler = async (data: FormValues) => {
		const token = localStorage.getItem('token');

		try {
			await toast.promise(changePassword({ password: data.password }, token!), {
				pending: 'Loading',
				success: 'Password changed successfully',
				error: 'Change failed',
			});

			localStorage.removeItem('token');

			navigate('/auth', { replace: true });
		} catch (error: any) {
			if (error) {
				toast.error(error.data.message);
			}
		}
	};

	return (
		<Container>
			<Content>
				<Slogan />
				<ContainerForm>
					<Title>Change Password</Title>
					<Form onSubmit={handleSubmit(onChangePasswordHandler)}>
						<InputContainer error={errors.password}>
							<input
								placeholder='New password'
								type='password'
								{...register('password')}
							/>
						</InputContainer>
						<InputContainer error={errors.confirmPassword}>
							<input
								placeholder='Confirm password'
								type='password'
								{...register('confirmPassword')}
							/>
						</InputContainer>
						<Button
							goTo='Change Password'
							arrow='rigth'
							fontSize={28}
							color='var(--light-green)'
						/>
					</Form>
					<Button
						goTo='Sing In'
						arrow='rigth'
						onGoTo={goToHandler}
						fontSize={35}
						color='var(--grey)'
					/>
				</ContainerForm>
			</Content>
			<Footer />
		</Container>
	);
}

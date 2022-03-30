import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
	Button,
	Container,
	Content,
	Footer,
	Form,
	Slogan,
	ContainerForm,
	Title,
	InputContainer,
} from '@components/index';

import { authServices } from '@shared/services/index';

import { FormValues } from '../../types/index';

export default function Auth() {
	const navigate = useNavigate();
	const { resetPassword } = authServices();

	const schema = yup.object().shape({
		email: yup
			.string()
			.email('Invalid email')
			.required('Please provide a valid email'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schema),
	});

	const goToHandler = () => {
		navigate('/auth');
	};

	const onResetPasswordHandler = async (data: FormValues) => {
		console.log(data);

		try {
			const response = await toast.promise(
				resetPassword({
					email: data.email,
				}),
				{
					pending: 'Loading',
					success: 'Link sent successfully',
					error: 'Failure to send',
				}
			);

			localStorage.setItem('token', response.token);

			navigate('/change-password');
		} catch (error: any) {
			if (error.status === 404) {
				toast.error(error.data.message);
			}
		}
	};

	return (
		<Container>
			<Content>
				<Slogan />
				<ContainerForm>
					<Title>Reset password</Title>
					<Form onSubmit={handleSubmit(onResetPasswordHandler)}>
						<InputContainer error={errors.email}>
							<input placeholder='Email' {...register('email')} />
						</InputContainer>
						<Button
							goTo='Send link'
							arrow='rigth'
							fontSize={32}
							color='var(--light-green)'
						/>
					</Form>
					<Button
						goTo='Back'
						arrow='left'
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

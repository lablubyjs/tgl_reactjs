import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { authServices } from '../../shared/services';

import { FormValues } from '../../types/index';

import { addUser } from '@store/user-slice';

import { useAppDispatch } from 'src/hooks';

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

export default function Auth(): JSX.Element {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { login } = authServices();

	const schema = yup.object().shape({
		email: yup.string().email('Invalid email').required('Please provide a valid email'),
		password: yup.string().required('Enter a password'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schema),
	});

	const goToHandler = () => {
		navigate('/registration');
	};

	const onLoginHandler = async (data: FormValues) => {
		try {
			const response = await toast.promise(
				login({
					email: data.email,
					password: data.password!,
				}),
				{
					pending: 'Loading',
					success: 'Successfully authenticated',
					error: 'Authentication failed',
				}
			);

			dispatch(addUser(response));

			localStorage.setItem('token', response.token.token);

			navigate('/home', { replace: true });
		} catch (error: any) {
			if (error.status === 401) {
				toast.error(error.data.message);
			}
		}
	};

	return (
		<Container>
			<Content>
				<Slogan />
				<ContainerForm>
					<Title>Authentication</Title>
					<Form onSubmit={handleSubmit(onLoginHandler)}>
						<InputContainer error={errors.email}>
							<input placeholder='Email' {...register('email')} />
						</InputContainer>
						<InputContainer error={errors.password}>
							<input
								placeholder='Password'
								type='password'
								{...register('password')}
							/>
						</InputContainer>
						<Link to='/reset-password'>I forget my password</Link>
						<Button
							goTo='Log In'
							arrow='rigth'
							fontSize={32}
							color='var(--light-green)'
						/>
					</Form>
					<Button
						goTo='Sing Up'
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

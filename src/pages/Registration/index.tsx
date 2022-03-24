import Container from '@components/Container';
import Content from '@components/Content';
import Footer from '@components/Footer';
import Form from '@components/Form';
import Slogan from '@components/Slogan';
import { ContainerForm, Title } from '@components/Form/style';
import { yupResolver } from '@hookform/resolvers/yup';
import InputContainer from '@components/InputContainer';
import Button from '@components/Button';

import { userServices } from '../../shared/services';

import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

import { FormValues } from '../../types/index';

export default function Auth() {
	const navigate = useNavigate();
	const { createUser } = userServices();

	const schema = yup.object().shape({
		email: yup.string().email('Invalid email').required('Informe um email'),
		password: yup.string().required('Informe a senha'),
		name: yup.string().required('Informe um nome'),
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

	const onRegistrationHandler = async (data: FormValues) => {
		console.log(data);

		try {
			const response = await toast.promise(
				createUser({
					email: data.email,
					password: data.password!,
					name: data.name!,
				}),
				{
					pending: 'Carregando',
					success: 'Registrado com sucesso',
					error: 'Falha no cadastro',
				}
			);

			navigate('/auth');
		} catch (error: any) {
			if (error.status) {
				toast.error(error.data.message);
			}
		}
	};

	return (
		<Container>
			<Content>
				<Slogan />
				<ContainerForm>
					<Title>Registration</Title>
					<Form onSubmit={handleSubmit(onRegistrationHandler)}>
						<InputContainer error={errors.email}>
							<input placeholder='Nome' {...register('name')} />
						</InputContainer>
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

						<Button
							goTo='Register'
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

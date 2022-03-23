import Container from '@components/Container';
import Content from '@components/Content';
import Footer from '@components/Footer';
import Form from '@components/Form';
import Slogan from '@components/Slogan';
import { ContainerForm, Title } from '@components/Form/style';
import { yupResolver } from '@hookform/resolvers/yup';
import InputContainer from '@components/InputContainer';
import Button from '@components/Button';

import { authServices } from '../../shared/services';

import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

import { FormValues } from '../../types/index';

export default function Auth() {
	const navigate = useNavigate();
	const { resetPassword } = authServices();

	const schema = yup.object().shape({
		email: yup.string().email('Invalid email').required('Informe um email'),
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
					pending: 'Carregando',
					success: 'Link enviado',
					error: 'Falha no envio',
				}
			);

			navigate('/auth');
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

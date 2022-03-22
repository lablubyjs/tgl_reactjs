import Container from '@components/Container';
import Content from '@components/Content';
import Footer from '@components/Footer';
import Form from '@components/Form/indext';
import Slogan from '@components/Slogan';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

export default function Auth() {
	const navigate = useNavigate();

	const goToHandler = () => {
		navigate('/registration');
	};

	return (
		<Container>
			<Content>
				<Slogan />
				<Form
					title='Authentication'
					goTo='Sing Up'
					onGoTo={goToHandler}
					arrow='right'>
					<input placeholder='Email' />
					<input placeholder='Password' />
					<Link to='/reset-password'>I forget my password</Link>
					<button>
						Log In
						<BsArrowRight />
					</button>
				</Form>
			</Content>
			<Footer />
		</Container>
	);
}

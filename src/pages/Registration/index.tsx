import React from 'react';
import Container from '@components/Container';
import Content from '@components/Content';
import Footer from '@components/Footer';
import Form from '@components/Form/indext';
import Slogan from '@components/Slogan';
import { BsArrowRight } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

function Registration() {
	const navigate = useNavigate();

	const goToHandler = () => {
		navigate('/auth');
	};

	return (
		<Container>
			<Content>
				<Slogan />
				<Form
					title='Registration'
					goTo='Back'
					onGoTo={goToHandler}
					arrow='left'>
					<input placeholder='Name' />
					<input placeholder='Email' />
					<input placeholder='Password' />
					<button>
						Register
						<BsArrowRight />
					</button>
				</Form>
			</Content>
			<Footer />
		</Container>
	);
}

export default Registration;

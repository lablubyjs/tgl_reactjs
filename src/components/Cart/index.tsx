import Button from '@components/Button';
import EmptyMessage from '@components/EmptyMessage';
import React from 'react';
import { useAppSelector } from 'src/hooks';
import { ButtonSave, ContainerCart } from './style';

const Cart = () => {
	const gamesInCart = useAppSelector((state) => state.cart.games);

	return (
		<ContainerCart>
			<h1>Cart</h1>

			{gamesInCart.length === 0 && (
				<EmptyMessage
					message='No games added to cart'
					type='CART'
					fontSize={20}
				/>
			)}

			// Games in cart

			<ButtonSave>
				<Button goTo={'Save'} fontSize={35} color={'var(--light-green)'} />
			</ButtonSave>
		</ContainerCart>
	);
};

export default Cart;

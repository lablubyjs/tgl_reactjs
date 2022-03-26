import React from 'react';
import { ButtonGameProps } from '../../../types';
import { Button } from './styles';

const ButtonGame = (props: ButtonGameProps) => {
	return (
		<Button color={props.color} isSelected={props.isSelected}>
			{props.name}
		</Button>
	);
};

export default ButtonGame;

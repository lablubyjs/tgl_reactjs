import React from 'react';

import { ButtonGameProps } from '../../../types';

import { Button } from './styles';

const ButtonGame = (props: ButtonGameProps) => {
	return (
		<Button id={props.id} color={props.color} isSelected={props.isSelected} onClick={props.onClick}>
			{props.name}
		</Button>
	);
};

export default ButtonGame;

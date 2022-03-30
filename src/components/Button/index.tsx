import React from 'react';

import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import { ButtonProps } from '../../types/index';

import { ButtonContainer } from './style';

function Button(props: ButtonProps): JSX.Element {
	const showIcon = props.showIcon !== undefined ? props.showIcon : true;

	const button =
		props.arrow === 'left' ? (
			<ButtonContainer
				onClick={props.onGoTo}
				fontSize={props.fontSize}
				color={props.color}>
				{showIcon && <BsArrowLeft />}
				{props.goTo}
			</ButtonContainer>
		) : (
			<ButtonContainer
				onClick={props.onGoTo}
				fontSize={props.fontSize}
				color={props.color}>
				{props.goTo}
				{showIcon && <BsArrowRight />}
			</ButtonContainer>
		);

	return button;
}

export default Button;

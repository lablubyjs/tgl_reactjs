import React from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { ButtonContainer } from './style';
import { ButtonProps } from '../../types/index';


function Button(props: ButtonProps): JSX.Element {
	const button =
		props.arrow === 'left' ? (
			<ButtonContainer
				onClick={props.onGoTo}
				fontSize={props.fontSize}
				color={props.color}>
				<BsArrowLeft />
				{props.goTo}
			</ButtonContainer>
		) : (
			<ButtonContainer
				onClick={props.onGoTo}
				fontSize={props.fontSize}
				color={props.color}>
				{props.goTo}
				<BsArrowRight />
			</ButtonContainer>
		);

	return button;
}

export default Button;

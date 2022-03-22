import React from 'react';
import { ContainerForm, FormContent, Title } from './style';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

function Form(props: any): JSX.Element {
	const contentButton =
		props.arrow === 'left' ? (
			<button onClick={props.onGoTo}>
				<BsArrowLeft />
				{props.goTo}
			</button>
		) : (
			<button onClick={props.onGoTo}>
				{props.goTo}
				<BsArrowRight />
			</button>
		);

	return (
		<ContainerForm>
			<Title>{props.title}</Title>
			<FormContent>{props.children}</FormContent>
			<button onClick={props.onGoTo}>{contentButton}</button>
		</ContainerForm>
	);
}

export default Form;

import React from 'react';

import { ImSad } from 'react-icons/im';
import { BsCart3 } from 'react-icons/bs';

import { EmptyMessageProps } from '../../types';

import { MessageContainer } from './style';

const EmptyMessage = (props: EmptyMessageProps) => {
	const { message, type, fontSize, children } = props;

	let icon;

	if (type === 'BET') {
		icon = <ImSad />;
	}

	if (type === 'CART') {
		icon = <BsCart3 />;
	}

	return (
		<MessageContainer fontSize={fontSize} >
			{icon}
			{message}
			{children}
		</MessageContainer>
	);
};

export default EmptyMessage;

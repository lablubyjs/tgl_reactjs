import { InputProps } from '../../types';
import React from 'react';
import { InputContent } from './style';

function InputContainer(props: InputProps): JSX.Element {
	return (
		<>
			<InputContent>{props.children}</InputContent>
			{props.error && <p>{props.error.message}</p>}
		</>
	);
}

export default InputContainer;

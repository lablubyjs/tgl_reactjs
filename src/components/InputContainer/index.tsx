import React from 'react';

import { InputProps } from '../../types';

import { Error, InputContent } from './style';

function InputContainer(props: InputProps): JSX.Element {
	return (
		<>
			<InputContent>{props.children}</InputContent>
			{props.error && (
				<Error>
					{props.error.message}
				</Error>
			)}
		</>
	);
}

export default InputContainer;

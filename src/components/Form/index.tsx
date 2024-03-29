import React from 'react';

import { FormContent } from './style';

function Form(props: any): JSX.Element {
	return <FormContent onSubmit={props.onSubmit}>{props.children}</FormContent>;
}

export default Form;

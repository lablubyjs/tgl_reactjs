import React from 'react';

import { ContainerStyle } from './style';

function Container(props: any): JSX.Element {
	return <ContainerStyle>{props.children}</ContainerStyle>;
}

export default Container;

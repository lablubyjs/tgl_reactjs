import React from 'react';
import { ContainerContent } from './style';

function Content(props: any): JSX.Element {
	return <ContainerContent>{props.children}</ContainerContent>;
}

export default Content;

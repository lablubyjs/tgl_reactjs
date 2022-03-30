import React from 'react';

import { ContainerContent } from './style';

function Content(props: any): JSX.Element {
	return (
		<ContainerContent
			colums={props.colums}
			padding={props.padding}
			marginTop={props.marginTop}>
			{props.children}
		</ContainerContent>
	);
}

export default Content;

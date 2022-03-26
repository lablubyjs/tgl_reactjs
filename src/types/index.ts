import {
	IListBetsResponse,
	IListGamesReponse,
	ILoginResponse,
} from '@shared/interfaces';
import React from 'react';
import { FieldError } from 'react-hook-form';

export type ButtonProps = {
	arrow?: string;
	goTo: string;
	onGoTo?: () => void;
	fontSize: number;
	color: string;
	showIcon?: boolean;
};

export type FormValues = {
	name?: string;
	email: string;
	password?: string;
};

export type InputProps = {
	children: React.InputHTMLAttributes<any>;
	error?: FieldError;
};

export type PropsProtect = {
	component: JSX.Element
}

export type HeaderProps = {
	showHomeLink: boolean
}

export type ButtonGameProps = {
	name: string
	color: string
	isSelected: boolean;
}
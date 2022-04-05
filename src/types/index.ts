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
	email?: string;
	password?: string;
	confirmPassword?: string;
};

export type InputProps = {
	children: React.InputHTMLAttributes<any>;
	error?: FieldError;
};

export type PropsProtect = {
	component: JSX.Element;
};

export type HeaderProps = {
	showHomeLink: boolean;
};

export type ButtonGameProps = {
	id: any,
	name: string;
	color: string;
	isSelected: boolean;
	onClick: () => void;
};

export type EmptyMessageProps = {
	message: string;
	type: string;
	fontSize: number;
	children?: any;
};

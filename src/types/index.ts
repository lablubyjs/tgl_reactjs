import React from 'react';
import { Control, FieldError } from 'react-hook-form';

export type ButtonProps = {
	arrow: string;
	goTo: string;
	onGoTo?: () => void;
	fontSize: number;
	color: string;
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

export type ControlledInputProps = InputProps & {
	control: Control<any>;
	name: string;
};

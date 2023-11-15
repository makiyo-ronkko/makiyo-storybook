import { ComponentType } from 'react';
import { Color, Height, Shadow, Size, Width } from '../types/index';
import React from 'react';

export interface StyleWrapperProps {
	backgroundColor?: Color;
	isShadow?: boolean;
	shadowColor?: Shadow;
	className?: string;
	width?: Width;
	height?: Height;
	size?: Size;
	disabled?: boolean;
	style?: React.CSSProperties;
}

export function StyleWrapper<T>(WrappedComponent: ComponentType<T>) {
	const WrappedComponentWithStyle = ({
		backgroundColor,
		isShadow = false,
		shadowColor = 'secondary',
		style,
		className = '',
		width,
		height,
		size,
		disabled = false,
		...props
	}: T & StyleWrapperProps) => {
		const backgroundsStyle = getBackgroundColor(disabled, backgroundColor);
		const shadowStyle = getShadow(isShadow, shadowColor);
		const sizeStyle = getSize(width, height, size);
		return (
			<WrappedComponent
				style={{ ...style, ...backgroundsStyle, ...shadowStyle, ...sizeStyle }}
				className={className}
				disabled={disabled}
				{...(props as unknown as T)}
			/>
		);
	};
	return WrappedComponentWithStyle;
}

function getBackgroundColor(disabled: boolean, backgroundColor?: Color) {
	const style: React.CSSProperties = {};

	if (disabled) {
		style.backgroundColor = 'var(--color-dark-transparent)';
		style.color = 'white';
		style.pointerEvents = 'none';
		return style;
	}

	if (backgroundColor) {
		if (
			backgroundColor === 'primary' ||
			backgroundColor === 'primary-dark' ||
			backgroundColor === 'secondary' ||
			backgroundColor === 'secondary-dark' ||
			backgroundColor === 'tomato' ||
			backgroundColor === 'cloud' ||
			backgroundColor === 'nude' ||
			backgroundColor === 'forest' ||
			backgroundColor === 'default' ||
			backgroundColor === 'transparent-dark' ||
			backgroundColor === 'transparent'
		) {
			style.color = `var(--color-${backgroundColor}-font)`;
		}
		if (backgroundColor === 'transparent-dark') {
			style.backgroundColor = `transparent-dark`;
		} else style.backgroundColor = `var(--color-${backgroundColor})`;
	}

	return style;
}

function getShadow(isShadow: boolean, shadowColor: Shadow) {
	const style: React.CSSProperties = {};
	if (isShadow) {
		if (shadowColor) style.boxShadow = `4px 4px var(--color-${shadowColor})`;
	}
	return style;
}

function getSize(width?: Width, height?: Height, size?: Size) {
	const style: React.CSSProperties = {};
	if (width) {
		if (width === 'auto') {
			style.width = '100%';
		} else {
			style.width = `var(--content-${width})`;
		}
	}
	if (height) {
		if (height === 'auto') {
			style.height = '100%';
		} else {
			style.height = `var(--element-${height})`;
		}
	}
	if (size) {
		if (size === 'auto') {
			style.width = '100%';
			style.height = '100%';
		} else {
			style.width = `var(--element-${size})`;
			style.height = `var(--element-${size})`;
		}
	}
	return style;
}

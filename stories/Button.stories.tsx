import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
	title: 'Example/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		backgroundColor: 'tomato',
		width: 'xl',
		children: 'Submit',
	},
};

export const WithShadow: Story = () => (
	<Button backgroundColor='primary' width='lg' isShadow={true}>
		Click me!
	</Button>
);

export const Outlined: Story = () => (
	<Button
		backgroundColor='transparent'
		width='lg'
		outlined={true}
		outlineColor='forest'
	>
		Outlined
	</Button>
);

export const Loading: Story = () => (
	<Button
		backgroundColor='secondary-dark'
		width='md'
		height='xxxs'
		isShadow={true}
		shadowColor='shadow'
		isLoading={true}
	/>
);

export const Secondary: Story = {
	args: {
		label: 'Button',
	},
};

export const Large: Story = {
	args: {
		size: 'large',
		label: 'Button',
	},
};

export const Small: Story = {
	args: {
		size: 'small',
		label: 'Button',
	},
};

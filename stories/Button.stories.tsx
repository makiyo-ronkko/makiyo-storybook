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
		backgroundColor: 'primary',
		width: 'xl',
		children: 'Submit',
	},
};

export const WithShadow: Story = () => (
	<Button backgroundColor='tomato' width='lg' isShadow={true}>
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

export const Large: Story = {
	args: {
		backgroundColor: 'cloud',
		width: 'lg',
		label: 'Button',
		children: 'Large',
	},
};

export const Small: Story = {
	args: {
		width: 'sm',
		label: 'Button',
		children: 'Small',
		backgroundColor: 'nude',
	},
};

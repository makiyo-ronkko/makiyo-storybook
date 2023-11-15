import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';

const meta = {
	title: 'Example/Loader',
	component: Loader,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

// export const Default: Story = (args: any) => <Loader {...args} />;

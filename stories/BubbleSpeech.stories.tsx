import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BubbleSpeech } from './BubbleSpeech';

const meta = {
	title: 'Example/BubbleSpeech',
	component: BubbleSpeech,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'white',
		},
	},
	argTypes: {
		backgroundColor: {
			options: [
				'primary',
				'primary-dark',
				'secondary',
				'secondary-dark',
				'tomato',
				'nude',
				'forest',
				'cloud',
				'default',
				'transparent-dark',
			],
			control: { type: 'radio' },
		},
		shadow: {
			options: [
				'primary',
				'primary-dark',
				'secondary',
				'secondary-dark',
				'tomato',
				'nude',
				'forest',
				'cloud',
				'default',
				'transparent-dark',
			],
			control: { type: 'radio' },
		},
		color: {
			options: ['text-white', 'text-dark'],
			control: { type: 'radio' },
		},
	},
} as Meta<typeof BubbleSpeech>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (
	args: React.JSX.IntrinsicAttributes &
		import('../../../../../Users/Makiyo/Desktop/makiyo-storybook/stories/BubbleSpeech').BubbleSpeechProps
) => <BubbleSpeech {...args} />;

export const WithText: Story = () => (
	<BubbleSpeech backgroundColor='nude' shadowColor='primary' color='text-dark'>
		Hello!
	</BubbleSpeech>
);

export const LongText: Story = () => (
	<BubbleSpeech backgroundColor='cloud' shadowColor='forest' color='text-white'>
		Hello! Moi! こんにちは！
	</BubbleSpeech>
);

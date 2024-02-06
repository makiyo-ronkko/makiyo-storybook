import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BubbleSpeech, BubbleSpeechProps } from './BubbleSpeech';

const meta = {
  title: 'Example/BubbleSpeech',
  component: BubbleSpeech,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'default',
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

export const Default: Story = (args: React.JSX.IntrinsicAttributes & BubbleSpeechProps) => <BubbleSpeech {...args} />;

Default.args = {};

export const WithText: Story = (args: React.JSX.IntrinsicAttributes & BubbleSpeechProps) => (
  <BubbleSpeech {...args}>Hello!</BubbleSpeech>
);

WithText.args = {
  backgroundColor: 'nude',
  shadowColor: 'primary',
  color: 'text-dark',
};

export const LongText: Story = (args: React.JSX.IntrinsicAttributes & BubbleSpeechProps) => (
  <BubbleSpeech {...args}>Hello! Moi! こんにちは！</BubbleSpeech>
);

LongText.args = {
  backgroundColor: 'cloud',
  shadowColor: 'forest',
  color: 'text-white',
};

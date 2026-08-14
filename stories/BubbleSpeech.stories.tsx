import type { Meta, StoryObj } from '@storybook/nextjs';
import { BubbleSpeech } from './BubbleSpeech';

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
    shadowColor: {
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
} satisfies Meta<typeof BubbleSpeech>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <BubbleSpeech {...args}></BubbleSpeech>,
  args: {
    children: 'こんにちは!',
  },
};

export const WithText: Story = {
  render: (args) => <BubbleSpeech {...args}>Hello!</BubbleSpeech>,
  args: {
    children: 'Hello!',
    backgroundColor: 'nude',
    shadowColor: 'primary',
    color: 'text-dark',
  },
};

export const LongText: Story = {
  render: (args) => <BubbleSpeech {...args}>Hello! Moi! こんにちは！</BubbleSpeech>,
  args: {
    children: 'Hello! Moi! こんにちは！',
    backgroundColor: 'cloud',
    shadowColor: 'forest',
    color: 'text-white',
  },
};

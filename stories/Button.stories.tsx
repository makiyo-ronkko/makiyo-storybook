import type { Meta, StoryObj } from '@storybook/nextjs';
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
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className: '',
    backgroundColor: 'primary',
    width: 'xl',
    children: 'Submit',
  },
};

export const WithShadow: Story = {
  render: (args) => <Button {...args}>Click me!</Button>,
  args: {
    className: '',
    backgroundColor: 'tomato',
    width: 'lg',
    isShadow: true,
    children: 'Click me!',
  },
};

export const Outlined: Story = {
  render: (args) => <Button {...args}>Outlined</Button>,
  args: {
    className: '',
    backgroundColor: 'transparent',
    width: 'lg',
    outlined: true,
    outlineColor: 'forest',
    children: 'Outlined',
  },
};

export const Loading: Story = {
  render: (args) => <Button {...args} />,
  args: {
    className: '',
    backgroundColor: 'secondary-dark',
    width: 'md',
    height: 'xxxs',
    isShadow: true,
    shadowColor: 'shadow',
    isLoading: true,
    children: 'Loading',
  },
};

export const Large: Story = {
  render: (args) => <Button {...args} />,
  args: {
    className: '',
    backgroundColor: 'cloud',
    width: 'lg',
    children: 'Large',
  },
};

export const Small: Story = {
  render: (args) => <Button {...args} />,
  args: {
    className: '',
    width: 'sm',
    children: 'Small',
    backgroundColor: 'nude',
  },
};

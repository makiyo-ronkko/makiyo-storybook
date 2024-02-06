import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './Button';
import { JSX } from 'react';
import { StyleWrapperProps } from './hoc/StyleWrapper';

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

export const WithShadow: Story = (args: JSX.IntrinsicAttributes & ButtonProps & StyleWrapperProps) => (
  <Button {...args}>Click me!</Button>
);

WithShadow.args = {
  backgroundColor: 'tomato',
  width: 'lg',
  isShadow: true,
  children: 'Click me!',
};

export const Outlined: Story = (args: JSX.IntrinsicAttributes & ButtonProps & StyleWrapperProps) => (
  <Button {...args}>Outlined</Button>
);

Outlined.args = {
  backgroundColor: 'transparent',
  width: 'lg',
  outlined: true,
  outlineColor: 'forest',
};

export const Loading: Story = (args: JSX.IntrinsicAttributes & ButtonProps & StyleWrapperProps) => <Button {...args} />;

Loading.args = {
  backgroundColor: 'secondary-dark',
  width: 'md',
  height: 'xxxs',
  isShadow: true,
  shadowColor: 'shadow',
  isLoading: true,
};

export const Large: Story = (args: JSX.IntrinsicAttributes & ButtonProps & StyleWrapperProps) => <Button {...args} />;

Large.args = {
  backgroundColor: 'cloud',
  width: 'lg',
  children: 'Large',
};

export const Small: Story = (args: JSX.IntrinsicAttributes & ButtonProps & StyleWrapperProps) => <Button {...args} />;

Small.args = {
  width: 'sm',
  children: 'Small',
  backgroundColor: 'nude',
};

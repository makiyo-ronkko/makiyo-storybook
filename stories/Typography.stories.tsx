import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta = {
  title: 'Example/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    variant: {
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle',
        'body1',
        'body2',
        'button-text',
        'caption-text',
        'description-text',
        'overline-text',
      ],
      control: { type: 'radio' },
    },
    type: {
      options: ['div', 'p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'radio' },
    },
    className: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const List: Story = (args: any) => (
  <div>
    <Typography variant="h1" type="div" style={{ backgroundColor: 'var(--color-default)' }} {...args}>
      h1. Heading
    </Typography>
    <br />
    <Typography variant="h2" type="div" style={{ backgroundColor: 'var(--color-default)' }} {...args}>
      h2. Heading
    </Typography>
    <br />
    <Typography variant="h3" type="div" style={{ backgroundColor: 'var(--color-default)' }} {...args}>
      h3. Heading
    </Typography>
    <br />
    <Typography variant="h4" type="div" style={{ backgroundColor: 'var(--color-default)' }} {...args}>
      h4. Heading
    </Typography>
    <br />
    <Typography variant="h5" type="div" style={{ backgroundColor: 'var(--color-default)' }} {...args}>
      h5. Heading
    </Typography>
    <br />
    <Typography variant="h6" type="div" style={{ backgroundColor: 'var(--color-default)' }} {...args}>
      h6. Heading
    </Typography>
    <br />
    <Typography variant="subtitle" type="div" style={{ backgroundColor: 'var(--color-default)' }} {...args}>
      subtitle. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
    </Typography>
    <br />
    <Typography variant="body1" type="div" style={{ backgroundColor: 'var(--color-default)' }} {...args}>
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
      beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
      quasi quidem quibusdam.
    </Typography>
    <br />
    <Typography variant="body2" type="div" style={{ backgroundColor: 'var(--color-default)' }} {...args}>
      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
      beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
      quasi quidem quibusdam.
    </Typography>
    <br />
    <Typography variant="description-text" type="div" style={{ backgroundColor: 'var(--color-default)' }} {...args}>
      description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
      beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
      quasi quidem quibusdam.
    </Typography>
    <br />
    <Typography variant="button-text" type="div" style={{ backgroundColor: 'var(--color-default)' }} {...args}>
      BUTTON TEXT
    </Typography>
    <br />
    <Typography variant="caption-text" type="div" style={{ backgroundColor: 'var(--color-default)' }} {...args}>
      caption text
    </Typography>
    <br />
    <Typography variant="overline-text" type="div" style={{ backgroundColor: 'var(--color-default)' }} {...args}>
      OVERLINE TEXT
    </Typography>
  </div>
);

List.args = {};

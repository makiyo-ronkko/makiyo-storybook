import type { Meta, StoryObj } from '@storybook/nextjs';
import { Typography } from './Typography';

const meta = {
  title: 'Example/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const List: Story = {
  render: (args) => (
    <div>
      <Typography {...args} variant="h1" type="div" style={{ backgroundColor: 'var(--color-default)' }}>
        h1. Heading
      </Typography>
      <br />
      <Typography {...args} variant="h2" type="div" style={{ backgroundColor: 'var(--color-default)' }}>
        h2. Heading
      </Typography>
      <br />
      <Typography {...args} variant="h3" type="div" style={{ backgroundColor: 'var(--color-default)' }}>
        h3. Heading
      </Typography>
      <br />
      <Typography {...args} variant="h4" type="div" style={{ backgroundColor: 'var(--color-default)' }}>
        h4. Heading
      </Typography>
      <br />
      <Typography {...args} variant="h5" type="div" style={{ backgroundColor: 'var(--color-default)' }}>
        h5. Heading
      </Typography>
      <br />
      <Typography {...args} variant="h6" type="div" style={{ backgroundColor: 'var(--color-default)' }}>
        h6. Heading
      </Typography>
      <br />
      <Typography {...args} variant="subtitle" type="div" style={{ backgroundColor: 'var(--color-default)' }}>
        subtitle. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <br />
      <Typography {...args} variant="body1" type="div" style={{ backgroundColor: 'var(--color-default)' }}>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
        beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <br />
      <Typography {...args} variant="body2" type="div" style={{ backgroundColor: 'var(--color-default)' }}>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
        beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <br />
      <Typography {...args} variant="description-text" type="div" style={{ backgroundColor: 'var(--color-default)' }}>
        description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit,
        quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat
        deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <br />
      <Typography {...args} variant="button-text" type="div" style={{ backgroundColor: 'var(--color-default)' }}>
        BUTTON TEXT
      </Typography>
      <br />
      <Typography {...args} variant="caption-text" type="div" style={{ backgroundColor: 'var(--color-default)' }}>
        caption text
      </Typography>
      <br />
      <Typography {...args} variant="overline-text" type="div" style={{ backgroundColor: 'var(--color-default)' }}>
        OVERLINE TEXT
      </Typography>
    </div>
  ),
  args: {
    variant: 'h1',
    children: 'h1. Heading',
  },
};

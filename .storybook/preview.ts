import type { Preview } from '@storybook/react';
import './main.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewMode: 'docs',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'default',
      values: [
        {
          name: 'default',
          value: '#f7f7f7',
        },
        {
          name: 'primary',
          value: '#b3d6ff',
        },
        {
          name: 'secondary',
          value: '#54a1f8',
        },
      ],
    },
  },
};

export default preview;

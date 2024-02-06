import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'hsl(212, 92%, 65%)',
  colorSecondary: 'hsl(230, 100%, 85%)',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '  hsl(212, 92%, 65%)',
  barSelectedColor: '  hsl(212, 92%, 65%)',
  barBg: 'hsl(0, 0%, 100%)',

  // Form colors
  inputBg: 'hsl(0, 0%, 100%)',
  inputBorder: 'hsl(0, 0%, 100%)',
  inputTextColor: 'hsl(0, 0%, 50%)',
  inputBorderRadius: 4,

  brandTitle: 'Makiyo Rönkkö Website',
  brandUrl: 'https://makiyo-app.vercel.app',
  // brandImage: 'https://makiyo-app.vercel.app/makiyo.png',
  brandTarget: '_makiyo',
});

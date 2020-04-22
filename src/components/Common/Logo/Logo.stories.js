import React from 'react';
// import { action } from '@storybook/addon-actions';

import { ThemeProvider } from '@material-ui/core/styles';
import Logo from './Logo';
import Theme from '../Theme';

export default {
  component: Logo,
  title: 'Logo',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <ThemeProvider theme={Theme}>
    <Logo />
  </ThemeProvider>
);

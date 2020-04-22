import React from 'react';
// import { action } from '@storybook/addon-actions';

import { ThemeProvider } from '@material-ui/core/styles';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Theme from '../Theme';
import HeaderBar from './HeaderBar';

storiesOf('HeaderBar', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <ThemeProvider theme={Theme}>
      <HeaderBar />
    </ThemeProvider>
  ))
  .add('logged', () => (
    <ThemeProvider theme={Theme}>
      <HeaderBar logged />
    </ThemeProvider>
  ));

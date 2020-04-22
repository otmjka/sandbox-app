import React from 'react';
// import { action } from '@storybook/addon-actions';

import { ThemeProvider } from '@material-ui/core/styles';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Theme from '../Theme';
import LoginForm from './LoginForm';

storiesOf('LoginForm', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <ThemeProvider theme={Theme}>
      <LoginForm />
    </ThemeProvider>
  ))
  .add('logged', () => (
    <ThemeProvider theme={Theme}>
      <LoginForm logged />
    </ThemeProvider>
  ));

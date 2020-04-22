import React from 'react';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';

import App from '../App';
import Router from '../Router';
import IntlProviderContainer from '../../../containers/Common/IntlProviderContainer';

import theme from '../Theme';
import { SnackbarProvider } from 'notistack';

function Entrypoint({ history, store }) {
  return (
    <Provider store={store}>
      <IntlProviderContainer>
        <SnackbarProvider maxSnack={3}>
          <Router history={history}>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </Router>
        </SnackbarProvider>
      </IntlProviderContainer>
    </Provider>
  );
}

export default Entrypoint;

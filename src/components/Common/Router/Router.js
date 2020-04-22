import React from 'react';
import { ConnectedRouter } from 'connected-react-router';

export default function Router(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ConnectedRouter {...props} />;
}

import React from 'react';
import { useSelector } from 'react-redux';

import Routes from '../../components/Common/Routes';

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

const RoutesContainer = () => {
  const state = useSelector(mapStateToProps);
  return <Routes {...state} />;
};

export default RoutesContainer;

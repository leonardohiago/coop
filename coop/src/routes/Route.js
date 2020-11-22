import React from 'react';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { email } = useAuth();

  if(isPrivate && !email) {
    return <Redirect to="/login" />;
  }
  
  return (
    <ReactDOMRoute
      {...rest}
      render={() => (
        <Component />
      )}
    />
  );
};

export default Route;

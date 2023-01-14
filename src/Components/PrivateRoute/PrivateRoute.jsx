import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ children }) {
  const curentAuth = useSelector(state => state.auth.user.name);

  return curentAuth.length > 2 ? children : <Navigate to="/auth/login" />;
}

export default PrivateRoute;

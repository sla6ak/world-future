import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ children }) {
  // const curentAuth = useSelector(state => state.auth);

  return false ? children : <Navigate to="/login" />;
}

export default PrivateRoute;

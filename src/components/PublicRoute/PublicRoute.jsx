import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  const curentAuth = useSelector(state => state.auth);

  return curentAuth.length < 2 ? children : <Navigate to="/play" />;
}

export default PublicRoute;

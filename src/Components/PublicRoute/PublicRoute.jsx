import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  const { name } = useSelector(state => state.auth.user);

  return name.length < 2 ? children : <Navigate to="/setlord" />;
}

export default PublicRoute;

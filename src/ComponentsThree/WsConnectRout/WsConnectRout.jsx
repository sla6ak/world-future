import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function WsConnectRout({ children }) {
  const { lordInfo } = useSelector(state => state);

  return lordInfo?.nikName.length > 2 ? children : <Navigate to="/setlord" />;
}

export default WsConnectRout;

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function WsConnectRout({ children }) {
  const { lordInfo } = useSelector(state => state);
  lordInfo?.nikName.length < 2 &&
    toast.warn(`Lord dont loaded, please repit one more`);

  return lordInfo?.nikName.length > 2 ? children : <Navigate to="/setlord" />;
}

export default WsConnectRout;

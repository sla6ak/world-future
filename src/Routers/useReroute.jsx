import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

export const useReroute = () => {
  const { lordInfo } = useSelector(state => state);
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  useEffect(() => {
    if (!lordInfo) {
      return;
    }
    const rerout = `/play/${lordInfo?.planet}`;
    if (pathname !== rerout) {
      navigate(rerout);
    }
  }, [lordInfo, navigate, pathname]);

  return;
};

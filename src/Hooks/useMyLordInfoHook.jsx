import { useEffect } from 'react';
import { allLordInfoAction } from 'Redux/Slises/myLordInfo';
import { useDispatch } from 'react-redux';
import { useGetMyPersonQuery } from 'Redux/ServerAPI/API_BASE_SERVER';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useMyLordInfoHook = () => {
  // изначально переполучал весь объект но должен быть переработан и перезаписывать только измененные данные
  const { data: lordInfoBack } = useGetMyPersonQuery();
  const { lordInfo } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //
  useEffect(() => {
    if (!lordInfoBack) {
      return;
    }
    dispatch(allLordInfoAction(lordInfoBack?.data));
  }, [dispatch, lordInfoBack]);

  useEffect(() => {
    if (!lordInfo) {
      return;
    }
    navigate(`/play/${lordInfo.planet}`);
  }, [lordInfo, navigate]);

  return { lordInfo };
};

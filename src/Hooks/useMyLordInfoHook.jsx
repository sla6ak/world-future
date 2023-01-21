import { useEffect } from 'react'
import { allLordInfoAction } from 'Redux/Slises/lordInfoSlise'
import { useDispatch, useSelector } from 'react-redux'
import { useGetMyPersonQuery } from 'Redux/ServerAPI/API_BASE_SERVER'

export const useMyLordInfoHook = () => {
  // изначально переполучал весь объект но должен быть переработан и перезаписывать только измененные данные
  const { lordInfo } = useSelector((state) => state)
  const { data: lordInfoBack } = useGetMyPersonQuery()
  const dispatch = useDispatch()
  //
  useEffect(() => {
    if (lordInfo) return
    if (!lordInfoBack) {
      return
    }
    dispatch(allLordInfoAction(lordInfoBack?.data))
  }, [dispatch, lordInfo, lordInfoBack])
}

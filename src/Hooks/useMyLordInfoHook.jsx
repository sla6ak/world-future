import { useEffect } from 'react'
import { allLordInfoAction } from 'Redux/Slises/lordInfoSlise'
import { useDispatch, useSelector } from 'react-redux'
import { useGetMyPersonQuery } from 'Redux/ServerAPI/API_BASE_SERVER'
import { myPositionAction } from 'Redux/Slises/myPositionSlise'

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

  useEffect(() => {
    if (lordInfo) return
    if (!lordInfoBack) {
      return
    }
    dispatch(
      myPositionAction({
        x: lordInfo.positionX,
        y: lordInfo.positionY,
        z: lordInfo.positionZ
      })
    )
  }, [])
}

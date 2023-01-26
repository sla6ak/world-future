import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSendMessageMutation } from 'Redux/WebSocketsAPI/WS_BASE_API'

export const useMyPositionHook = () => {
  // изначально переполучал весь объект но должен быть переработан и перезаписывать только измененные данные
  const { myPosition } = useSelector((state) => state)
  const { planet } = useSelector((state) => state.lordInfo)
  const dispatch = useDispatch()
  const [sendMessage] = useSendMessageMutation()
  useEffect(() => {
    if (!myPosition) {
      return
    }
    sendMessage({ channel: planet, data: myPosition })
  }, [dispatch, myPosition])
}

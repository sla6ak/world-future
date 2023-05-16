import { useEffect } from 'react'
import { useSendMessageMutation } from 'Redux/WebSocketsAPI/WS_BASE_API'
import { useSelector, useDispatch } from 'react-redux'
import { closeCanvasModal } from 'Redux/Slices/openCanvasModalSlice'

export const useModalClickKeyboardControls = () => {
  const { lordInfo } = useSelector((state) => state)
  const [sendMessage] = useSendMessageMutation()
  const dispatch = useDispatch()

  useEffect(() => {
    function actionByKey(key) {
      let home = 'BlueHome'
      if (lordInfo.race === 'Blue') {
        home = 'BlueHome'
      } else {
        home = 'YellowHome'
      }
      const keys = {
        KeyG: 'LostWorld',
        KeyH: home
      }
      return keys[key]
    }
    const handleKeyDown = (e) => {
      if (actionByKey(e.code)) {
        const toPlanet = actionByKey(e.code)
        sendMessage({
          channel: 'myLord',
          data: { event: 'choosePlanet', planet: toPlanet }
        })
        return dispatch(closeCanvasModal())
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [dispatch, lordInfo.race, sendMessage])
}

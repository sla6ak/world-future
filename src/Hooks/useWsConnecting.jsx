import { useEffect } from 'react'
import {
  useGetMessagesQuery,
  useSendMessageMutation
} from 'Redux/WebSocketsAPI/WS_BASE_API'
import { isErrorUser } from 'Redux/Slices/errorUserSlise'
import { useDispatch } from 'react-redux'
import { statePlanetAction } from 'Redux/Slices/planetaBlueHomeInfoSlise'
import { allLordInfoAction } from 'Redux/Slices/lordInfoSlise'

export const useWsConnecting = () => {
  const { data: dataWS, error } = useGetMessagesQuery()
  const [sendMessage, { isLoading }] = useSendMessageMutation()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!dataWS?.data) return
    if (isLoading) return

    const { data } = dataWS

    if (data.channel === 'connect') {
      if (!data.data) {
        return
      }
      dispatch(allLordInfoAction(data.data.lordInfo))
      // console.log('connect', data);
    }
    if (data.channel === 'chat') {
      if (!data.data) {
        return
      }
      // console.log(data);
    }
    if (data.channel === 'BlueHome') {
      if (data.data) {
        dispatch(statePlanetAction(data.data))
        return
      }
      // console.log(data);
    }
    if (data.channel === 'YellowHome') {
      if (!data.data) {
        return
      }
      // console.log(data);
    }
    if (data.channel === 'LostWorld') {
      if (!data.data) {
        return
      }
      // console.log(data);
    }
    if (data.channel === 'missions') {
      if (!data.data) {
        return
      }
      // console.log(data);
    }
    if (data.channel === 'myLord') {
      if (!data.data) {
        return
      }
      dispatch(allLordInfoAction(data.data))
    }
    if (data.channel === 'errorServer') {
      if (!data.data) {
        return
      }
      console.log(data)
    }
    if (data.isErrorUser) {
      return dispatch(isErrorUser(data.isErrorUser))
    }
  }, [dataWS, dispatch, isLoading])

  useEffect(() => {
    if (!error) return
    return console.log('useTestWSconnecting error ws', error)
  }, [error])

  return { sendMessage }
}
// channel: 'errorServer';

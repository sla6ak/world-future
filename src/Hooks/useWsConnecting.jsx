import { useEffect } from 'react'
import {
  useGetMessagesQuery,
  useSendMessageMutation
} from 'Redux/WebSocketsAPI/WS_BASE_API'
import { isErrorUser } from 'Redux/Slises/errorUserSlise'
import { useDispatch } from 'react-redux'
import { statePlayersAction } from 'Redux/Slises/planetaBlueHomeInfoSlise'
import { allLordInfoAction } from 'Redux/Slises/lordInfoSlise'

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
    if (data.channel === 'planetaBlueHome') {
      if (data.data) {
        // console.log('+++', data.data);
        dispatch(statePlayersAction(data.data))
        return
      }
      // console.log(data);
    }
    if (data.channel === 'planetaYellowHome') {
      if (!data.data) {
        return
      }
      // console.log(data);
    }
    if (data.channel === 'planetaLostWorld') {
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

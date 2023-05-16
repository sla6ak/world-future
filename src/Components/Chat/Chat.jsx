import {
  LeftHelmet,
  FormSubmit,
  Title,
  FormTextField,
  ButtonLetter,
  BodyLetter,
  LetterBox
} from './Chat.styled'
import { toast } from 'react-toastify'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { validationLetterSchema } from 'Helpers/validationForms'
import { generalСhatAction } from 'Redux/Slices/chatGameSlice'

const Chat = ({ lordInfo }) => {
  const [buttonDis, setButtonDis] = useState(false)
  const [letter, setLetter] = useState('')

  const dispatch = useDispatch()
  const allChat = useSelector((store) => store.chatGame.generalСhat)

  const sendChatMessage = (mess) => {
    console.log('sending message', mess)
    // тут идёт отправка чата на сервер useWS..
  }

  const handleLetter = (event) => {
    setLetter(event.target.value)
  }

  const onSubmitLetter = async (event) => {
    event.preventDefault()
    console.log('submit chat message')
    try {
      const message = {
        author: lordInfo?.nikName,
        message: letter,
        race: lordInfo?.rassa,
        planet: lordInfo?.planet
      }

      await validationLetterSchema.validate(message)
      dispatch(generalСhatAction(message))

      setButtonDis(true)
      setTimeout(() => {
        setButtonDis(false)
      }, 30 * 1000)
      setLetter('')
      await sendChatMessage(message)
    } catch (error) {
      toast.warn(`${error}`)
    }
  }

  return (
    <LeftHelmet
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
      }}
    >
      <Title>Chat Game:</Title>
      <div>
        {allChat?.map((el, index, arr) => {
          if (index <= arr.length - 15) return null
          return (
            <LetterBox key={el.index}>
              <span
                style={{
                  color: el.race === 'Yellow' ? '#bfcf2e' : '#0b5dbb',
                  fontSize: '14px',
                  fontWeight: '800'
                }}
              >
                {el.author}:
              </span>
              <BodyLetter>{el.message}</BodyLetter>
              {/* <div>{el.date}</div> */}
            </LetterBox>
          )
        })}
      </div>
      <FormSubmit onSubmit={onSubmitLetter}>
        <FormTextField
          label="letter"
          required
          fullWidth
          type="text"
          name="letter"
          value={letter}
          onChange={handleLetter}
        />
        <div>You can send one letter in 30 sec</div>
        <ButtonLetter
          type="submit"
          onClick={onSubmitLetter}
          disabled={buttonDis}
        >
          Send
        </ButtonLetter>
      </FormSubmit>
    </LeftHelmet>
  )
}

export default Chat

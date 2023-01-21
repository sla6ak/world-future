import styled from '@emotion/styled'
import { Button } from '@mui/material'

export const RiteHelmet = styled.div`
  position: fixed;
  top: 7vh;
  right: 1vw;
  width: 20vw;
  min-height: 85vh;
  background-color: transparent;
  color: #118f00;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  z-index: 3;
`
export const FormSubmit = styled.form`
  margin-top: auto;
  margin-bottom: 5vh;
  width: 100%;
`
export const Title = styled.div`
  width: 100%;
  font-weight: bold;
  justify-content: end;
  display: flex;
`

export const ButtonLetter = styled(Button)({
  display: 'flex',
  marginRight: 'auto',
  width: '100%',
  marginLeft: 'auto',
  marginTop: '1rem',
  padding: '10px 25px',
  backgroundColor: 'rgba(0, 66, 9, 0.308)',
  color: '#0b3000',
  ':hover': {
    backgroundColor: '#06752796'
  }
})

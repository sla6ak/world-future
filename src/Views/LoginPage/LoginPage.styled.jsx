import styled from '@emotion/styled'
import { TextField } from '@mui/material'

export const LinkToRegister = styled.div`
  margin: auto 0px 30px 0px;
  display: flex;
  align-items: center;
`

export const AskToRegister = styled.span`
  margin: 0px 10px 0px 10px;
`

export const FormSubmit = styled.form`
  max-width: 500px;
  padding: 10px 30px 20px 20px;
`

export const ValidationTextField = styled(TextField)({
  margin: '0.5rem',
  '& input:valid + fieldset': {
    borderColor: '#4a9448',
    borderWidth: 2
  },
  '& label': {
    color: '#00000053'
  },
  '& input': {
    color: '#000000'
  },
  '&:hover fieldset': {
    borderColor: '#0020af'
  },

  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important' // override inline-style
  }
})

// export const ButtonSubmit = styled(Button)({
//   display: 'flex',
//   marginRight: 'auto',
//   marginLeft: 'auto',
//   marginTop: '1rem',
//   padding: '10px 25px',
// });
export const ButtonWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 'auto';
  height: 150px;
`
export const ButtonHome = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20px;
  right: 20px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  color: #c72950;
  border: solid;
  border-width: 2px;
  padding: 15px;
  border-color: '#c72950';
  cursor: pointer;
  /* @media (max-width: 767px) {
        display: none;
    } */
`

export const ButtonLicensia = styled.button`
  background-color: rgb(255, 255, 255);
  /* border-radius: 50%; */
  /* color: #fff; */
  cursor: pointer;
  border: solid;
  border-width: 3px;
  width: 20px;
  height: 20px;
  border-color: '#0020af';
`

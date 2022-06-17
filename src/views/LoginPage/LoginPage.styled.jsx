import styled from '@emotion/styled';
import { TextField, Button } from '@mui/material';

export const LinkToRegister = styled.p`
  margin: auto 0px 30px 0px;
`;

export const AskToRegister = styled.span`
  margin: 0px 10px 0px 10px;
`;

export const FormSubmit = styled.form`
  max-width: 500px;
  padding: 10px 30px 20px 20px;
`;

export const ValidationTextField = styled(TextField)({
  margin: '0.5rem',
  '& input:valid + fieldset': {
    borderColor: 'rgb(192, 29, 187)',
    borderWidth: 2,
  },
  '& label': {
    color: '#ffffff25',
  },
  '& input': {
    color: '#fff',
  },
  '& input:invalid + fieldset': {
    borderColor: '#fff',
    borderWidth: 2,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important', // override inline-style
  },
});

export const ButtonSubmit = styled(Button)({
  display: 'flex',
  marginRight: 'auto',
  marginLeft: 'auto',
  marginTop: '1rem',
  padding: '10px 25px',
  backgroundColor: 'rgb(192, 29, 187)',
  color: '#fff',
  ':hover': {
    backgroundColor: '#5a0e51',
  },
});
export const ButtonHome = styled.div`
  background-color: rgb(192, 29, 187);
  position: absolute;
  top: 20px;
  right: 20px;
  border-radius: 50%;
  padding: 5px;
`;
export const ButtonLicensia = styled.button`
  background-color: rgb(192, 29, 187);
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  border: 0px;
  padding: 3px;
`;

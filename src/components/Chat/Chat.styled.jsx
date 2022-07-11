import styled from '@emotion/styled';
import { TextField, Button } from '@mui/material';

export const LeftHelmet = styled.div`
  position: fixed;
  top: 7vh;
  left: 1vw;
  width: 20vw;
  min-height: 85vh;
  /* background-color: #1a1a1a11; */
  color: #14ac00;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  z-index: 3;
`;
export const FormSubmit = styled.form`
  margin-top: auto;
  margin-bottom: 5vh;
  width: 100%;
`;
export const Title = styled.form`
  width: 100%;
  font-weight: 800;
`;

export const FormTextField = styled(TextField)({
  marginBottom: '0.5rem',
  width: '100%',
  backgroundColor: '#36b0b928',
  borderRadius: '15px',
  '& input:valid + fieldset': {
    borderColor: 'rgba(19, 82, 0, 0.842)',
    borderWidth: 2,
  },
  '& label': {
    color: '#052b00b3',
  },
  '& input': {
    color: '#063300',
  },
  '& input:invalid + fieldset': {
    borderColor: '#0f810052',
    borderWidth: 2,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important', // override inline-style
  },
});

export const ButtonLetter = styled(Button)({
  display: 'flex',
  width: '100%',
  marginTop: '0.5rem',
  padding: '10px 25px',
  backgroundColor: 'rgba(0, 66, 9, 0.308)',
  color: '#0b3000',
  ':hover': {
    backgroundColor: '#06752796',
  },
});

export const BodyLetter = styled.div`
  max-width: 20vw;
  max-height: 70vh;
  font-weight: 600;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

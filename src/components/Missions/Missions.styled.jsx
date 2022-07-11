import styled from '@emotion/styled';
import { TextField, Button } from '@mui/material';

export const LeftHelmet = styled.div`
  position: fixed;
  top: 7vh;
  left: 1vw;
  width: 20vw;
  min-height: 90vh;
  background-color: #1a1a1a11;
  color: #119600;
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
  font-weight: bold;
`;

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
    backgroundColor: '#06752796',
  },
});

import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';

export const ButtonSelectLeft = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 60px;
  color: #ede735;
  background-color: #1e47fa;
  margin: 0px auto;
  font-weight: 800;
`;

export const ButtonSelectRight = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 60px;
  color: #1e47fa;
  background-color: #ede735;
  margin: 0px auto;
  font-weight: 800;
`;
export const NikName = styled(TextField)({
  display: 'flex',
  maxWidth: '300px',
  margin: '0.5rem',
  '& input:valid + fieldset': {
    borderColor: '#4a9448',
    borderWidth: 2,
  },
  '& label': {
    color: '#00000053',
  },
  '& input': {
    color: '#000000',
  },
  '&:hover fieldset': {
    borderColor: '#0020af',
  },

  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important', // override inline-style
  },
});

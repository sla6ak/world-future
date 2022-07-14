import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const RiteHelmet = styled.div`
  position: fixed;
  top: 7vh;
  right: 1vw;
  width: 20vw;
  max-height: 85vh;
  background-color: transparent;
  color: #118f00;
  display: flex;
  flex-direction: column;
  justify-content: end;
  z-index: 3;
  font-size: 0.9rem;
`;

export const Title = styled.div`
  width: 100%;
  font-weight: bold;
  justify-content: end;
  display: flex;
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

export const IconRobo = styled.img`
  background-color: transparent;
  max-height: 15vh;
`;

export const SumInfo = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
`;
export const SumNamber = styled.span`
  font-weight: 800;
  margin-left: 7px;
  margin-right: 7px;
`;
export const MainInfoBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MainInfo = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const HelpInfo = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Del = styled.div`
  height: 100%;
  margin-left: 3px;
  margin-right: 3px;
  width: 2px;
`;

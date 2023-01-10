import styled from '@emotion/styled';
import cosmo from '../Impegs/cosmo.jpg';

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const MainFone = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: rgb(17, 17, 17);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      rgba(6, 0, 83, 0.24),
      rgba(24, 0, 58, 0.274)
    ),
    url(${cosmo});
`;

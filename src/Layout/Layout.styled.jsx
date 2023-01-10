import styled from '@emotion/styled';
import cosmo from './cosmo.jpg';
// console.log(cosmo);

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Main = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: rgb(30, 30, 30);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
    url(${cosmo});
`;

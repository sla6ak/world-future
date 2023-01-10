import styled from '@emotion/styled';

export const ListAuth = styled.div`
  background-color: rgb(185, 185, 185);
  padding: 10px;
  min-width: 60vw;
  max-width: 90vw;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  position: relative;
  color: #181818;
  box-shadow: -5px -5px 15px rgba(192, 29, 187, 0.286);
  @media (min-width: 1000px) {
    width: 900px;
  }
  @media (max-width: 500px) {
    width: 350px;
  }
`;

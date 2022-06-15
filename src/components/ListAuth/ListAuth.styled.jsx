import styled from '@emotion/styled';

export const ListAuth = styled.div`
  background-color: rgb(30, 30, 30);
  padding: 10px;
  min-width: 60vw;
  max-width: 90vw;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  color: aliceblue;
  box-shadow: -5px -5px 15px rgba(192, 29, 187, 0.286);
  @media (min-width: 1000px) {
    width: 900px;
  }
  @media (max-width: 500px) {
    margin-right: 60px;
  }
`;

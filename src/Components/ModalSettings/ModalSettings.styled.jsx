import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100vw;
  z-index: 99;
  @media (min-width: 768px) {
    top: 0;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const ModalWindow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: '#4d4d4d';
  border-radius: 20px;
  padding: 20px;
  @media (min-width: 768px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 540 px;
    border-radius: 20px;
  }
`;
export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
  }
`;

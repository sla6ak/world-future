import styled from '@emotion/styled';

export const LogOutContainer = styled.div`
    width: 300px;
    padding: 20px;
    border-radius: 20px;
    background-color: #fff;
    @media (min-width: 768px) {
        width: 600px;
        height: 308px;
        padding: 40px;
        box-shadow: none;
    }
`;

export const ModalTitle = styled.h3`
    text-align: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.8;
    color: #000000;
    @media (min-width: 768px) {
        font-size: 20px;
        line-height: 2.25;
    }
`;

export const TitleAccent = styled.p`
    margin-top: 10px;
    font-weight: 700;
    font-size: 22px;
    line-height: 1.38;
    @media (min-width: 768px) {
        font-size: 26px;
        line-height: 1.38;
    }
`;

export const ButtonWrapper = styled.div`
    display: block;
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-evenly;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
    }
`;

export const ShowPasswordBtnStyles = {
    color: '#E0E0E0',
};

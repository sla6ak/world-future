import styled from '@emotion/styled'

export const Shell = styled.div`
    margin: 0 auto;
    z-index: 10;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        padding-left: 32px;
        padding-right: 32px;
    }
    @media (min-width: 1080px) {
        position: relative;
        max-width: 1280px;
        padding-left: 16px;
        padding-right: 16px;
    }
`

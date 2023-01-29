import styled from '@emotion/styled'
import cosmo from '../Impegs/cosmo.jpg'

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const MainFone = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: rgb(17, 17, 17);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: linear-gradient(
      rgba(0, 100, 117, 0.24),
      rgba(32, 12, 61, 0.274)
    ),
    url(${cosmo});
  backdrop-filter: blur(3px);
`
export const MainBlur = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-position: center;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(1px);
`

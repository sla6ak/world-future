import styled from '@emotion/styled'
import starGate from '../../Impegs/stargatecast.png'

export const GateFone = styled.div`
  width: 400px;
  height: 400px;
  background-color: transparent;
  z-index: 49;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      rgba(71, 67, 136, 0.041),
      rgba(92, 58, 139, 0.048)
    ),
    url(${starGate});
`

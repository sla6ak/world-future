import React from 'react'
import { Html, useProgress } from '@react-three/drei'
import { GateFone } from 'Components/LoaderCastomGate/LoaderCastomGate.styled'

const LoaderSuspense = () => {
  const { progress } = useProgress()
  return (
    <Html center>
      <GateFone>
        <h3 className="castom-spinner">{progress.toFixed(2)} % loaded</h3>
      </GateFone>
    </Html>
  )
}
export default LoaderSuspense

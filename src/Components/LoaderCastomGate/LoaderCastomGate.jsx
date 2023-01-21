import React from 'react'
import { GateFone } from './LoaderCastomGate.styled'

export const LoaderCastomGate = ({ children }) => {
  return (
    <GateFone>
      <h3 className="castom-spinner">{children}</h3>
    </GateFone>
  )
}

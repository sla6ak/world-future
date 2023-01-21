import React, { Suspense } from 'react'
import { MainFone } from './Layout.styled'
import { Outlet } from 'react-router-dom'
import { LoaderCastomGate } from 'Components/LoaderCastomGate/LoaderCastomGate'

export function Layout() {
  return (
    <MainFone>
      <Suspense fallback={<LoaderCastomGate>loading...</LoaderCastomGate>}>
        <Outlet />
      </Suspense>
    </MainFone>
  )
}

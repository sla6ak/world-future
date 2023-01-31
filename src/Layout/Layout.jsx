import React, { Suspense } from 'react'
import { MainFone, MainBlur } from './Layout.styled'
import { Outlet } from 'react-router-dom'
import { LoaderCastomGate } from 'Components/LoaderCastomGate/LoaderCastomGate'

export function Layout() {
  return (
    <MainFone>
      <MainBlur>
        <Suspense fallback={<LoaderCastomGate>loading...</LoaderCastomGate>}>
          <Outlet />
        </Suspense>
      </MainBlur>
    </MainFone>
  )
}

import { Routes, Route, Navigate } from 'react-router-dom' // работа с маршрутизацией
import React, { lazy } from 'react'
import { Layout } from 'Layout/Layout'
import PrivateRoute from 'Components/PrivateRoute/PrivateRoute'
import PublicRoute from 'Components/PublicRoute/PublicRoute'
import { useReroute } from './useReroute'

const SetLordPage = lazy(() => import('../Views/SetLordPage/SetLordPage'))
const StartPage = lazy(() => import('../Views/StartPage/StartPage'))
const LoginPage = lazy(() => import('../Views/LoginPage/LoginPage'))
const RegisterPage = lazy(() => import('../Views/RegisterPage/RegisterPage'))
const LayoutGame = lazy(() => import('../LayoutGame/LayoutGame'))
const GameBoard = lazy(() => import('../Views/GameBoard/GameBoard'))

export const Routers = () => {
  useReroute()
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<StartPage />} />
        <Route
          path="/auth/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/auth/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/setlord"
          element={
            <PrivateRoute>
              <SetLordPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/play"
          element={
            <PrivateRoute>
              <LayoutGame />
            </PrivateRoute>
          }
        >
          <Route
            path="/play/gameBoard"
            element={
              <PrivateRoute>
                <GameBoard />
              </PrivateRoute>
            }
          />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

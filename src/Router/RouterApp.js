import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../pages/Main/Main'
const RouterApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route
            path='/si'
            element={<Main />}
            />
        </Routes>
    </BrowserRouter>
  )
}

export default RouterApp
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const RouterApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route
            path='/si'
            element='' 
            />
        </Routes>
    </BrowserRouter>
  )
}

export default RouterApp
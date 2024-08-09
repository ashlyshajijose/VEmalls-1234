import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Details from './components/Details'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Details/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

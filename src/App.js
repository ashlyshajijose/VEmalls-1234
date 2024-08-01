import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shopy from './components/Shopy'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route path='shopy' element={<Shopy/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

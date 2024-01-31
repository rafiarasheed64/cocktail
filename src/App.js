import React from 'react'

import Cocktaill from './Cocktaill'
import Drink from './Drink'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Cocktaill/>}></Route>
      <Route path='/drink/:id' element={<Drink/>}></Route>

    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App

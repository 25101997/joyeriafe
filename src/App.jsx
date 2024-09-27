import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useState } from 'react'
import Header from './components/Header/Header'
import Product from './pages/Product/Product'
import Cart from './pages/Product/Cart/Cart'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' Component={Product}/>
          <Route path='/cart' Component={Cart}/>
          <Route path='*' Component={NotFound}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
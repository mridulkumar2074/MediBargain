import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Result from "./components/Result/Result"

const App = () => {
  return (
    <div>
      {/*  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results/:name" element={<Result />} />
        </Routes>
      </BrowserRouter >
    </div >
  )
}

export default App

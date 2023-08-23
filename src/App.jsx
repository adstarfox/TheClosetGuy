import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Aboutus from './components/Aboutus'
import Home from './components/Home'
import Contactus from './components/Contactus'
import AdminLogin from './components/AdminLogin'
import AdminPage from './components/AdminPage'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      
      <Routes>
        <Route index element={<div><Header /><Home /></div>} />
        <Route path='about-us' element={<div><Header /><Aboutus /></div>} />
        <Route path='contact-us' element={<div><Header /><Contactus /></div>} />
        <Route path='admin-login' element={<AdminLogin />} />
        <Route path='admin-page' element={<div><Header /><AdminPage /></div>} />
      </Routes>
    </>
  )
}

export default App

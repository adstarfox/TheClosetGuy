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
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about-us' element={<Aboutus />} />
        <Route path='contact-us' element={<Contactus />} />
        <Route path='admin-login' element={<AdminLogin />} />
        <Route path='admin-page' element={<AdminPage />} />
      </Routes>
    </>
  )
}

export default App

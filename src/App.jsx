import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Head from './components/Header'
import About from './components/About'
import Management from './components/Management'
import Services from './components/Services'
import Clients from './components/Clients'
import Specialization from './components/Specialization'
import Whyus from './components/Whyus'
import Home from './components/Home'
import Contact from './components/Contact'
import "./App.css"


function App() {
  return (
    <>
      <Head/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Contact' element={<Contact/>}/>
        
        <Route path="/about" element={<About />} />
        <Route path="/management" element={<Management />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/specialization" element={<Specialization />} />
        <Route path="/whyus" element={<Whyus />} />
        
      </Routes>
    </>
  )
}

export default App



import React from 'react'
import Navbar from './components/Navbar'
import Hero from  './components/Hero'
import About from './components/About'
import Servies from './components/Services'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About />
    <Servies />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App

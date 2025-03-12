import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Steps from './components/Steps'
import About from './components/About'
import Testimonial from './components/Testimonial'
import Brands from './components/Brands'
import Projects from './components/Projects'
import Stats from './components/Stats'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Pricelist from './components/Pricelist'

const App = () => {

  return (
    <main className="max-w-[1920px] mx-auto bg-white overflow-hidden">
      <Navbar />

      <Hero />

      <Steps />   

      <About />

      <Testimonial />

      <Brands />

      <Projects />

      <Stats />

      <Blog />

      <Contact />

      <Pricelist />

      <Footer />

    </main>
  )
}

export default App

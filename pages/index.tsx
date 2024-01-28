import AboutMe from '@/components/AboutMe';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import NavMobile from '@/components/NavMobile';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Project from '@/components/Project';
import React, { useState, useEffect } from 'react';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {

  const [showNav, setShowNav] = useState(false)
  const showNavHandler = () => {
    setShowNav(true)
  }
  const closeNavHandler = () => {
    setShowNav(false)
  }

  useEffect(() => {
    AOS.init({
      duration:1000,
      easing: 'ease',
      once: true,
      anchorPlacement: 'top-bottom'
    })
  },[])


  return (
    <div className='overflow-hidden'>
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Nav openNav={showNavHandler} />
      <Hero />
      <AboutMe />
      <Services />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage
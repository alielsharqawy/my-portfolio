import HeroSection from '@/components/HeroSection'
import React from 'react'
import Contact from './contact/page'
import Skills from './skills/page'
import AboutMe from './about/page'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Skills/>
      <Contact/>
    </div>
  )
}

export default HomePage
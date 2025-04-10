import HeroSection from '@/components/HeroSection'
import React from 'react'
import Contact from './contact/page'
import Skills from './skills/page'
import Services from './services/page'
import Projects from './projects/page'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <Skills />
      <Projects/>
      <Contact/>
    </div>
  )
}

export default HomePage
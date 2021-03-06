import React from 'react'
import AboutSection from '../AboutSection'

const Footer = () => {
  return (
    <footer className='footer' itemScope='itemScope' itemType='https://schema.org/WPFooter'>
      <div className='section container'>
        <AboutSection />
      </div>
    </footer>
  )
}

export default Footer

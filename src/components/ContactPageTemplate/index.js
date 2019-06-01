import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import ContactForm from './ContactForm'
import FeedbackWidget from '../feedback-widget/feedback-widget'
import logo from '../../img/logo.png'

const ContactPageTemplate = ({ title, subtitle, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  
  return (
    <div>
      <section className='hero is-primary is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title'>
                    {title}
                  </h1>
                  <h2 className='subtitle'>
                    {subtitle}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='columns is-10 is-offset-1'>
            <PageContent className='content' content={content} />
            <div className='column is-8'>
              <ContactForm />
            </div>
            <div className='column'>
              <h4>Realtime Contact Message</h4>
              <div>
                <a href='https://publiuslogic.com/privacy'>
                  <img
                    src={logo}
                    alt='PubliusLogic'
                    style={{ width: '330px', height: '330px' }}
                  />
                </a>
                <div>
                  <div>Contacts are governed by our!</div>
                  <div className='is-centered'><a href='/privacy#Comment Policy'>Submitting Policy</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeedbackWidget />
    </div>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default ContactPageTemplate

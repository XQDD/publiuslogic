import React from 'react'
import gatsbyastro from './gatsby-astronaut.png'
import Global from '../components/Global'

const NotFoundPage = () => (
  <Global>
    <section className='hero hero-blog-cover'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section is-centered'>
                <h1 className='title'>
                  404: NOT FOUND
                </h1>
                <div className='columns'>
                  <div className='column is-one-third'>
                    <img
                      src={gatsbyastro}
                      alt='GitHub'
                    />
                  </div>
                </div>
                <h2 className='subtitle'>
                  You just hit a route that doesn&#39;t exist... the
                  sadness.
                </h2>
                Click send the email icon below to send us a email about the error!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Global>
)

export default NotFoundPage

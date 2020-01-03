import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'

const SiteMapPageTemplate = ({ title, cover, path, meta_title, meta_description, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  return (
    <>
      <section className='section'>
        <div className='container content'>
          <div className='columns is-10 is-offset-1'>
            <div className='column'>
              <div>
                <PageContent className='content' content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

SiteMapPageTemplate.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.image,
  path: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default SiteMapPageTemplate

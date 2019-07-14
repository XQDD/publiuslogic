import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import PhotosPageTemplate from '../components/PhotosPageTemplate'
import Global from '../components/Global'

const PhotosPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Global pageTitle={frontmatter.title}>
      <Helmet>
        <title>{frontmatter.meta_title}</title>
        <meta name='description' content={frontmatter.meta_description} />
        <meta name='keywords' content={frontmatter.tags} />
        <meta name='image' content={frontmatter.cover} />
      </Helmet>
      <PhotosPageTemplate
        title={frontmatter.title}
        cover={frontmatter.cover}
        subtitle={frontmatter.subtitle}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
      />
    </Global>
  )
}

PhotosPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PhotosPage

export const photosPageQuery = graphql`
  query PhotosPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        cover
        meta_title
        meta_description
      }
    }    
  }
`

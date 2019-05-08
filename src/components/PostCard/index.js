import React from 'react'
import { Link } from 'gatsby'
import Next from '../img/icon-arrow-right.svg'

const PostCard = ({ posts }) => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='columns is-multiline is-10 is-offset-1'>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'article-page')
            .map(({ node: post }) => (
              <div
                className='is-parent column is-6'
                key={post.id}
              >
                <article className='is-child box'>
                  <Link to={post.fields.slug}>
                    <figure className='image is-2by1'>
                      <img src={post.frontmatter.cover} alt={post.frontmatter.title} />  
                    </figure>
                  </Link>
                  <p>
                    <Link className='title has-text-primary is-size-4' to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </p>
                  <p>
                    <span className='subtitle is-size-5'>
                      <small>{post.frontmatter.date}</small>
                    </span>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className='button is-small arrow-right' to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </article>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default PostCard

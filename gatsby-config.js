const proxy = require('http-proxy-middleware')
const config = require('./data/config')

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    rssMetadata: {
      site_url: config.siteUrl + pathPrefix,
      feed_url: config.siteUrl + pathPrefix + config.siteRss,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${config.siteUrl + pathPrefix}/icons/icon-512x512.png`,
      author: config.userName,
      copyright: config.copyright,
      twitterCreator: `@donboulton`,
      stripe_public_key_test: `pk_test_Bin5YLSAsXbOcn9hv3tqqqq8001xk1vJdU`,
      social: {
        twitter: `donboulton`,
      },

    },
  },
  developMiddleware: app => {
    app.use(
      '/api/',
      proxy({
        target: 'http://localhost:8000',
      })
    )
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-twitter`,
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stack`,
        path: `${__dirname}/src/assets/img/stack`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/authors`,
        name: 'authors',
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages/privacy`,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-24847941-1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    'gatsby-transformer-yaml',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: 'mansbooks',
        apiKey: '324844521422818',
        apiSecret: 'YV_QcgNBmqXayzvVN2vrRtMWDkA',
        resourceType: `image`,
        type: `type Value`,
        maxResults: `Max result`,
        tags: `fetch image tags?`,
        prefix: `abc-xyz/`,
        context: true,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-code-titles`,
          `gatsby-remark-component`,
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg aria-hidden='true' height='20' version='1.1' viewBox='0 0 16 16' width='20'><path fill-rule='evenodd' d='M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'></path></svg>`,
              className: `link-icon`,
              maintainCase: true,
              removeAccents: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: true,
              maxWidth: 2048,
              showCaptions: true,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-better-embed-video',
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77.
              height: 400, // Optional: Overrides optional.ratio.
              related: false, // Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, // Optional: Disable insertion of <style> border: 0.
              showInfo: false, // Optional: Hides video title and player actions.
            },
          },
          {
            resolve: `gatsby-remark-emojis`,
            options: {
              active: true,
              size: 24,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        enableIdentityWidget: true,
        htmlTitle: `PubliusLogic Content Manager`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        develop: true,
        purgeOnly: ['/sass/styles.sass'],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: config.themeColor,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-recaptcha',
      options: {
        async: true,
        defer: false,
        args: '?onload=onloadCallback&render=explicit',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleAlt,
        start_url: '/index.html',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icons: [
          {
            src: `/icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        setup (ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata
          ret.allMarkdownRemark = ref.query.allMarkdownRemark
          ret.generator = config.siteTitle
          return ret
        },
        query: `
                {
                  site {
                    siteMetadata {
                      rssMetadata {
                        site_url
                        feed_url
                        title
                        description
                        image_url
                        author
                        copyright
                      }
                    }
                  }
                }
              `,
        feeds: [
          {
            serialize (ctx) {
              const rssMetadata = ctx.query.site.siteMetadata.rssMetadata
              return ctx.query.allMarkdownRemark.edges
                .filter(
                  edge => edge.node.frontmatter.templateKey === 'article-page'
                )
                .map(edge => ({
                  tags: edge.node.frontmatter.tags,
                  date: edge.node.frontmatter.date,
                  title: edge.node.frontmatter.title,
                  categorys: edge.node.frontmatter.categorys,
                  description: edge.node.excerpt,
                  author: rssMetadata.author,
                  url: rssMetadata.site_url + edge.node.fields.slug,
                  guid: rssMetadata.site_url + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                }))
            },
            query: `
                    {
                      allMarkdownRemark(
                        limit: 1000,
                        sort: { order: DESC, fields: [frontmatter___date] },
                      ) {
                        edges {
                          node {
                            excerpt(pruneLength: 400)
                            html
                            id
                            fields { slug }
                            frontmatter {
                              title
                              templateKey
                              cover
                              date(formatString: "MMMM DD, YYYY")
                              categorys
                              tags
                              tweet_id
                            }
                          }
                        }
                      }
                    }
                  `,
            output: config.siteRss,
          },
        ],
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            tags: node => node.frontmatter.tags,
            slug: node => node.fields.slug,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: 'https://donboulton.us4.list-manage.com/subscribe/post?u=946962f91a21100144db815b9&amp;id=c2a27bdd5f', // see instructions at official plugin page
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*.js': [
            'cache-control: public, max-age=31536000, immutable',
          ],
          '/*.css': [
            'cache-control: public, max-age=31536000, immutable',
          ],
          '/sw.js': [
            'cache-control: public, max-age=0, must-revalidate',
          ],
        },
      },
    },
    'gatsby-plugin-netlify-cache',
  ],
}

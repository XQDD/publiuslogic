/* eslint-disable react/jsx-indent */
import React, { Component } from 'react'
import styled from 'styled-components'
import ReactStars from 'react-stars'
import config from '../../../_data/config'
/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
  Included in a XDR Post to StaticmanApp that you can set up at https://github.com/apps/staticman-net,
  which will send a json response object to your /_data/reviews folder triggering a new Netlify build
  To Include Recaptcha V3
  https://github.com/netlify/code-examples/blob/master/forms/html-invisible-recaptcha.html
*/

const Form = styled.form`

`

const Review = styled.div`
  top: 10px;
  left: 40px;
  right: 0;
  bottom: 10px;
`

const submitRating = (rating, slug) => {  
  const data = {
    'fields[rating]': rating,
    'fields[postPath]': slug,
    'options[reCaptcha][siteKey]': '6Lf0NasUAAAAAAY1WJlMelYekqb_cwziQ4LiNnuk'
  }

  const XHR = new XMLHttpRequest()
  let urlEncodedData = ''
  let urlEncodedDataPairs = []
  let name

  // Turn the data object into an array of URL-encoded key/value pairs.
  for (name in data) {
    urlEncodedDataPairs.push(
      encodeURIComponent(name) + '=' + encodeURIComponent(data[name])
    )
  }

  // Combine the pairs into a single string and replace all %-encoded spaces to
  // the '+' character; matches the behaviour of browser form submissions.
  urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+')

  // Define what happens on successful data submission
  XHR.addEventListener('load', function (event) {
    alert('Thanks for rating us! Your Review is to appear soon. Stay tuned..')
  })

  // Define what happens in case of error
  XHR.addEventListener('error', function (event) {
    alert('Sorry, something went wrong. Please file an issue in github!')
  })

  // Set up our request
  XHR.open(
    'POST',
    'https://api.staticman.net/v3/entry/github/donaldboulton/publiuslogic/master/ratings'
  )

  // Add the required HTTP header for form data POST requests
  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

  // Finally, send our data.
  XHR.send(urlEncodedData)
}

class ReviewForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rating: '',
    }
  }

  render () {
    const { title, slug } = this.props
    const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
    const url = config.siteUrl + realPrefix + slug
    return (
      <div className='column'>
        <Form
          name='reviews'
        >
          <input type='hidden' name='form-name' value='review' />
          <input name='fields[postPath]' type='hidden' value={url} />
          <input name='title' type='hidden' value={title} />
          <Review>
                    Is this a useful post? Please give us a rating!
            <ReactStars
              onChange={rating => {
                submitRating(rating, url)
              }}
              half={false}
              size={24}
              color2={'#d64000'}
            />
          </Review>
        </Form>
      </div>

    )
  }
}

export default ReviewForm
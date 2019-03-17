import React, {Component} from 'react'
import favicon from './assets/img/favicon.ico'
require('typeface-kaushan-script')

export default class HTML extends Component {
  render () {
    return (
      <html lang='en' className='has-navbar-fixed-top'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
          {this.props.headComponents}
          <link rel='shortcut icon' href={favicon} />
        </head>
        <body id='top'>
          <div
            id='___gatsby'
            dangerouslySetInnerHTML={{__html: this.props.body}}
            
          />
          {this.props.postBodyComponents}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                      var name = 'world';
                      console.log('Hello ' + name);
                    `
            }}
          />
        </body>
      </html>
    )
  }
}

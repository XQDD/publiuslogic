import React, { Component } from 'react'
import Helmet from 'react-helmet'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Hr from '../components/Hr'
import Slack from '../components/Slack'
import Subscriptions from '../components/Subscriptions'
import Scroll from '../components/Scroll'

import '../assets/sass/styles.sass'

import config from '../../data/config'

class TemplateWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {isActive: false}
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar () {
    this.setState({isActive: !this.state.isActive})
  }

  render () {
    return (
      <div>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name='description' content={config.siteDescription} />
        </Helmet>
        <NavBar isActive={this.state.isActive} toggleNavbar={() => this.toggleNavbar()} />
        <div>{this.props.children}</div>
        <Subscriptions />
        <Slack />
        <Hr />
        <Scroll />
        <Footer />
      </div>
    )
  }
}

export default TemplateWrapper

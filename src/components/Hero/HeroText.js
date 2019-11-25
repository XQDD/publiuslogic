import React from 'react'
import styled from 'styled-components'
import Typist from 'react-typist'

import { media } from './style'

const StyledTypist = styled(Typist)`
  color: #fff;
  letter-spacing: 14px;
  margin:0 auto;
  font-size: 52px;
  line-height: 60px;
  z-index: 22;
  font-weight: 100;
  text-transform: uppercase;
  font-family: 'Roboto';
  ${media.tablet`
    font-size:38px;
    line-height: 44px;
    letter-spacing: 8px;
  `}
`

class HeroText extends React.Component {
  render () {
    if (this.props.text) {
      return (
        <StyledTypist cursor={{ show: false }} {...this.props}>
          <strong>{this.props.text.split(' ').slice(0, 1)}</strong><br />{this.props.text.split(' ').slice(1).join(' ')}
        </StyledTypist>
      )
    } else {
      return (
        <StyledTypist cursor={{ show: false }} {...this.props}>
          <strong key={1}>I</strong> Make Fast Web Apps
          <Typist.Backspace count={19} delay={1000} />
          <span key={2}> Architect Complex IT Systems</span>
          <Typist.Backspace count={29} delay={1000} />
          <span key={3}> Am Microsoft Certified</span>
          <Typist.Backspace count={23} delay={1000} />
          <span key={4}> Live In OKC OK</span>
          <Typist.Delay ms={300} />
          <span key={5}>.</span>
          <Typist.Delay ms={600} />
          <span key={6}>.</span>
          <Typist.Delay ms={900} />
          <span key={7}>.</span>
          <Typist.Backspace count={20} delay={10} />
          <strong key={8}>But Mostly I Just</strong> Do Awesome Stuff With Web Tech
        </StyledTypist>
      )
    }
  }
}

export default HeroText

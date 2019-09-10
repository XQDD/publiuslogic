import React from 'react'
import RetroHitCounter from 'react-retro-hit-counter'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: right;
`

const HitCounter = () => (
  <Container>
    <RetroHitCounter
      hits={1337}
      // eslint-disable-next-line react/jsx-boolean-value
      withBorder={true}
      withGlow={false}
      minLength={4}
      size={40}
      padding={4}
      digitSpacing={3}
      segmentThickness={4}
      segmentSpacing={0.5}
      segmentActiveColor='#d64000'
      segmentInactiveColor='#315324'
      backgroundColor='#222222'
      borderThickness={7}
      glowStrength={0.5}
    />
  </Container>
)

export default HitCounter
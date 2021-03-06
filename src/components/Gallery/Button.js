import React from 'react'

const ButtonStyle = {
  background: 'transparent',
  border: 'transparent',
  color: '#cccccc',
  height: '170px',
  width: '250px',
}

const Button = ({ handleClick, children }) => (
  <button style={ButtonStyle} onClick={handleClick}>
    {children}
  </button>
)

export default Button


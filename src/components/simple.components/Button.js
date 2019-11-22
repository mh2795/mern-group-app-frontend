import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
  <button className="blue-button" type="submit">{props.label}</button>
  )
}

export default Button;
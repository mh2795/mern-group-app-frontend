import React from 'react';
import './TxtInput.css'

const TxtInput = (props) => {
  let classList = ''
  let sizes = ['default', 'ml', 'l']

  if (sizes.includes(props.size)) {
    console.log(props.size)
    classList += ` input-${props.size}`
  }
  console.log(classList)
  return (
    <input
      required
      className={classList}
      type="text"
      >
    </input>
  )
}

export default TxtInput;
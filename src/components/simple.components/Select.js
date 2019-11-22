import React from 'react'
import './Select.css'

const Select = (props) => {
  return (
      <select className="select-default" placeholder={props.value}>
        <option value="0">{props.value}</option>
        <option value="1">{"None"}</option>
        <option value="2">{"Working On It"}</option>
        <option value="3">{"Submitted"}</option>
        <option value="4">{"Followed Up"}</option>
        <option value="5">{"Waiting..."}</option>
        <option value="6">{"In Correspondence"}</option>
        <option value="7">{"Interview Upcoming"}</option>
        <option value="8">{"Offer"}</option>
        <option value="9">{"Complete"}</option>
      </select>
  )
}

export default Select;
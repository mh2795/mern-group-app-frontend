import React, { Component } from 'react'
import './Checkboxes.css'
import checked from '../icons/check.svg'
import unchecked from '../icons/checkbox.svg'

class Checkboxes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      onOrOff: checked,
      imgClassList: 'check'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(eo) {
    eo.preventDefault()
    if (this.state.onOrOff === checked) {
      this.setState({ onOrOff: unchecked })
      this.setState({ imgClassList: '' })

    }
    if (this.state.onOrOff === unchecked) {
      this.setState({ onOrOff: checked })
      this.setState({ imgClassList: 'check' })
    }
  }
  render() {
    if (this.props.text) {
      if (this.props.color === 'blue') {
        return (
          <div onClick={this.handleClick} className='checkbox-blue'>
            <img className={this.state.imgClassList} src={this.state.onOrOff} />
            <div className="text">{this.props.text}</div>
          </div>
        )
      }
      if (this.props.color === 'black') {
        return (
          <div onClick={this.handleClick} className='checkbox-black'>
            <img className={this.state.imgClassList} src={this.state.onOrOff} />
            <div className="text">{this.props.text}</div>
          </div>
        )
      }
    } else {
      if (this.props.color === 'blue') {
        return (
          <div onClick={this.handleClick} className='checkbox-blue'>
            <img className={this.state.imgClassList} src={this.state.onOrOff} />
          </div>
        )
      }
      if (this.props.color === 'black') {
        return (
          <div onClick={this.handleClick} className='checkbox-black'>
            <img className={this.state.imgClassList} src={this.state.onOrOff} />
          </div>
        )
      }
    }
  }
}

export default Checkboxes;
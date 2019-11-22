import React, { Component } from 'react';
import axios from 'axios';

import InputTypeSubmit from './simple.components/InputTypeSubmit'


export default class CreateSkill extends Component {
  constructor(props) {
    super(props);

    this.onChangeSkill = this.onChangeSkill.bind(this);
    this.onChangeProficiency = this.onChangeProficiency.bind(this);
    this.onChangeExample = this.onChangeExample.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      skill: '',
      proficiency: '',
      example: '',
    }
  }

  onChangeSkill(e) {
    this.setState({
      skill: e.target.value
    })
  }

  onChangeProficiency(e) {
    this.setState({
      proficiency: e.target.value
    })
  }

  onChangeExample(e) {
    this.setState({
      example: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const skill = {
      skill: this.state.skill,
      proficiency: this.state.proficiency,
      example: this.state.example,
    }

    console.log(skill);

    axios.post('https://personal-tracker-mrt.herokuapp.com/skill', skill)
      .then(res => console.log(res.data));

    setInterval(function(){ window.location = '/dashboard'}, 1000);
  }

  render() {
    return (
    <div>
      <h3>Add New Skill</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>Skill: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.skill}
              onChange={this.onChangeSkill}
              />
        </div>
        <div className="form-group"> 
          <label>Proficiency: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.proficiency}
              onChange={this.onChangeProficiency}
              />
        </div>
        <div className="form-group">
          <label>Example: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.example}
              onChange={this.onChangeExample}
              />
        </div>

        <div className="form-group">
          <InputTypeSubmit type="save" label="Save Skill"/>
        </div>
      </form>
    </div>
    )
  }
}
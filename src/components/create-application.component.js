import React, { Component } from 'react';
import axios from 'axios';

export default class CreateApplication extends Component {
  constructor(props) {
    super(props);

    this.onChangeCompany = this.onChangeCompany.bind(this);
    this.onChangePosition = this.onChangePosition.bind(this);
    this.onChangeLink = this.onChangeLink.bind(this);
    this.onChangeRate = this.onChangeRate.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      company: '',
      position: '',
      link: '',
      rate: '',
      status: '',
    }
  }

  onChangeCompany(e) {
    this.setState({
      company: e.target.value
    })
  }

  onChangePosition(e) {
    this.setState({
      position: e.target.value
    })
  }

  onChangeLink(e) {
    this.setState({
      link: e.target.value
    })
  }

  onChangeRate(e) {
    this.setState({
      rate: e.target.value
    })
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const application = {
      company: this.state.company,
      position: this.state.position,
      link: this.state.link,
      rate: this.state.rate,
      status: this.state.status,
    }

    console.log(application);

    axios.post('https://personal-tracker-mrt.herokuapp.com/application', application)
      .then(res => console.log(res.data));

    setInterval(function(){ window.location = '/'}, 1000);
  }

  render() {
    return (
    <div>
      <h3>Add New Application</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>Company: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.company}
              onChange={this.onChangeCompany}
              />
        </div>
        <div className="form-group"> 
          <label>Position: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.position}
              onChange={this.onChangePosition}
              />
        </div>
        <div className="form-group">
          <label>Link: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.link}
              onChange={this.onChangeLink}
              />
        </div>
        <div className="form-group">
          <label>Rate: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.rate}
              onChange={this.onChangeRate}
              />
        </div>
        <div className="form-group">
          <label>Status: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.status}
              onChange={this.onChangeStatus}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Save Application" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
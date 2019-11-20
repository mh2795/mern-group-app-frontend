import React, { Component } from 'react';
import axios from 'axios';

export default class CreateAgenda extends Component {
  constructor(props) {
    super(props);

    this.onChangeEventType = this.onChangeEventType.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      eventType: '',
      description: '',
    }
  }

  onChangeEventType(e) {
    this.setState({
      eventType: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const agenda = {
      eventType: this.state.eventType,
      description: this.state.description,
    }

    console.log(agenda);

    axios.post('https://personal-tracker-mrt.herokuapp.com/agenda', agenda)
      .then(res => console.log(res.data));

    setInterval(function(){ window.location = '/'}, 1000);
  }

  render() {
    return (
    <div>
      <h3>Add New Entry</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>Upcoming Event: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.eventType}
              onChange={this.onChangeEventType}
              />
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Save Entry" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
import React, { Component } from 'react';
import axios from 'axios';

export default class EditAgenda extends Component {
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

  componentDidMount() {
    axios.get('https://personal-tracker-mrt.herokuapp.com/agenda/id/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          eventType: response.data.eventType,
          description: response.data.description,
        })
      })
      .catch(function (error) {
        console.log(error);
      })
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

    axios.put('https://personal-tracker-mrt.herokuapp.com/agenda/id/' + this.props.match.params.id, agenda)
      .then(res => console.log(res.data));

    setInterval(function(){ window.location = '/'}, 1000);
  }

  render() {
    return (
    <div>
      <h3>Edit Entry</h3>
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
          <input type="submit" value="Update Entry" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
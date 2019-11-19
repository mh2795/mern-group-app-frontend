  
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Application = props => (
  <tr>
    <td>{props.application.company}</td>
    <td>{props.application.position}</td>
    <td>{props.application.link}</td>
    <td>{props.application.rate}</td>
    <td>{props.application.status}</td>
    <td>
      <Link to={"/edit/"+props.application._id}>edit</Link> | <a href="#" onClick={() => { props.deleteApplication(props.application._id) }}>delete</a>
    </td>
  </tr>
)


export default class ApplicationsList extends Component {
  constructor(props) {
    super(props);

    this.deleteApplication = this.deleteApplication.bind(this)

    this.state = {applications: []};
  }

  componentDidMount() {
    axios.get('http://personal-tracker-mrt.herokuapp.com/application')
      .then(response => {
        this.setState({ applications: response.data })
      },
      console.log(this.state.applications))
      .catch((error) => {
        console.log(error);
      })
  }

  deleteApplication(id) {
    axios.delete('http://personal-tracker-mrt.herokuapp.com/application/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      applications: this.state.applications.filter(el => el._id !== id)
    })
  }

  applicationList() {
    return this.state.applications.map(currentapplication => {
      return <Application application={currentapplication} deleteSkill={this.deleteApplication} key={currentapplication._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Applications</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Company</th>
              <th>Position</th>
              <th>Link</th>
              <th>Rate</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.applicationList()}
          </tbody>
        </table>
      </div>
    )
  }
}
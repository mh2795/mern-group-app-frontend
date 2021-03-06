
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import InputTypeSubmit from './simple.components/InputTypeSubmit'
import Button from './simple.components/Button'

const Application = props => (
  <tr>
    <td className="align-middle">{props.application.company}</td>
    <td className="align-middle">{props.application.position}</td>
    <td className="align-middle">{props.application.link}</td>
    <td className="align-middle">{props.application.rate}</td>
    <td className="align-middle">{props.application.status}</td>
    <td className="text-right">
      <Link to={"application/edit/" + props.application._id}>
        <InputTypeSubmit label="✏️" type="edit" />
      </Link>
      <a href="#" onClick={() => { props.deleteApplication(props.application._id) }}>
        <InputTypeSubmit label="🗑" type="delete" />
      </a>
    </td>
  </tr>
)


export default class ApplicationsList extends Component {
  constructor(props) {
    super(props);

    this.deleteApplication = this.deleteApplication.bind(this)

    this.state = { applications: [] };
  }

  componentDidMount() {
    axios.get('https://personal-tracker-mrt.herokuapp.com/application')
      .then(response => {
        this.setState({ applications: response.data })
      },
        console.log(this.state.applications))
      .catch((error) => {
        console.log(error);
      })
  }

  deleteApplication(id) {
    axios.delete('https://personal-tracker-mrt.herokuapp.com/application/id/' + id)
      .then(response => { console.log(response.data) });

    this.setState({
      applications: this.state.applications.filter(el => el._id !== id)
    })
  }

  applicationList() {
    return this.state.applications.map(currentapplication => {
      return <Application application={currentapplication} deleteApplication={this.deleteApplication} key={currentapplication._id} />;
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
              <th className="text-right pr-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.applicationList()}
          </tbody>
        </table>
        <Link to={"/application/create"}>
          <Button label="New Application"></Button>
        </Link>
      </div>
    )
  }
}
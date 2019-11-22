
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import InputTypeSubmit from './simple.components/InputTypeSubmit'
import Button from './simple.components/Button'

const Agenda = props => (
  <tr>
    <td className="align-middle">{props.agenda.eventType}</td>
    <td className="align-middle">{props.agenda.description}</td>
    <td className="text-right">
      <Link to={"agenda/edit/" + props.agenda._id}>
        <InputTypeSubmit label="✏️" type="edit" />
      </Link>
      <a href="#" onClick={() => { props.deleteAgenda(props.agenda._id) }}>
        <InputTypeSubmit label="🗑" type="delete" />
      </a>
    </td>
  </tr>
)


export default class AgendasList extends Component {
  constructor(props) {
    super(props);

    this.deleteAgenda = this.deleteAgenda.bind(this)

    this.state = { agendas: [] };
  }

  componentDidMount() {
    axios.get('https://personal-tracker-mrt.herokuapp.com/agenda')
      .then(response => {
        this.setState({ agendas: response.data })
      },
        console.log(this.state.agendas))
      .catch((error) => {
        console.log(error);
      })
  }

  deleteAgenda(id) {
    axios.delete('https://personal-tracker-mrt.herokuapp.com/agenda/id/' + id)
      .then(response => { console.log(response.data) });

    this.setState({
      agendas: this.state.agendas.filter(el => el._id !== id)
    })
  }

  agendaList() {
    return this.state.agendas.map(currentagenda => {
      return <Agenda agenda={currentagenda} deleteAgenda={this.deleteAgenda} key={currentagenda._id} />;
    })
  }

  render() {
    return (
      <div>
        <h3>Agenda</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Upcoming Event</th>
              <th className="text-center">Description</th>
              <th className="text-right pr-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.agendaList()}
          </tbody>
        </table>
        <Link to={"/agenda/create"}>
          <Button label="New Entry"></Button>
        </Link>
      </div>
    )
  }
}
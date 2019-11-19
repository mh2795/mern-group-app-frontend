  
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Agenda = props => (
  <tr>
    <td>{props.agenda.eventType}</td>
    <td>{props.agenda.description}</td>
    <td>
      <Link to={"agenda/edit/"+props.agenda._id}>edit</Link> | <a href="#" onClick={() => { props.deleteAgenda(props.agenda._id) }}>delete</a>
    </td>
  </tr>
)


export default class AgendasList extends Component {
  constructor(props) {
    super(props);

    this.deleteAgenda = this.deleteAgenda.bind(this)

    this.state = {agendas: []};
  }

  componentDidMount() {
    axios.get('http://personal-tracker-mrt.herokuapp.com/agenda')
      .then(response => {
        this.setState({ agendas: response.data })
      },
      console.log(this.state.agendas))
      .catch((error) => {
        console.log(error);
      })
  }

  deleteAgenda(id) {
    axios.delete('http://personal-tracker-mrt.herokuapp.com/agenda/id/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      agendas: this.state.agendas.filter(el => el._id !== id)
    })
  }

  agendaList() {
    return this.state.agendas.map(currentagenda => {
      return <Agenda agenda={currentagenda} deleteAgenda={this.deleteAgenda} key={currentagenda._id}/>;
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
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.agendaList()}
          </tbody>
        </table>
        <Link to={"/agenda/create"}>
            <button type="submit" class="btn btn-primary">Add Entry</button>
        </Link>
      </div>
    )
  }
}
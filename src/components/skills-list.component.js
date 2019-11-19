  
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Skill = props => (
  <tr>
    <td>{props.skill.skill}</td>
    <td>{props.skill.proficiency}</td>
    <td>{props.skill.example}</td>
    <td>
      <Link to={"/edit/"+props.skill._id}>edit</Link> | <a href="#" onClick={() => { props.deleteSkill(props.skill._id) }}>delete</a>
    </td>
  </tr>
)


export default class SkillsList extends Component {
  constructor(props) {
    super(props);

    this.deleteSkill = this.deleteSkill.bind(this)

    this.state = {skills: []};
  }

  componentDidMount() {
    axios.get('http://personal-tracker-mrt.herokuapp.com/skill')
      .then(response => {
        this.setState({ skills: response.data })
      },
      console.log(this.state.skills))
      .catch((error) => {
        console.log(error);
      })
  }

  deleteSkill(id) {
    axios.delete('http://personal-tracker-mrt.herokuapp.com/skill/id/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      skills: this.state.skills.filter(el => el._id !== id)
    })
  }

  skillList() {
    return this.state.skills.map(currentskill => {
      return <Skill skill={currentskill} deleteSkill={this.deleteSkill} key={currentskill._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Skills</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Skill</th>
              <th>Proficiency</th>
              <th>Example</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.skillList()}
          </tbody>
        </table>
        <button >      
            <Link to={"/agenda/"}>New Skill</Link>
        </button>

      </div>
    )
  }
}
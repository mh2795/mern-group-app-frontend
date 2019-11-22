import SkillsList from "./skills-list.component";
import AgendasList from "./agendas-list.component";
import ApplicationsList from "./applications-list.component";


import React, { Component } from 'react';

export default class Dashboard extends Component {
  
  render() {
    return (
        <div>
            <SkillsList />
            <br></br>
            <hr></hr>
            <AgendasList />
            <br></br>
            <hr></hr>
            <ApplicationsList />
            <br></br>
        </div>
    )
  }
}
import SkillsList from "./skills-list.component";
import AgendasList from "./agendas-list.component";
import ApplicationsList from "./applications-list.component";

  
import React, { Component } from 'react';

export default class Dashboard extends Component {
  
  render() {
    return (
        <div>
            <SkillsList />
            <AgendasList />
            <ApplicationsList />
        </div>
    )
  }
}
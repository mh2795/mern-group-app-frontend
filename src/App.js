import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component";
import Dashboard from "./components/dashboard.component";
import SkillsList from "./components/skills-list.component";
import EditSkill from "./components/edit-skill.component";
import CreateSkill from "./components/create-skill.component";
import AgendasList from "./components/agendas-list.component";
import EditAgenda from "./components/edit-agenda.component";
import CreateAgenda from "./components/create-agenda.component";
import ApplicationsList from "./components/applications-list.component";
import EditApplication from "./components/edit-application.component";
import CreateApplication from "./components/create-application.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={Dashboard} />
      <Route path="/skill" exact component={SkillsList} />
      <Route path="/skill/edit/:id" component={EditSkill} />
      <Route path="/skill/create" component={CreateSkill} />
      <Route path="/agenda" exact component={AgendasList} />
      <Route path="/agenda/edit/:id" component={EditAgenda} />
      <Route path="/agenda/create" component={CreateAgenda} />
      <Route path="/application" exact component={ApplicationsList} />
      <Route path="/application/edit/:id" component={EditApplication} />
      <Route path="/application/create" component={CreateApplication} />

      </div>
    </Router>
  );
}

export default App;
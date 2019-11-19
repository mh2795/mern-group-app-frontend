import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Personal Tracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Dashboard</Link>
          </li>
          <li className="navbar-item">
          <Link to="/application" className="nav-link">Applications</Link>
          </li>
          <li className="navbar-item">
          <Link to="/agenda" className="nav-link">Agenda</Link>
          </li>
          <li className="navbar-item">
          <Link to="/skill" className="nav-link">Skills</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
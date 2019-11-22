import React, { Component } from 'react';
import "./landing-page.css"
const image = require('../images/job-search.jpg')

export default class LandingPage extends Component {
  
  render() {
    return (
        <div className="landing d-flex pt-5">
            <div>
                <h1 className="text-center py-5">OTOI</h1>
                <br></br>
                <p className="px-5 text-center" style={{padding:'0 25%', margin:'10%'}}>We know landing that perfect job can be a daunting experience. That's why we provide you with a simple-to-use personal tracking solution for navigating the modern job market.</p>
            </div>
            <div>
                <img src={image} className="rounded-pill"></img>
            </div>
        </div>
    )
  }
}
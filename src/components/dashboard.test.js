import React from 'react'
import { render } from 'enzyme'

import Router from 'react-router-dom'  

import Dashboard from './dashboard.component'

describe('Dashboard component', () => {
  it('should render a div with 6 children', () => {
    const wrapper = render(<Router><Dashboard/></Router>)
    expect(wrapper.find(<div />)).toHaveLength(6)
  })
})

// we shouldn't have links outside of routers

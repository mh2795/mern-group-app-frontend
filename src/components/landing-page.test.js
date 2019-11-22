import React from 'react'
import { shallow } from 'enzyme'

import LandingPage from './landing-page.component.js'

describe('LandingPage component', () => {
  it('should render a header with the h1 element', () => {
    const component = shallow(<LandingPage/>)
    expect(component.contains(<h3>Personal Tracker</h3>).toBe(true))
  })
})

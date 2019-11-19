import React from 'react'
import { shallow } from 'enzyme'

import Agenda from './agendas-list.component'

// We will describe a block of tests
describe('Agenda list component', () => {
	// we will write one individual test
  it('should render as expected', () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<Agenda/>)
    // We create an assertion within the test that checks if our component renders our name prop
    expect(component.contains(<h3>Agenda</h3>)).toBe(true)
  })
})
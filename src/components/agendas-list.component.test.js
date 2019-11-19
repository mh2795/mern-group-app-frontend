import React from 'react'
import { shallow } from 'enzyme'

import Agenda from './agendas-list.component'

describe('Agenda list component', () => {

  it('should render as expected', () => {

    const component = shallow(<Agenda/>)

    expect(component.contains(<h3>Agenda</h3>)).toBe(true)
  })
})

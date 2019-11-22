import React from 'react'
import { shallow } from 'enzyme'

import EditAgenda from './edit-agenda.component'

describe('Edit agenda component', () => {
  it('should have a Edit Entry header', () => {
    const component = shallow(<EditAgenda/>)
    expect(component.contains(<h3>Edit Entry</h3>)).toBe(true)
  })
})

//cannot read params of undefined. 
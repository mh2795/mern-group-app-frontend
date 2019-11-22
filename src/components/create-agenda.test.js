import React from 'react'
import { shallow } from 'enzyme'

import CreateAgenda from './create-agenda.component'

describe('CreateAgenda component', () => {
  it('should have a state attribute eventType initialized to an empty string as expected', () => {
    const component = shallow(<CreateAgenda/>)
    expect(component.state.contains("eventType").toBe(true))
  })
})

//fails
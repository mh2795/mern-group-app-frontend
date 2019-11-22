import React from 'react'
import { shallow } from 'enzyme'

import CreateApplication from './create-application.component'

describe('CreateApplication component', () => {
  it('should render a header with some text in it', () => {
    const component = shallow(<CreateApplication/>)
    expect(component.contains(<h3>Add New Application</h3>).toBe(true))
  })
})
//fails
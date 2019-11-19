import React from 'react'
import { shallow } from 'enzyme'

import Application from './applications-list.component'

describe('Application list component', () => {

  it('should render as expected', () => {

    const component = shallow(<Application/>)
    
    expect(component.contains(<h3>Applications</h3>)).toBe(true)
  })
})

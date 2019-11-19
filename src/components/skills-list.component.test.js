import React from 'react'
import { shallow } from 'enzyme'

import Skills from './skills-list.component'

describe('Application list component', () => {
  
  it('should render as expected', () => {

    const component = shallow(<Skills/>)

    expect(component.contains(<h3>Skills</h3>)).toBe(true)
  })
})

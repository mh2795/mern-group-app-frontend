import React from 'react'
import { shallow } from 'enzyme'

import CreateSkill from './create-skill.component'

describe('Application list component', () => {
  it('should render as expected', () => {
    const component = shallow(<CreateSkill/>)
    expect(component.contains(<h3>Add New Skill</h3>)).toBe(true)
  })
})

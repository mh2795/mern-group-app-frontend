import React from 'react'
import { shallow } from 'enzyme'

import CreateSkill from './create-skill.component'

describe('Create Skil list component', () => {
  it('should render as expected', () => {
    const component = shallow(<CreateSkill/>)
    expect(component.contains(<h3>Add New Skill</h3>)).toBe(true)
  })
})

//why does this pass but Create Application failS?
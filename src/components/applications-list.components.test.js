import React from 'react'
import { shallow } from 'enzyme'

import Applications from './applications-list.component'

describe('Application list component', () => {
  it('should render as expected', () => {
    const component = shallow(<Applications/>)
    expect(component.contains(<h3>Applications</h3>)).toBe(true)
  })
})

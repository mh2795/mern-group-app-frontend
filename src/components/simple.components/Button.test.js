import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

describe('Button component', () => {
  it('should render as expected', () => {
    const component = shallow(<Button label="Some Label" />)
    expect(component.contains(<button className="blue-button" type="submit">Some Label</button>)).toBe(true)
  })
})

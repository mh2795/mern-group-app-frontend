import React from 'react'
import { shallow } from 'enzyme'

import InputTypeSubmit from './InputTypeSubmit'

describe('InputTypeSubmit component', () => {
  it('should render as expected', () => {
    const component = shallow(<InputTypeSubmit label="Test" type="edit" />)
    expect(component.contains(<input value="Test" type="submit" className=" input_butt-edit"></input>)).toBe(true)
  })
})

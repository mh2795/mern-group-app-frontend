import React from 'react'
import { render } from 'enzyme'

import Dashboard from './dashboard.component'

describe('Dashboard component', () => {
  it('should render a div with 6 children', () => {
    const wrapper = render(<Dashboard/>)
    expect(wrapper.find(<div />)).toHaveLength(6)
  })
})

// we shouldn't have links outside of routers

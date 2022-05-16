import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

describe('<App />', () => {
    it('renders without crashing', () => {
        shallow(<App />)
    })

    it('has 26 letter', () => {
        const wrapper = shallow(<App />)
        wrapper.setState({gameState: "play"})
        expect(wrapper.find('Letter')).to.have.length(26)
        expect(wrapper).to.matchSnapshot()
    })

    it('should match its reference snapshot', () => {
        const wrapper = shallow(<App />)

        expect(wrapper).to.matchSnapshot()
    })

})
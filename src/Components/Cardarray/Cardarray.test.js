import React from 'react';
import Cardarray from './Cardarray';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';

it('is Testing Card component', () => {
    //mocking robots props
    const mockRobots = [
        {
            id:"1",
            name:"trish",
            username:"trish12345",
            email:"trish@gmail.com"
        }
    ]
    const wrapper = shallow(<Cardarray robots={mockRobots} />);
    expect(toJson(wrapper)).toMatchSnapshot();
})
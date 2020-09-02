import React from 'react';
import Card from './Card';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';

it('is Testing Card component', () => {
    //shallowly renders single component
    //snapshot testing to check if component actually renders as expected
    const wrapper = shallow(<Card/>);
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
})
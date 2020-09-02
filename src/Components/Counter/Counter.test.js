import React from 'react';
import Counter from './Counter';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';

it('is Counter component correctly rendered', () => {
    const wrapper = shallow(<Counter />);
    expect(toJson(wrapper)).toMatchSnapshot();
})

it('Count state working correctly',() => {
    const wrapper = shallow(<Counter />);
    const button = wrapper.find("[id='counter']");
    button.simulate('click');
    expect(wrapper.find("[id='counter']").props()['data-count']).toEqual(1);
})
import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

it('is Header component correctly rendered', () => {
    const wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot();
})
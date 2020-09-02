import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Searchbox from './Searchbox';

let wrapper,inputValueWrapper;

beforeEach(() => {
    wrapper = shallow(<Searchbox />);
})

describe('testing search bar', () => {
    it('search bar renders correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    const event = {
        target:{
            value:'anto'
        }
    }
    const mockSearch = jest.fn();
    inputValueWrapper = shallow(<Searchbox onsearch={mockSearch} />);
    it('changes input value as expected', () => {
        inputValueWrapper.find('input').simulate('change', event);
        expect(mockSearch).toBeCalledWith(event);
    })
})
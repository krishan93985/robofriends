import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Scroll from './Scroll';

let wrapper;

beforeEach(() => {
    const mockChildrenComponent = () => <div>This is mock CardArray</div> ; 
    const mockProps = {
        children:mockChildrenComponent
    }
    wrapper = shallow(<Scroll {...mockProps} />);
})

describe('testing scroll component', () => {
    it('renders correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})
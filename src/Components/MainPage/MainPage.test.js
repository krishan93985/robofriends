import React from 'react';
import MainPage from './MainPage';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';

let renderWrapper,filterWrapper,pendingWrapper;

beforeEach(() => {
    const mockRenderProps = {
        onSearchChange:jest.fn(),
        fetchRobots:jest.fn(),
        searchField:'',
        robots:[],
        isPending:false,
        error:''
    }
    const mockFilterProps = {
        fetchRobots:jest.fn(),
        searchField:'jo',
        robots:[{
            id:2,
            name:'John',
            username:'John123',
            email:'John123@gmail.com'
        }],
        isPending:false,
    }
    const mockPendingProps = {
        fetchRobots:jest.fn(),
        searchField:'',
        robots:[],
        isPending:true,
    }
    renderWrapper = shallow(<MainPage {...mockRenderProps}/>)
    filterWrapper = shallow(<MainPage {...mockFilterProps}/>)
    pendingWrapper = shallow(<MainPage {...mockPendingProps}/>)
})

it('MainPage component renders correctly', () => {
    expect(toJson(renderWrapper)).toMatchSnapshot();
})

it('filters robots correctly', () => {
    expect(filterWrapper.instance().filterRobots()).toEqual([{
        id:2,
        name:'John',
        username:'John123',
        email:'John123@gmail.com'
    }]);
})

it('renders pending state correctly', () => {
    expect(pendingWrapper.find("[id='loader']").length).toEqual(1);
})
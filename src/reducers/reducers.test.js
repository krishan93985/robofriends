import { CHANGE_INPUT_FIELD, SEARCH_ROBOTS_PENDING, SEARCH_ROBOTS_SUCCESS, SEARCH_ROBOTS_FAILED } from '../constants';
import * as reducers from './reducers';

describe('Testing reducers',() => {
    const initialStateSearch = {
        searchField:''
    }
    it('handles default input action', () => {
        expect(reducers.searchRobots(undefined,{}))
                    .toEqual(initialStateSearch)
    })

    it('handles CHANGE_INPUT_FIELD action', () => {
        expect(reducers.searchRobots(initialStateSearch,{
            type:CHANGE_INPUT_FIELD,
            payload:'abc'
        })).toEqual({ searchField:'abc' })
    })

    const initialStateRobots = {
        isPending:false,
        robots:[],
        error:''
    } 

    it('handles no request action', () => {
        expect(reducers.requestRobots(undefined,{}))
                    .toEqual(initialStateRobots)
    })

    it('handles SEARCH_ROBOTS_PENDING action', () => {
        expect(reducers.requestRobots(initialStateRobots,{
            type:SEARCH_ROBOTS_PENDING
        })).toEqual({
            isPending:true,
            robots:[],
            error:''
        })
    })

    const fakeRobots = {
        id:6,
        name:'riya',
        username:'riya123',
        email:'riya123@gmail.com'
    }
    const error = new Error();

    it('handles SEARCH_ROBOTS_SUCCESS action', () => {
        expect(reducers.requestRobots(initialStateRobots,{
            type:SEARCH_ROBOTS_SUCCESS,
            payload:fakeRobots
        })).toEqual({
            isPending:false,
            robots:fakeRobots,
            error:''
        })
    })

    it('handles SEARCH_ROBOTS_FAILED action', () => {
        expect(reducers.requestRobots(initialStateRobots,{
            type:SEARCH_ROBOTS_FAILED,
            payload:error
        })).toEqual({
            isPending:false,
            robots:[],
            error:error
        })
    })
})
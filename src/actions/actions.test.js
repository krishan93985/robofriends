import { CHANGE_INPUT_FIELD, SEARCH_ROBOTS_PENDING, SEARCH_ROBOTS_SUCCESS, SEARCH_ROBOTS_FAILED } from '../constants';
import * as actions from './actions';

import configureMockStore from 'redux-mock-store';
import thunkMiddleWare from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleWare]);

describe('Testing actions',() => {
    const input = 'abc';
    it('handles set search field action', () => {
        expect(actions.setSearchField(input)).toEqual({
            type: CHANGE_INPUT_FIELD,
            payload:input
        })
    })

    it('handles robots request API PENDING/SUCCESS', (done) => {
     expect.assertions(2);   

    const store = mockStore({});
    store.dispatch(actions.requestRobots()).then(() => {
        const action = store.getActions();
        const expectedAction = { type:SEARCH_ROBOTS_PENDING }

        expect(action[0]).toEqual(expectedAction);
        expect(action[1].type).toEqual(SEARCH_ROBOTS_SUCCESS);
        
        done();
    })
    })

    it('handles robots API FAILED', (done) => {
        expect.assertions(1);
        const store = mockStore({});
        const wrongApiUrl = 'https://wrongUrl';
        store.dispatch(actions.requestRobots(wrongApiUrl)).then(() => {
            const action = store.getActions();
            console.warn('THIS ERROR MESSAGE IS COMPLEMENT FOR PASSING "API FAILED" test case')
            expect(action[1].type).toEqual(SEARCH_ROBOTS_FAILED);
            done();
        })
    })
})
import { CHANGE_INPUT_FIELD,
    SEARCH_ROBOTS_PENDING,
    SEARCH_ROBOTS_SUCCESS,
    SEARCH_ROBOTS_FAILED } from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_INPUT_FIELD,
    payload:text
})

export const requestRobots = () => (dispatch) => {
dispatch({type:SEARCH_ROBOTS_PENDING});
fetch('https://jsonplaceholder.typicode.com/users',{
    mode:'cors',
    headers:{
        'Access-Control-Allow-Origin':'https://krishan93985.github.io/robofriends/'
    }
})
.then(response => response.json())
.then(robots => dispatch({type:SEARCH_ROBOTS_SUCCESS,payload:robots}))
.catch(error => dispatch({type:SEARCH_ROBOTS_FAILED,payload:[]}))
}

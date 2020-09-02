import { CHANGE_INPUT_FIELD,
    SEARCH_ROBOTS_PENDING,
    SEARCH_ROBOTS_SUCCESS,
    SEARCH_ROBOTS_FAILED } from '../constants';

export const setSearchField = (text) => ({
    type: CHANGE_INPUT_FIELD,
    payload:text
})

export const requestRobots = (apiUrl='https://jsonplaceholder.typicode.com/users') => async (dispatch) => {
  try{
    dispatch({type:SEARCH_ROBOTS_PENDING});
    const response = await fetch(apiUrl,{
        mode:'cors',
        headers:{
            'Access-Control-Allow-Origin':'https://krishan93985.github.io/robofriends/'
    }
    })
    const robots = await response.json();
    dispatch({type:SEARCH_ROBOTS_SUCCESS,payload:robots})
  }catch(error){
      dispatch({type:SEARCH_ROBOTS_FAILED,payload:error})
  }
}

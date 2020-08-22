import { CHANGE_INPUT_FIELD, SEARCH_ROBOTS_PENDING, SEARCH_ROBOTS_SUCCESS, SEARCH_ROBOTS_FAILED } from './constants';

const initialStateSearch={
    searchField:''
}

export const searchRobots = (state=initialStateSearch,action={}) => {
    switch(action.type)
    {
    case CHANGE_INPUT_FIELD :
        return Object.assign({},state,{searchField:action.payload})
    default:
        return state;    
    }
}

const initialStateRobots = {
    isPending:true,
    robots:[],
    error:''
} 

export const requestRobots = (state=initialStateRobots,action={}) => {
    switch(action.type)
    {
        case SEARCH_ROBOTS_PENDING:
            return Object.assign({},state,{isPending:true})
        case SEARCH_ROBOTS_SUCCESS:
            return Object.assign({},state,{isPending:false,robots:action.payload})
        case SEARCH_ROBOTS_FAILED:
            return Object.assign({},state,{error:action.payload})
        default:
            return state;
    }
}
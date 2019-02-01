import { FETCH_PROFILE, FETCH_PROFILE_FAILURE } from '../actions/types';

const profileReducer = (state={}, action) => {    
    switch(action.type) {
        case FETCH_PROFILE:           
            return action.payload.data;
        case FETCH_PROFILE_FAILURE:
            return action;          
        default:
            return state;
    }
}

export default profileReducer;
import { combineReducers } from 'redux';

import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  profileInfo: profileReducer
});

export default rootReducer;
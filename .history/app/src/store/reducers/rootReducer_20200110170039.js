import authReducer from './authReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    fire
});

export default rootReducer
import authReducer from './authReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    firestore:fire
});

export default rootReducer
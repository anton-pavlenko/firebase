import authReducer from './authReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    firestore:firestoreReducer,
});

export default rootReducer
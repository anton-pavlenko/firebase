import authReducer from './authReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    firestore:firestoreReducer,
    firebase:
});

export default rootReducer
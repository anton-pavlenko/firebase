import authReducer from './authReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
});

export default rootReducer
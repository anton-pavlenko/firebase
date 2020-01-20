import authReducer from './authReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-red'

const rootReducer = combineReducers({
    auth: authReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
});

export default rootReducer
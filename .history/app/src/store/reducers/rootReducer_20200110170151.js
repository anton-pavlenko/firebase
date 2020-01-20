import authReducer from './authReducer'
import { combineReducers } from 'redux',
import 

const rootReducer = combineReducers({
    auth: authReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
});

export default rootReducer
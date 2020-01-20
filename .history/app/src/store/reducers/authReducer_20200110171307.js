const initState = {}
const authReducer = (state = initState, action) => { 
    switch(action.type){
        case:'LOGIN_ERROR':
    }
    return {
        ...state,
        authError: 'Login faild'
 }
 return state
}


 export default authReducer
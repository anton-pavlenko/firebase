const initState = {
    authError:null
}
const authReducer = (state = initState, action) => { 
    switch(action.type){
        case 'LOGIN_ERROR':
    return {
        ...state,
        authError: 'Login faild'
 }
 case 'LOGIN_SUCCESS':
}
 return state
}


 export default authReducer
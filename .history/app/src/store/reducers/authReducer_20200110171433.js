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
 case 'Login '
}
 return state
}


 export default authReducer
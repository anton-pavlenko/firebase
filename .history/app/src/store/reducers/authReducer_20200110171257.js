const initState = {}
const authReducer = (state = initState, action) => { 
    switch(action.type){
        case:'LOGIN_ERROR':
    }
    return {
        ...state,
        authError: 'Login faild'
 }
}


 export default authReducer
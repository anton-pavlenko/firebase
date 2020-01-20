export const signIn = (credentails) => {
    return (dispatch, getState, {get})
    firebase.singnInWithEmailAndPassword()
    .then(res => res.json())
}
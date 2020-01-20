export const signIn = (credentails) => {
    return (dispatch, getState)
    firebase.singnInWithEmailAndPassword()
    .then(res => res.json())
}
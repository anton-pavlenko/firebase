export const signIn = (credentails) => {
    return (dispatch, getState, {getFirebase})
    firebase.singnInWithEmailAndPassword()
    .then(res => res.json())
}
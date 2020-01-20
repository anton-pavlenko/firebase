export const signIn = (credentails) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase
    }
    firebase.singnInWithEmailAndPassword()
    .then(res => res.json())
}
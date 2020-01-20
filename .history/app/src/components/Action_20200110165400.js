export const signIn = (credentails) => {
    return (dispatch, get)
    firebase.singnInWithEmailAndPassword()
    .then(res => res.json())
}
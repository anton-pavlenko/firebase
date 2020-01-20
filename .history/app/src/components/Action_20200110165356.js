export const signIn = (credentails) => {
    return (dispatch)
    firebase.singnInWithEmailAndPassword()
    .then(res => res.json())
}
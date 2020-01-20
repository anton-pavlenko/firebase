export const signIn = (credentails) => {
    firebase.singnInWithEmailAndPassword()
    .then(res => res.json())
}
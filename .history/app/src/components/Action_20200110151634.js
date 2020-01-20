export const signIn = () => {
    firebase.singnInWithEmailAndPassword()
    .then(res => res.json())
}
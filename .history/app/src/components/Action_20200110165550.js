export const signIn = (credentails) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
    }
  firebase.auth().signInWithEmailAndPassword(
      credentails
  )
    .then(res => res.json())
}
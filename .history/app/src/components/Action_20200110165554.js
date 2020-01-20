export const signIn = (credentails) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
    }
  firebase.auth().signInWithEmailAndPassword(
      credentails.email,
      
  )
    .then(res => res.json())
}
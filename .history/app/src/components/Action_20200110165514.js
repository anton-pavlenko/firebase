export const signIn = (credentails) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
    }
  firebase.auth().signInWith
    .then(res => res.json())
}
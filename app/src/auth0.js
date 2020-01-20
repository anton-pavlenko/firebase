// let _auth0Client = null;
// let _idToken = null;
// let _profile = null;

// class Auth0Client {
//   constructor() {
//     _auth0Client = new auth0.WebAuth({
//       domain: 'dev--jul69kv.auth0.com',
//       clientID: 'rB5fzydRwJqVKqo5pJNRIHxQGWJGHVlu'
//     });

//     // _auth0Client = new auth0.WebAuth({
//     //   domain: 'dev--jul69kv.auth0.com',
//     //   clientID: 'rB5fzydRwJqVKqo5pJNRIHxQGWJGHVlu',
//     //   audience: 'https://dev--jul69kv.auth0.com/userinfo',
//     //   redirectUri: 'http://localhost:3001/',
//     //   responseType: 'token id_token',
//     //   scope: 'openid profile'
//     // });
//   }

//   getIdToken() {
//     return _idToken;
//   }

//   getProfile() {
//     return _profile;
//   }

//   handleCallback() {
//     return new Promise((resolve, reject) => {
//       _auth0Client.parseHash(async (err, authResult) => {
//         window.location.hash = '';
//         console.log(1);
//         if (err) return reject(err);
//         console.log(2);
        
//         console.log(authResult);
//         if (!authResult || !authResult.idToken) {
//           // not an authentication request
//           console.log(3);
//           return resolve(false);
//         }
//         console.log(4);
//         console.log(authResult);
//         _idToken = authResult.idToken;
//         _profile = authResult.idTokenPayload;

//         return resolve(true);
//       });
//     });
//   }

//   signIn(username,password) {
//     _auth0Client.login({
//       realm: 'tests',
//       username: username,
//       password: password,
//       scope: 'openid profile',
//       audience: 'urn:test'
//     });
//   }

//   signOut() {
//     _idToken = null;
//     _profile = null;
//   }
// }

// const auth0Client = new Auth0Client();

// export default auth0Client
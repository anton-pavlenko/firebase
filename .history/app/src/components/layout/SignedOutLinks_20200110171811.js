import React, { Component } from "react";
// import { ROOT_URL } from "../../App";
// import { AuthToken } from '../../helpers/requests';
import { compose } from 'recompose'
import 

// import createAuth0Client from "@auth0/auth0-spa-js";
// import Auth0Client from '../../auth0'
// import * as admin from 'firebase-admin';
// admin.initializeApp(
//     credential: admin.credential.applicationDefault(),
//     databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
//   );

class SignedOutLinks extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         email: "",
    //         password: "",
    //         error: ""
    //     }
        
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    //   }
    
    //   handleChange(e) {
    //     const name = e.target.name
    //     const value = e.target.value
    //     this.setState({
    //         [name]: value
    //     })
    //   }

    //   handleClick = () => {
    //     createAuth0Client.login({
    //         realm: 'tests',
    //         username: 'leonid.sahakyan@gmail.com',
    //         password: 'AsdAsd11',
    //         scope: 'openid profile',
    //         audience: 'urn:test'
    //       });
    //   }

    //   handleRedirectCallback = async () => {
    //     console.log(1);
    //     await auth0Client.handleRedirectCallback();
    //     console.log(2);
    //     const user = await auth0Client.getUser();
        
    //     //setIsAuthenticated(true);
    //     //setUser(user);
    //   };

    // handleClick = e => {
    //     e.preventDefault();
        
    //     const obj = {
    //         email: this.state.email,
    //         password: this.state.password
    //     }

    //     const headers = new Headers();
    //     headers.append('Access-Control-Allow-Origin', '*');
    //     // headers.append('Access-Control-Allow-Credentials', 'true');

    //     this.setState({error:""});
        
    //     console.log(ROOT_URL);
    //     fetch(ROOT_URL+'sign-in', {
    //         crossDomain:true,
    //         method: "post",
    //         body: JSON.stringify(obj),
    //         headers: headers
    //     })
    //     .then(response => response.json())
    //     .then(response=> {
    //         if(response.status == 'success'){
    //             AuthToken.set(response.data.user.stsTokenManager.accessToken);
    //         }else{
    //             this.setState({error:response.message});
    //         }
    //     }).catch(error => {
    //         console.log('error on server');
    //     })

    //     //this.setState({error:"Incorrect Username/Password1"}));
    //     // .then(res => {
    //     //     if(res.status == 200) {
    //     //         console.log(res);
    //     //         AuthToken.set(res.data.user.token);
    //     //         // setIsAuthenticated(true);
    //     //         // setUser(res.data.user);
    //     //     }
    //     //     else {
    //     //         console.log('error');
    //     //         // alert("Something Went wrong")
    //     //     }
    //     // }).then(res => {
    //     //     console.log(res);
    //     // })
    // }
    onSubmit = event => {
        const { email, password } = this.state;
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };

    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
       this.setState({
        [e.target.id]: e.target.value
       })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.SignIn()
    }
    

    render(){
        const { email, password} = this.state;
        return(
            
            <div className="login">
                <form onSubmit={this.handleSubmit} className="form-signin text-center align-middle">
                    <img className="mb-3" src="https://cdn.leisurex.org/social/logos/Logo-Full-Color.png" alt="" width="auto" height="40"></img>
                    <p class="text-danger">{this.state.error}</p>
                    <div className="form-group">
                        <section>
                            <label className="sr-only">Email</label>
                            <input id ="email_field" name="email" placeholder="Email" value={email} required="" type="text" className="form-control" value={this.state.value} onChange={this.handleChange} />
                        </section>
                            <section>
                                <label className="sr-only">Password</label>
                                <input id="password_field" name="password" value={password} placeholder="Password" required="" type="password" className="form-control" value={this.state.value} onChange={this.handleChange} />
                            </section>
                    </div>
                                <button onClick={this.handleClick} className="btn btn-lg btn-block btn btn-primary" disabled="">Log In</button>
                                <p className="mt-5 mb-3 text-muted">©2019 LeisureX, Inc.</p>
                    </form>
                                      
                                <div className="redux-toastr" aria-live="assertive">
                                    <div>
                                            <div className="top-left"></div>
                                            <div className="top-right"></div>
                                            <div className="top-center"></div>
                                            <div className="bottom-left"></div>
                                            <div className="bottom-right"></div>
                                            <div className="bottom-center"></div>
                                    </div>
                                </div>
                </div>
                          

        )
    }
}


export default SignedOutLinks
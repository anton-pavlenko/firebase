import React, { Component } from "react";


class SignedOutLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
      
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }

    render(){

        return(

            <div class="login">
                <form class="form-signin text-center align-middle">
                    <img class="mb-3" src="https://cdn.leisurex.org/social/logos/Logo-Full-Color.png" alt="" width="auto" height="40"></img>
                    <div class="form-group">
                        <section>
                            <label class="sr-only">Username</label>
                            <input name="username" placeholder="Username" required="" type="text" class="form-control" value={this.state.value} onChange={this.handleChange} />
                        </section>
                            <section>
                                <label class="sr-only">Password</label>
                                <input name="password" placeholder="Password" required="" type="password" class="form-control" value={this.state.value} onChange={this.handleChange} />
                            </section>
                    </div>
                                <button type="submit" class="btn btn-lg btn-block btn btn-primary disabled" disabled="">Log In</button>
                                <p class="mt-5 mb-3 text-muted">©2019 LeisureX, Inc.</p>
                    </form>
                                      
                                <div class="redux-toastr" aria-live="assertive">
                                    <div>
                                            <div class="top-left"></div>
                                            <div class="top-right"></div>
                                            <div class="top-center"></div>
                                            <div class="bottom-left"></div>
                                            <div class="bottom-right"></div>
                                            <div class="bottom-center"></div>
                                    </div>
                                </div>
                </div>
                          

        )
    }
}

export default SignedOutLinks
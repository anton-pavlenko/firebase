import React, { Component } from "react";


class SignedOutLinks extends Component {

    render(){

        return(

            <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top"><a href="/partner/login" class="navbar-brand"><img src="https://cdn.leisurex.org/social/logos/Logo-NoIcon-Black.png" alt="" width="auto" height="20"></a><button type="button" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button><div class="justify-content-end collapse navbar-collapse"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link" href="/">Home</a></li></ul></div></nav>
        )
    }
}

export default SignedOutLinks
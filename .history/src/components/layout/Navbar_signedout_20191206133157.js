import React from 'react'
import { Link } from 'react-router-dom'




const Navbar_signedout = () => {


    return(

        <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
            <a href="/partner/login" class="navbar-brand"><img src="https://cdn.leisurex.org/social/logos/Logo-NoIcon-Black.png" alt="" width="auto" height="20"></img></a><button type="button" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button><div class="justify-content-end collapse navbar-collapse"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link" href="/">Home</a></li></ul></div></nav>
    )
}

export default Navbar_signedout
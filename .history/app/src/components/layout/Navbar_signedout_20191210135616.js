import React from "react";
import {Link} from "react-router-dom";

const Navbar_signedout = () => {
  
    return (
        <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
            <a class="navbar-brand" href="/partner/login">
                <img alt="" height="20" src="https://cdn.leisurex.org/social/logos/Logo-NoIcon-Black.png" width="auto"></img>
            </a>
            <button class="navbar-toggler" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="justify-content-end collapse navbar-collapse">
                <ul class="navbar-nav">
                    <Link to="/home">
                        <li  class="nav-item">
                            <a class="nav-link" href="/home">
                                Home
                            </a>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar_signedout;

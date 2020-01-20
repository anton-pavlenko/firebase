import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home_nav from "./Home_nav";
import Navbar_signedout from 

import SignedInLinks from "./SignedInLinks";

import Index from "../public/Index";

const Navbar = () => {
  const [isAuth, setAuth] = useState(false);
  const [isAuthHome, setAuthHome] = useState(false);

  const handleClick = () => {
      setAuth(true)
  }

  const handleClickHome = () => {
    setAuthHome(true)
  }

  return (
    <>
    {!isAuthHome ? 
      <>{!isAuth ? (
        <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
          <a href="/partner/Dashboard" className="navbar-brand">
            <img
              src="https://cdn.leisurex.org/social/logos/Logo-NoIcon-Black.png"
              alt
              width="auto"
              height="20"
            ></img>
          </a>

          <button
            type="button"
            class="navbar-toggler "
            data-toggle="collapse"
            data-target="#navbarMenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="justify-content-end collapse navbar-collapse"
            id="navbarMenu"
          >
            <ul class="navbar-nav ">
              <Link to="/partner/Dashboard">
                <li class="nav-item">
                  <a href="#" class="nav-link text-secondary">
                    Dashboard
                  </a>
                </li>
              </Link>
              <Link to="/partner/myteam">
                <li class="nav-item">
                  <a href="#" class="nav-link text-secondary">
                    My Team
                  </a>
                </li>
              </Link>
              <Link to="/partner/myclient">
                <li class="nav-item">
                  <a href="#" class="nav-link text-secondary">
                    My Clients
                  </a>
                </li>
              </Link>

              <Link to="/partner/marketing">
                <li class="nav-item">
                  <a href="#" class="nav-link text-secondary">
                    Marketing
                  </a>
                </li>
              </Link>
              <Link to="/partner/settings">
                <li class="nav-item">
                  <a href="#" class="nav-link text-secondary">
                    Settings
                  </a>
                </li>
              </Link>
              <Link to="/partner/login">
                <li onClick={handleClick} class="nav-item">
                  <a href="#" class="nav-link text-secondary">
                    Logout
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      ) : (
        <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
          <a class="navbar-brand" href="/partner/login">
            <img
              alt=""
              height="20"
              src="https://cdn.leisurex.org/social/logos/Logo-NoIcon-Black.png"
              width="auto"
            ></img>
          </a>
          <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="justify-content-end collapse navbar-collapse">
            <ul class="navbar-nav">
              <Link to="/Home">
                <li onClick={handleClickHome} class="nav-item">
                  <a class="nav-link" href="#">
                    Home
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      )}
      </>
      :
      (
        <Home_nav />
      )
    }
    </>
  );
};

export default Navbar;

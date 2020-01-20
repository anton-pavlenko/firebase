import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home_nav from "./Home_nav";

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
                  <a href="/partner/Dashboard" class="nav-link text-secondary">
                    Dashboard
                  </a>
                </li>
              </Link>
              <Link to="/partner/myteam">
                <li class="nav-item">
                  <a href="/partner/myteam" class="nav-link text-secondary">
                    My Team
                  </a>
                </li>
              </Link>
              <Link to="/partner/myclient">
                <li class="nav-item">
                  <a href="/partner/myclient" class="nav-link text-secondary">
                    My Clients
                  </a>
                </li>
              </Link>

              <Link to="/partner/marketing">
                <li class="nav-item">
                  <a href="/partner/marketing" class="nav-link text-secondary">
                    Marketing
                  </a>
                </li>
              </Link>
              <Link to="/partner/settings">
                <li class="nav-item">
                  <a href="/partner/settings" class="nav-link text-secondary">
                    Settings
                  </a>
                </li>
              </Link>
              <Link to="/partner/login">
                <li onClick={handleClick} class="nav-item">
                  <a href="/partner/login" class="nav-link text-secondary">
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
              <Link to="/home">
                <li onClick={handleClickHome} class="nav-item">
                  <a href="/home" class="nav-link" href="#">
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
        <nav class="navbar-custom justify-content-center navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
          <div class="navbar-header">
          <a href="#" class="d-flex w-50 mr-auto navbar-brand">
            <img src="https://cdn.leisurex.org/social/logos/Logo-NoIcon-White.png" alt="" width="auto" height="20"></img></a>

          </div>
          <div class="collapse navbar-collapse " id="myNavbar">
            <ul class="nav navbar-nav">
              <li class="active">
                <a href="#">Home</a></li>
              <li><a href="#">Page 2</a></li>
              <li><a href="#">Page 3</a></li>
            </ul>
          </div>
        </div>
      </nav>

        // <nav class="navbar-custom justify-content-center navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        //   <a href="/" class="d-flex w-50 mr-auto navbar-brand">
        //     <img
        //       src="https://cdn.leisurex.org/social/logos/Logo-NoIcon-White.png"
        //       alt=""
        //       width="auto"
        //       height="20"
        //     ></img>
        //   </a>
        //   <button type="button" class="navbar-toggler">
        //     <span class="navbar-toggler-icon"></span>
        //   </button>
        //   <div class="w-100 collapse navbar-collapse">
        //     <ul class="w-100 justify-content-center navbar-nav">
        //       <li class="nav-item">
        //         <p class="nav-link text-white pb-1 my-0">How It Works</p>
        //       </li>
        //       <li class="nav-item">
        //         <p class="nav-link text-white pb-1 my-0">Recent Bookings</p>
        //       </li>
        //       <li class="nav-item">
        //         <p class="nav-link text-white pb-1 my-0">Services</p>
        //       </li>
        //       <li class="nav-item">
        //         <p class="nav-link text-white pb-1 my-0">FAQs</p>
        //       </li>
        //     </ul>
        //     <ul class="ml-auto w-100 justify-content-end navbar-nav">
        //       <li class="nav-item">
        //         <a class="nav-link text-white pb-1 my-0" href="tel:18889534787">
        //           1-888-953-4787
        //         </a>
        //       </li>
        //     </ul>
        //   </div>
        // </nav>
      )
    }
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home_nav from "./Home_nav";

import SignedInLinks from "./SignedInLinks";

import Index from "../public/Index";

const Navbar = () => {
  const [isAuth, setAuth] = useState(false);
  const [isAuthHome, setAuthHome] = useState(false);

  const handleClick = () => {
    console.log('stex2');
    setAuth(true)
  }

  const handleClickHome = () => {
    setAuthHome(true)
  }

  return (
    <>
      {!isAuthHome ?
        <>{!isAuth ? (
          <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
            <a href="/partner/Dashboard" className="navbar-brand">
              <img
                src="https://cdn.leisurex.org/social/logos/Logo-NoIcon-Black.png"
                width="auto"
                height="20"
                alt=""
              ></img>
            </a>

            <button
              type="button"
              className="navbar-toggler "
              data-toggle="collapse"
              data-target="#navbarMenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="justify-content-end collapse navbar-collapse"
              id="navbarMenu"
            >
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link to="/partner/Dashboard" className="nav-link text-secondary">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link to="/partner/myteam" className="nav-link text-secondary">
                    My Team
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/partner/myclient" className="nav-link text-secondary">
                    My Clients
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/partner/marketing" className="nav-link text-secondary">
                    Marketing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/partner/settings" className="nav-link text-secondary">
                    Settings
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/partner/login" className="nav-link text-secondary">
                    Logout
                  </Link>
                </li>
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
                  <li onClick={handleClickHome} class="nav-item">
                    <Link to="/home" class="nav-link" href="#">
                      Home
                  </Link>
                  </li>
                </ul>
              </div>
            </nav>
          )}
        </>
        :
        (

          <nav class="navbar-custom justify-content-center navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <a href="#" class="d-flex w-50 mr-auto navbar-brand">
              <img
                src="https://cdn.leisurex.org/social/logos/Logo-NoIcon-White.png"
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
              class="w-100 collapse navbar-collapse"
              id="navbarMenu"
            >
              <ul class="w-100 justify-content-center navbar-nav">
                <li class="nav-item"><p class="nav-link text-white pb-1 my-0">How It Works</p></li>
                <li class="nav-item"><p class="nav-link text-white pb-1 my-0">Recent Bookings</p></li>
                <li class="nav-item"><p class="nav-link text-white pb-1 my-0">Services</p></li>
                <li class="nav-item"><p class=" nav-link text-white pb-1 my-0">FAQs</p></li>
              </ul>
              <ul class="ml-auto w-100 justify-content-end navbar-nav"><li class="nav-item"><a class="tel-number nav-link text-white pb-1 my-0" href="tel:18889534787">1-888-953-4787</a></li></ul>
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

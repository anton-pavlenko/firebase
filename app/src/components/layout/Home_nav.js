import React, { Component } from "react";

class Home_nav extends Component {
  render() {
    return (




      <nav className="navbar-custom justify-content-center navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        <a href="/home" className="d-flex w-50 mr-auto navbar-brand"><img src="https://cdn.leisurex.org/social/logos/Logo-NoIcon-White.png" alt="" width="auto" height="20"></img></a>
        <button type="button" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>
        <div className="w-100 collapse navbar-collapse" >
          <ul className="w-100 justify-content-center navbar-nav">
            <li className="nav-item"><p className="nav-link text-white pb-1 my-0" >How It Works</p></li>
            <li className="nav-item"><p className="nav-link text-white pb-1 my-0" >Recent Bookings</p></li>
            <li className="nav-item"><p className="nav-link text-white pb-1 my-0">Services</p></li>
            <li className="nav-item"><p className="nav-link text-white pb-1 my-0">FAQs</p></li>
          </ul>
          <ul className="ml-auto w-100 justify-content-end navbar-nav">
            <li className="nav-item"><a className="nav-link text-white pb-1 my-0" href="tel:18889534787" >1-888-953-4787</a></li>
          </ul>
        </div>
      </nav>


    );
  }
}

export default Home_nav;

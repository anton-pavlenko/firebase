import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <nav class="navbar-custom justify-content-center navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        <a href="/" class="d-flex w-50 mr-auto navbar-brand">
          <img
            src="https://cdn.leisurex.org/social/logos/Logo-NoIcon-White.png"
            alt=""
            width="auto"
            height="20"
          ></img>
        </a>
        <button type="button" class="navbar-toggler">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="w-100 collapse navbar-collapse">
          <ul class="w-100 justify-content-center navbar-nav">
            <li class="nav-item">
              <p class="nav-link text-white pb-1 my-0">How It Works</p>
            </li>
            <li class="nav-item">
              <p class="nav-link text-white pb-1 my-0">Recent Bookings</p>
            </li>
            <li class="nav-item">
              <p class="nav-link text-white pb-1 my-0">Services</p>
            </li>
            <li class="nav-item">
              <p class="nav-link text-white pb-1 my-0">FAQs</p>
            </li>
          </ul>
          <ul class="ml-auto w-100 justify-content-end navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-white pb-1 my-0" href="tel:18889534787">
                1-888-953-4787
              </a>
            </li>
          </ul>
        </div>
      </nav>

            <section
          <header id="book" >
          <div className="overlay"></div>
          <div className="container">
              <div className="text-white d-flex align-items-center">
                  <section className="col-12 my-5">
                      <section className="text-center col-xl-12 col-lg-12 col-md-10 col-sm-10 mx-auto">
                          <section className="row">
                              <section className="col-12">
                                <h1 class="">Book your ultimate travel experience for less.</h1>
                                <p class="text-small">We use a wide array of tactics including fuel dumps, points booking and private rates to save you on your travel.  We even kick you back some of our commission so you know you are getting the best rates available.  Give us a shot and see what you have been missing.</p>
                                <br></br>

                              </section>
                          </section>
                          <section>
                          <ul class="nav nav-tabs" style="border-bottom: none;"><li class="nav-item"><a class="active nav-link" style="color: black; background-color: white; border-width: 2px 2px 0px; border-top-style: solid; border-right-style: solid; border-bottom-style: initial; border-left-style: solid; border-top-color: white; border-right-color: white; border-bottom-color: initial; border-left-color: white; border-image: initial;">Flight</a></li><li class="nav-item"><a class="nav-link" style="color: white; background-color: transparent; border-width: 2px 2px 0px; border-top-style: solid; border-right-style: solid; border-bottom-style: initial; border-left-style: solid; border-top-color: white; border-right-color: white; border-bottom-color: initial; border-left-color: white; border-image: initial;">Hotel</a></li><li class="nav-item"><a class="nav-link" style="color: white; background-color: transparent; border-width: 2px 2px 0px; border-top-style: solid; border-right-style: solid; border-bottom-style: initial; border-left-style: solid; border-top-color: white; border-right-color: white; border-bottom-color: initial; border-left-color: white; border-image: initial;">Other</a></li></ul>
                          </section>
                      </section>
                  </section>
              </div>
          </div>
          </header>
        

    );
  }
}

export default Home;

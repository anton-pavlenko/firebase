import React, { Component } from "react";

class Home_nav extends Component {
  render() {
    return (

      <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand " href="#">WebSiteName</a>
    </div>
    <div class="collapse navbar-collapse navbar-right" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
     
    
        
       
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li>
      </ul>
    </div>
  </div>
</nav>


      <nav class="navbar-custom justify-content-center navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        <a href="/home" class="d-flex w-50 mr-auto navbar-brand"><img src="https://cdn.leisurex.org/social/logos/Logo-NoIcon-White.png" alt="" width="auto" height="20"></img></a>
        <button type="button" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>
        <div class="w-100 collapse navbar-collapse" >
          <ul class="w-100 justify-content-center navbar-nav">
            <li class="nav-item"><p class="nav-link text-white pb-1 my-0" >How It Works</p></li>
            <li class="nav-item"><p class="nav-link text-white pb-1 my-0" >Recent Bookings</p></li>
            <li class="nav-item"><p class="nav-link text-white pb-1 my-0">Services</p></li>
            <li class="nav-item"><p class="nav-link text-white pb-1 my-0">FAQs</p></li>
            </ul>
            <ul class="ml-auto w-100 justify-content-end navbar-nav">
              <li class="nav-item"><a class="nav-link text-white pb-1 my-0" href="tel:18889534787" >1-888-953-4787</a></li>
              </ul></div></nav>

         
    );
  }
}

export default Home_nav;

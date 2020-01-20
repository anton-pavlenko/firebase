import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
<img src={require('./logo.jpeg')} />


const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-sm navbar-dark bg-light">
      {/* <img src="/public/Logo-NoIcon-Black.png"></img> */}
      <img src={logo} width="100" height="50" />
      <button class="navbar-toggler " data-toggle="collapse" data-target="#navbarMenu">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarMenu">
          <ul class="navbar-nav ">
            <Link to='/patern/Dashboard'>
              <li class="nav-item">
                  <a href="#" class="nav-link text-secondary">Dashboard</a>
              </li>
              </Link>
              <li class="nav-item">
                  <a href="#" class="nav-link text-secondary">My Team</a>
              </li>
              <li class="nav-item">
                  <a href="#" class="nav-link text-secondary">My Clients</a>
              </li>
              <li class="nav-item">
                  <a href="#" class="nav-link text-secondary">Marketing</a>
              </li>
              <li class="nav-item">
                  <a href="#" class="nav-link text-secondary">Settings</a>
              </li>
              <li class="nav-item">
                  <a href="#" class="nav-link text-secondary">Logout</a>
              </li>
          </ul>
      </div>

  </nav>
    
    )
}

export default Navbar

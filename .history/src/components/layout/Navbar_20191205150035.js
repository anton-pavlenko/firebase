import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'

import Index from '../public/Index'


const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <
    
      <button class="navbar-toggler " data-toggle="collapse" data-target="#navbarMenu">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarMenu">
          <ul class="navbar-nav ">
            <Link to='/partner/Dashboard'>
              <li class="nav-item">
                  <a href="#" class="nav-link text-secondary">Dashboard</a>
              </li>
              </Link>
              <Link to='partner/myteam'>
              <li class="nav-item">
                  <a href="#" class="nav-link text-secondary">My Team</a>
              </li>
              </Link>
              <Link to='/partner/myclient'>
              <li class="nav-item">
                  <a href="#" class="nav-link text-secondary">My Clients</a>
              </li>
              </Link>

              <Link to='/partner/marketing'>
              <li class="nav-item">
                  <a href="#" class="nav-link text-secondary">Marketing</a>
              </li>
              </Link>

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

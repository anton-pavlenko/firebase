import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'

import Index from '../public/Index'


const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <a href="/partner/Dashboard" className="navbar-brand">
          <img src="https://cdn.leisurex.org/social/logos/Logo-NoIcon-Black.png" alt width="auto" height="20"></img>
      </a>
    
      <button type="button" class="navbar-toggler " data-toggle="collapse" data-target="#navbarMenu">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="justify-content-end collapse navbar-collapse" id="navbarMenu">
          <ul class="navbar-nav ">
            <Link to='/partner/Dashboard'>
              <li class="nav-item">
                  <a href="#" class="nav-link text-secondary">Dashboard</a>
              </li>
              </Link>
              <Link to='/partner/myteam'>
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
                <Link to="/partner/settings">
              <li class="nav-item">
                  <a href="#" class="nav-link text-secondary">Settings</a>
              </li>
              </Link>
              <Link to='/partner/login'>
              <li class="nav-item">
                  <a href="#" class="nav-link text-secondary">Logout</a>
              </li>
              </Link>
          </ul>
      </div>

  </nav>
    
    )
}

export default Navbar

import React, { Component } from "react";


class Home extends Component {


    render() {


        return(

            <nav class="navbar-custom justify-content-center navbar navbar-expand-md navbar-dark bg-dark sticky-top"><a href="/" class="d-flex w-50 mr-auto navbar-brand"><img src="https://cdn.leisurex.org/social/logos/Logo-NoIcon-White.png" alt="" width="auto" height="20"></img></a><button type="button" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button><div class="w-100 collapse navbar-collapse" style=""><ul class="w-100 justify-content-center navbar-nav"><li class="nav-item"><p class="nav-link text-white pb-1 my-0" style="font-size: 16px; font-weight: 300;">How It Works</p></li><li class="nav-item"><p class="nav-link text-white pb-1 my-0" style="font-size: 16px; font-weight: 300;">Recent Bookings</p></li><li class="nav-item"><p class="nav-link text-white pb-1 my-0" style="font-size: 16px; font-weight: 300;">Services</p></li><li class="nav-item"><p class="nav-link text-white pb-1 my-0" style="font-size: 16px; font-weight: 300;">FAQs</p></li></ul><ul class="ml-auto w-100 justify-content-end navbar-nav"><li class="nav-item"><a class="nav-link text-white pb-1 my-0" href="tel:18889534787" style="font-size: 16px; font-weight: 500;">1-888-953-4787</a></li></ul></div></nav>
        )
    }
}

export default Home
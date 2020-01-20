import React, { Component } from "react";



class Home extends React.Component {

    render() {

        return(
                <section>
                    <header id="book">
                        <div class="overlay"></div>
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
                                                <ul className="nav nav-tabs">
                                                    <li className="nav-item">
                                                    <a class="active nav-link">Flight</a>
                                                    </li>
                                                    <li class="nav-item"><a class="nav_1 nav-link">Hotel</a></li>
                                                    <li class="nav-item"><a class="nav_1 nav-link">Other</a></li>
                                                </ul>
                                                <div className="card_1 card">
                                                    <div className="tab-content">
                                                        <div className="tab-pane active">
                                                            <div className="card-body">
                                                                <form className="text-left mb-0">
                                                                <section class="row"><section class="col-12"></section></section>
                                                                <section className="row form-group">
                                                                    <section className="col-12">
                                                                    <div role="group" class="btn-group"><button type="button" class="btn btn-primary active">Round Trip</button><button type="button" class="btn btn-primary">One Way</button></div>
                                                                    </section>
                                                                </section>
                                                                <section className="row form-group mb-xl-3 mb-lg-3 mb-md-0 mb-sm-0 mb-0">
                                                                    <section className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1">
                                                                        <div className="rbt clearfix open col-12 px-0" tabindex="-1">
                                                                            <div className=""
                                                                        </div>
                                                                    </section>
                                                                </section>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>    
                                                </div> 
                                            </section>
                                    </section>
                                </section>
                            </div>
                        </div>
                    </header>
                </section>


            
        )
    }
}

export default Home
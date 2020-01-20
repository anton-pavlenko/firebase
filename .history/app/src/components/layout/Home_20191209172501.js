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
                                                                            <div className="rbt-input-hint-container">
                                                                            <input aria-autocomplete="both" aria-expanded="false" aria-haspopup="listbox" autocomplete="nope" placeholder="Origin" role="combobox" type="text" class="rbt-input-main form-control rbt-input " value=""></input>
                                                                            <div className="rbt-input-hint">
                                                                            <input className="input_1" aria-hidden="true" readonly="" tabindex="-1" value=""></input>
                                                                            </div>
                                                                            </div>
                                                                            <div aria-atomic="true" aria-live="polite" class="sr-only rbt-sr-status" role="status">0 selections</div>
                                                                        </div>
                                                                    </section>
                                                                    <section class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><div class="rbt clearfix open col-12 px-0" tabindex="-1" ><div class="rbt-input-hint-container" ><input aria-autocomplete="both" aria-expanded="false" aria-haspopup="listbox" autocomplete="nope" placeholder="Destination" role="combobox" type="text" class="rbt-input-main form-control rbt-input " value=""></input><div class="rbt-input-hint"></div></div><div aria-atomic="true" aria-live="polite" class="sr-only rbt-sr-status" role="status">0 selections</div></div></section>
                                                                </section>
                                                                <section className="row form-group mb-xl-3 mb-lg-3 mb-md-0 mb-sm-0 mb-0">
                                                                    <section className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1">
                                                                        <div id="Depart Date" tabindex="-1" class="col-12 px-0 rw-datetime-picker rw-widget">
                                                                            <div class="rw-widget-picker rw-widget-container">
                                                                            <input id="Depart Date_input" role="combobox" placeholder="Depart Date" aria-haspopup="true" aria-expanded="false" aria-owns="" type="text" tabindex="0" autocomplete="off" class="rw-widget-input rw-input" value=""></input>
                                                                            <span class="rw-select rw-select-bordered">
                                                                            <button tabindex="-1" title="Select date" type="button" aria-label="Select date" class="rw-btn rw-btn-select"><span aria-hidden="true" class="rw-i rw-i-calendar">
                                                                            </span></button>
                                                                            </span>
                                                                            </div>
                                                                        </div>

                                                                    </section>
                                                                    <section class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><div id="Return Date" tabindex="-1" class="col-12 px-0 rw-datetime-picker rw-widget"><div class="rw-widget-picker rw-widget-container"><input id="Return Date_input" role="combobox" placeholder="Return Date" aria-haspopup="true" aria-expanded="false" aria-owns="" type="text" tabindex="0" autocomplete="off" class="rw-widget-input rw-input" value=""></input><span class="rw-select rw-select-bordered"><button tabindex="-1" title="Select date" type="button" aria-label="Select date" class="rw-btn rw-btn-select"><span aria-hidden="true" class="rw-i rw-i-calendar"></span></button></span></div></div></section>
                                                                    <section class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><div id="Passengers_input" role="combobox" aria-owns="Passengers_listbox" aria-expanded="false" aria-haspopup="true" aria-busy="false" aria-live="polite" aria-autocomplete="list" aria-disabled="false" aria-readonly="false" tabindex="0" class="col-12 px-0 rw-dropdown-list rw-widget"><div class="rw-widget-input rw-widget-picker rw-widget-container"><div class="rw-input rw-dropdown-list-input"><input tabindex="-1" class="rw-dropdown-list-autofill rw-detect-autofill rw-sr" value=""></input><span class="rw-placeholder">Number of Passengers</span></div><span class="rw-select"><button role="presentational" aria-hidden="true" tabindex="-1" title="open dropdown" type="button" aria-disabled="false" aria-label="open dropdown" class="rw-btn rw-btn-select"><span aria-hidden="true" class="rw-i rw-i-caret-down"></span></button></span></div></div></section>
                                                                    <section class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><div id="Class_input" role="combobox" aria-owns="Class_listbox" aria-expanded="false" aria-haspopup="true" aria-busy="false" aria-live="polite" aria-autocomplete="list" aria-disabled="false" aria-readonly="false" tabindex="0" class="col-12 px-0 rw-dropdown-list rw-widget"><div class="rw-widget-input rw-widget-picker rw-widget-container"><div class="rw-input rw-dropdown-list-input"><input tabindex="-1" class="rw-dropdown-list-autofill rw-detect-autofill rw-sr" value=""></input><span class="rw-placeholder">Class</span></div><span class="rw-select"><button role="presentational" aria-hidden="true" tabindex="-1" title="open dropdown" type="button" aria-disabled="false" aria-label="open dropdown" class="rw-btn rw-btn-select"><span aria-hidden="true" class="rw-i rw-i-caret-down"></span></button></span></div></div></section>
                                                                </section>
                                                                <section class="row form-group mb-xl-3 mb-lg-3 mb-md-0 mb-sm-0 mb-0"><section class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><textarea name="notes" id="notes" placeholder="Notes" class="col-12 form-control"></textarea></section></section>
                                                                <section class="row form-group"><section class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><input name="name" id="name" placeholder="Name" type="text" class="col-12 form-control"></input></section><section class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><input name="email" id="email" placeholder="Email" type="email" class="col-12 form-control"></input></section><section class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12"><div class="react-tel-input" style="color: rgb(0, 0, 0); height: 38px;"><input class="col-12 w-100 form-control" id="phone-form-control" placeholder="Phone" type="tel" value="+1" style="height: 38px;"><div class=" flag-dropdown" id="flag-dropdown" tabindex="0" role="button"><div class="selected-flag" title="United States: + 1"><div class="flag us"><div class="arrow"></div></div></div></div></div></section></section>
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
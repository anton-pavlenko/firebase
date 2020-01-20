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
                                                                <section class="row form-group"><section class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><input name="name" id="name" placeholder="Name" type="text" class="col-12 form-control"></input></section><section class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><input name="email" id="email" placeholder="Email" type="email" class="col-12 form-control"></input></section><section class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12"><div class="react-tel-input"><input class="col-12 w-100 form-control" id="phone-form-control" placeholder="Phone" type="tel" value="+1" ></input><div class=" flag-dropdown" id="flag-dropdown" tabindex="0" role="button"><div class="selected-flag" title="United States: + 1"><div class="flag us"><div class="arrow"></div></div></div></div></div></section></section>
                                                                <section class="row text-center"><section class="col-12"><button type="submit" class="btn btn-primary">Submit</button></section></section>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane"><div class="card-body"><form class="text-left mb-0"><section class="row"><section class="col-12"></section></section><section class="row form-group mb-xl-3 mb-lg-3 mb-md-0 mb-sm-0 mb-0"><section class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><input name="hotelLocation" id="hotelLocation" placeholder="Location" type="text" class="col-12 form-control"></input></section><section class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><div id="Check In Date" tabindex="-1" class="col-12 px-0 rw-datetime-picker rw-widget"><div class="rw-widget-picker rw-widget-container"><input id="Check In Date_input" role="combobox" placeholder="Check In Date" aria-haspopup="true" aria-expanded="false" aria-owns="" type="text" tabindex="0" autocomplete="off" class="rw-widget-input rw-input" value=""></input><span class="rw-select rw-select-bordered"><button tabindex="-1" title="Select date" type="button" aria-label="Select date" class="rw-btn rw-btn-select"><span aria-hidden="true" class="rw-i rw-i-calendar"></span></button></span></div></div></section><section class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><div id="Check Out Date" tabindex="-1" class="col-12 px-0 rw-datetime-picker rw-widget"><div class="rw-widget-picker rw-widget-container"><input id="Check Out Date_input" role="combobox" placeholder="Check Out Date" aria-haspopup="true" aria-expanded="false" aria-owns="" type="text" tabindex="0" autocomplete="off" class="rw-widget-input rw-input" value=""></input><span class="rw-select rw-select-bordered"><button tabindex="-1" title="Select date" type="button" aria-label="Select date" class="rw-btn rw-btn-select"><span aria-hidden="true" class="rw-i rw-i-calendar"></span></button></span></div></div></section></section><section class="row form-group mb-xl-3 mb-lg-3 mb-md-0 mb-sm-0 mb-0"><section class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><div id="Number of Rooms_input" role="combobox" aria-owns="Number of Rooms_listbox" aria-expanded="false" aria-haspopup="true" aria-busy="false" aria-live="polite" aria-autocomplete="list" aria-disabled="false" aria-readonly="false" tabindex="0" class="col-12 px-0 rw-dropdown-list rw-widget"><div class="rw-widget-input rw-widget-picker rw-widget-container"><div class="rw-input rw-dropdown-list-input"><input tabindex="-1" class="rw-dropdown-list-autofill rw-detect-autofill rw-sr" value=""></input><span class="rw-placeholder">Number of Rooms</span></div><span class="rw-select"><button role="presentational" aria-hidden="true" tabindex="-1" title="open dropdown" type="button" aria-disabled="false" aria-label="open dropdown" class="rw-btn rw-btn-select"><span aria-hidden="true" class="rw-i rw-i-caret-down"></span></button></span></div></div></section><section class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><div id="Room Type_input" role="combobox" aria-owns="Room Type_listbox" aria-expanded="false" aria-haspopup="true" aria-busy="false" aria-live="polite" aria-autocomplete="list" aria-disabled="false" aria-readonly="false" tabindex="0" class="col-12 px-0 rw-dropdown-list rw-widget"><div class="rw-widget-input rw-widget-picker rw-widget-container"><div class="rw-input rw-dropdown-list-input"><input tabindex="-1" class="rw-dropdown-list-autofill rw-detect-autofill rw-sr" value=""></input><span class="rw-placeholder">Room Type</span></div><span class="rw-select"><button role="presentational" aria-hidden="true" tabindex="-1" title="open dropdown" type="button" aria-disabled="false" aria-label="open dropdown" class="rw-btn rw-btn-select"><span aria-hidden="true" class="rw-i rw-i-caret-down"></span></button></span></div></div></section></section><section class="row form-group mb-xl-3 mb-lg-3 mb-md-0 mb-sm-0 mb-0"><section class="col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><textarea name="notes" id="notes" placeholder="Notes (Optional)" class="col-12 form-control"></textarea></section></section><section class="row form-group"><section class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><input name="name" id="name" placeholder="Name" type="text" class="col-12 form-control"></input></section><section class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><input name="email" id="email" placeholder="Email" type="email" class="col-12 form-control"></input></section><section class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12"><div class="react-tel-input" ><input class="col-12 w-100 form-control" id="phone-form-control" placeholder="Phone" type="tel" value="+1"></input><div class=" flag-dropdown" id="flag-dropdown" tabindex="0" role="button"><div class="selected-flag" title="United States: + 1"><div class="flag us"><div class="arrow"></div></div></div></div></div></section></section><section class="row text-center"><section class="col-12"><button type="submit" class="btn btn-primary">Submit</button></section></section></form></div></div>

                                                        <div class="tab-pane"><div class="card-body"><form class="text-left mb-0"><section class="row"><section class="col-12"></section></section><section class="row form-group mb-xl-3 mb-lg-3 mb-md-0 mb-sm-0 mb-0"><section class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><textarea name="notes" id="notes" placeholder="What can we help you book?" class="col-12 form-control"></textarea></section></section><section class="row form-group"><section class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><input name="name" id="name" placeholder="Name" type="text" class="col-12 form-control"></input></section><section class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><input name="email" id="email" placeholder="Email" type="email" class="col-12 form-control"></input></section><section class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12"><div class="react-tel-input" ><input class="col-12 w-100 form-control" id="phone-form-control" placeholder="Phone" type="tel" value="+1" ></input><div class=" flag-dropdown" id="flag-dropdown" tabindex="0" role="button"><div class="selected-flag" title="United States: + 1"><div class="flag us"><div class="arrow"></div></div></div></div></div></section></section><section class="row text-center"><section class="col-12"><button type="submit" class="btn btn-primary" >Submit</button></section></section></form></div></div>
                                                    </div>    
                                                </div> 
                                            </section>
                                    </section>
                                </section>
                            </div>
                        </div>
                    </header>


                        <div class="carousel logo-container container-fluid py-5" ><div class="horizontalSlider___281Ls carousel__slider carousel__slider--horizontal" aria-live="polite" tabindex="0" role="listbox"><div class="carousel__slider-tray-wrapper carousel__slider-tray-wrap--horizontal"><ul class="sliderTray___-vHFQ sliderAnimation___300FY carousel__slider-tray carousel__slider-tray--horizontal"><li tabindex="-1" aria-selected="false" role="option" class="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--hidden logo-item m-auto col-4 col-sm-4 col-lg-2 d-lg-block" ><div class="slideInner___2mfX9 carousel__inner-slide"><a href="/airline/lufthansa"><img src="https://cdn.leisurex.org/airlines/LH.png" alt="Lufthansa" class="img-fluid logo-img"></img></a></div></li><li tabindex="-1" aria-selected="false" role="option" class="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--hidden logo-item m-auto col-4 col-sm-4 col-lg-2 d-lg-block" ><div class="slideInner___2mfX9 carousel__inner-slide"><a href="/airline/singapore"><img src="https://cdn.leisurex.org/airlines/SQ@2x.png" alt="Singapore Airlines" class="img-fluid logo-img"></img></a></div></li><li tabindex="-1" aria-selected="false" role="option" class="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--hidden logo-item m-auto col-4 col-sm-4 col-lg-2 d-lg-block"><div class="slideInner___2mfX9 carousel__inner-slide"><a href="/airline/cathaypacific"><img src="https://cdn.leisurex.org/airlines/CX@2x.png" alt="Cathay Pacific" class="img-fluid logo-img"></img></a></div></li><li tabindex="-1" aria-selected="false" role="option" class="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--hidden logo-item m-auto col-4 col-sm-4 col-lg-2 d-lg-block" ><div class="slideInner___2mfX9 carousel__inner-slide"><img src="https://cdn.leisurex.org/airlines/LX@2x.png" alt="Swiss International Air Lines" class="img-fluid logo-img"></img></div></li><li tabindex="-1" aria-selected="false" role="option" class="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--hidden logo-item m-auto col-4 col-sm-4 col-lg-2 d-lg-block" ><div class="slideInner___2mfX9 carousel__inner-slide"><a href="/airline/etihad"><img src="https://cdn.leisurex.org/airlines/EY@2x.png" alt="Etihad Airways" class="img-fluid logo-img"></img></a></div></li><li tabindex="-1" aria-selected="false" role="option" class="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--hidden logo-item m-auto col-4 col-sm-4 col-lg-2 d-lg-block" ><div class="slideInner___2mfX9 carousel__inner-slide"><img src="https://cdn.leisurex.org/airlines/BA@2x.png" alt="British Airways" class="img-fluid logo-img"></img></div></li><li tabindex="0" aria-selected="true" role="option" class="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--visible logo-item m-auto col-4 col-sm-4 col-lg-2 d-lg-block" ><div class="slideInner___2mfX9 carousel__inner-slide"><a href="/airline/qatar"><img src="https://cdn.leisurex.org/airlines/QR.png" alt="Qatar Airways" class="img-fluid logo-img"></img></a></div></li><li tabindex="0" aria-selected="true" role="option" class="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--visible logo-item m-auto col-4 col-sm-4 col-lg-2 d-lg-block" ><div class="slideInner___2mfX9 carousel__inner-slide"><img src="https://cdn.leisurex.org/airlines/AA@2x.png" alt="American Airlines" class="img-fluid logo-img"></img></div></li><li tabindex="0" aria-selected="true" role="option" class="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--visible logo-item m-auto col-4 col-sm-4 col-lg-2 d-lg-block" ><div class="slideInner___2mfX9 carousel__inner-slide"><img src="https://cdn.leisurex.org/airlines/TG@2x.png" alt="Thai Airways" class="img-fluid logo-img"></img></div></li><li tabindex="0" aria-selected="true" role="option" class="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--visible logo-item m-auto col-4 col-sm-4 col-lg-2 d-lg-block"><div class="slideInner___2mfX9 carousel__inner-slide"><img src="https://cdn.leisurex.org/airlines/QF@2x.png" alt="Qantas Airways" class="img-fluid logo-img"></img></div></li><li tabindex="0" aria-selected="true" role="option" class="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--visible logo-item m-auto col-4 col-sm-4 col-lg-2 d-lg-block" ><div class="slideInner___2mfX9 carousel__inner-slide"><a href="/airline/ana"><img src="https://cdn.leisurex.org/airlines/NH@2x.png" alt="All Nippon Airways" class="img-fluid logo-img"></img></a></div></li><li tabindex="0" aria-selected="true" role="option" class="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--visible logo-item m-auto col-4 col-sm-4 col-lg-2 d-lg-block" ><div class="slideInner___2mfX9 carousel__inner-slide"><img src="https://cdn.leisurex.org/airlines/DL@2x.png" alt="Delta Air Lines" class="img-fluid logo-img"></img></div></li><li tabindex="-1" aria-selected="false" role="option" class="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--hidden logo-item m-auto col-4 col-sm-4 col-lg-2 d-lg-block" ><div class="slideInner___2mfX9 carousel__inner-slide"><img src="https://cdn.leisurex.org/hotels/marriott.png" alt="Marriott" class="img-fluid logo-img"></img></div></li><li tabindex="-1" aria-selected="false" role="option" class="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--hidden logo-item m-auto col-4 col-sm-4 col-lg-2 d-lg-block" ><div class="slideInner___2mfX9 carousel__inner-slide"><img src="https://cdn.leisurex.org/hotels/hyatt.png" alt="Hyatt" class="img-fluid logo-img"></img></div></li><li tabindex="-1" aria-selected="false" role="option" class="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--hidden logo-item m-auto col-4 col-sm-4 col-lg-2 d-lg-block" ><div class="slideInner___2mfX9 carousel__inner-slide"><img src="https://cdn.leisurex.org/hotels/IHG.png" alt="Intercontinental Hotel Group" class="img-fluid logo-img"></img></div></li><li tabindex="-1" aria-selected="false" role="option" class="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--hidden logo-item m-auto col-4 col-sm-4 col-lg-2 d-lg-block"><div class="slideInner___2mfX9 carousel__inner-slide"><img src="https://cdn.leisurex.org/hotels/hilton.png" alt="Hilton" class="img-fluid logo-img"></img></div></li></ul></div></div></div>

                        <div id="howitworks" class="row info-section inverse mx-auto"><div class="col-lg-9 align-self-center mx-auto"><h3 class="info-heading">How it Works</h3><div class="card-deck"><div class="card" ><div class="card-img-top text-center"><img className="img_1" src="https://www.leisurex.org/submit.svg" alt="Submit" ></img></div><div class="card-body"><h4 class="">Submit Your Travel Itinerary</h4><p class="">Submit your travel plans either by completing our travel request form above, calling us at 1-888-953-4787 or via text, WhatsApp or WeChat at +1 (415) 228-6882 to speak with a travel concierge.</p></div></div><div class="card" ><div class="card-img-top text-center"><img className="img_1" src="https://www.leisurex.org/research.svg" alt="Research" ></img></div><div class="card-body"><h4 class="">We Research Options</h4><p class="">Our experienced travel specialists will sort out even the most complex travel itineraries in order to find the best fit for your travel plans and your budget. We will provide you the best options for your travel plans.</p></div></div><div class="card" ><div class="card-img-top text-center"><img className="img_1" src="https://www.leisurex.org/relax.svg" alt="Relax" ></img></div><div class="card-body"><h4 class="">Get Where You Are Going In Style and Comfort</h4><p class="">Your travel is booked and itinerary is delivered to you. LeisureX is now your personal travel concierge that is available to you 24/7/365. Sit back, relax and enjoy your trip in style and comfort.</p></div></div></div></div></div>

                        <div id="services" class="row info-section inverse mx-auto"><div class="col-lg-9 align-self-center mx-auto"><h3 class="info-heading">We Can Help With...</h3><div class="card-deck"><div class="card" style="box-shadow: none;"><div class="card-img-top text-center"><img src="/flight.svg" alt="Flight"></img></div><div class="card-body"><h4 class="text-center">Flights</h4><p class="text-center">Private, First, Business or Economy</p></div></div><div class="card" style="box-shadow: none;"><div class="card-img-top text-center"><img src="/hotel.svg" alt="Hotel" ></img></div><div class="card-body"><h4 class="text-center">Accommodations</h4><p class="text-center">Hotels, Villas, etc</p></div></div><div class="card" style="box-shadow: none;"><div class="card-img-top text-center"><img src="/car.svg" alt="Car" style="max-width: 75%; height: 250px;"></div><div class="card-body"><h4 class="text-center">Car Service</h4><p class="text-center">Luxury/Supercar Rentals, Transfers, etc</p></div></div></div><div class="card-deck"><div class="card" style="box-shadow: none;"><div class="card-img-top text-center"><img src="/corporate.svg" alt="Corporate" style="max-width: 75%; height: 250px;"></div><div class="card-body"><h4 class="text-center">Corporate Bookings</h4><p class="text-center">Whatever You Need, Whenever You Need It</p></div></div><div class="card" style="box-shadow: none;"><div class="card-img-top text-center"><img src="/group.svg" alt="Group" style="max-width: 75%; height: 250px;"></div><div class="card-body"><h4 class="text-center">Group Bookings</h4><p class="text-center">Events, Weddings, etc</p></div></div><div class="card" style="box-shadow: none;"><div class="card-img-top text-center"><img src="/more.svg" alt="More" style="max-width: 75%; height: 250px;"></div><div class="card-body"><h4 class="text-center">So Much More</h4></div></div></div></div></div>

                </section>


            
        )
    }
}

export default Home
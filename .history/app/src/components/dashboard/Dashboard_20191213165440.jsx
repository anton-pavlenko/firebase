import React, { Component } from "react";
import DatePicker from "react-datepicker";
import NameForm from "./NameForm";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


class Dashboard extends Component {


  constructor(props) {
    super(props);
      this.state = {
          Origin: "",
          Destinetion: "",
          isToggleOn: true,
          startDate: new Date()
    };
  
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }



  handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
        [name]: value
    })
  }

 handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <section>
        <section className="row mt-3 mx-1">
          <section className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
            <div className="mb-3 card">
              <div className="card-header">
                <strong>Your Referrals</strong>
              </div>
              <div className="px-0 py-0 card-body">
                <div className="table-responsive">
                  <table className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto mb-0 table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Client</th>
                      <th>Booking Type</th>
                      <th>Booking Status</th>
                      <th>Client Billed</th>
                      <th>Billing Status</th>
                      <th>Commission</th>
                      <th>Payout Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="text-center">
                      <td colspan="10">No Results</td>
                    </tr>
                  </tbody>
                  </table>
                </div>
              </div>
            </div>

            <ul className="nav nav-tabs">
            <li class="nav-item">
              <a class="active nav-link">Book Flight</a>
            </li>
            </ul>

            <div className="card">
              <div className="tab-content">
                <div className="tab-pane active">
                  <div className="card-body">
                    <form className="text-left">
                      <section class="row">
                        <section class="col-12"></section>
                        </section>
                        <section className="row form-group">
                          <section className="col-12">
                            <div role="group" className="btn-group">
                              <button type="button" class="btn btn-primary" >Round Trip</button>
                              <button type="button" class="btn btn-primary active"> One Way</button>
                            </div>
                          </section>
                        </section>
                        <section className="row form-group mb-xl-3 mb-lg-3 mb-md-0 mb-sm-0 mb-0">
                          <section className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1">
                            <div className="rbt clearfix open col-12 px-0">
                              <div className="rbt-input-hint-container">
                                <input aria-autocomplete="both" aria-expanded="false" aria-haspopup="listbox" autocomplete="nope" placeholder="Origin" role="combobox" type="text" class="rbt-input-main form-control rbt-input " value={this.state.value} onChange={this.handleChange} />
                              <div className="rbt-input-hint">
                              <input className="input_area" aria-hidden="true" readonly="" tabindex="-1" value=""></input>
                              <div className="input_style"></div>
                              </div>
                              </div>
                              <div aria-atomic="true" aria-live="polite" class="sr-only rbt-sr-status" role="status">19 results. Use up and down arrow keys to navigate.</div>
                              <ul class="hide_menu rbt-menu dropdown-menu hide" id="Origin" role="listbox"><li aria-label="(AII) Ali-Sabieh Airport" aria-selected="false" id="rbt-menu-item-0" role="option" class=""><a class="dropdown-item" href="#"><span><span>(AII) Ali-</span><mark class="rbt-highlight-text">Sab</mark><span>ieh Airport</span></span></a></li><li aria-label="(ABB) Asaba International Airport" aria-selected="false" id="rbt-menu-item-1" role="option" class=""><a class="dropdown-item" href="#"><span><span>(ABB) A</span><mark class="rbt-highlight-text">sab</mark><span>a International Airport</span></span></a></li><li aria-label="(ASA) Assab International Airport" aria-selected="false" id="rbt-menu-item-2" role="option" class=""><a class="dropdown-item" href="#"><span><span>(ASA) As</span><mark class="rbt-highlight-text">sab</mark><span> International Airport</span></span></a></li><li aria-label="(SAB) Juancho E. Yrausquin Airport" aria-selected="false" id="rbt-menu-item-3" role="option" class=""><a class="dropdown-item" href="#"><span><span>(</span><mark class="rbt-highlight-text">SAB</mark><span>) Juancho E. Yrausquin Airport</span></span></a></li><li aria-label="(KRG) Karasabai Airport" aria-selected="false" id="rbt-menu-item-4" role="option" class=""><a class="dropdown-item" href="#"><span><span>(KRG) Kara</span><mark class="rbt-highlight-text">sab</mark><span>ai Airport</span></span></a></li><li aria-label="(ZKB) Kasaba Bay Airport" aria-selected="false" id="rbt-menu-item-5" role="option" class=""><a class="dropdown-item" href="#"><span><span>(ZKB) Ka</span><mark class="rbt-highlight-text">sab</mark><span>a Bay Airport</span></span></a></li><li aria-label="(XKS) Kasabonika Airport" aria-selected="false" id="rbt-menu-item-6" role="option" class=""><a class="dropdown-item" href="#"><span><span>(XKS) Ka</span><mark class="rbt-highlight-text">sab</mark><span>onika Airport</span></span></a></li><li aria-label="(KHS) Khasab Air Base" aria-selected="false" id="rbt-menu-item-7" role="option" class=""><a class="dropdown-item" href="#"><span><span>(KHS) Kha</span><mark class="rbt-highlight-text">sab</mark><span> Air Base</span></span></a></li><li aria-label="(JBQ) La Isabela International Airport" aria-selected="false" id="rbt-menu-item-8" role="option" class=""><a class="dropdown-item" href="#"><span><span>(JBQ) La I</span><mark class="rbt-highlight-text">sab</mark><span>ela International Airport</span></span></a></li><li aria-label="(LSO) Les Sables-d'Olonne Talmont Airport" aria-selected="false" id="rbt-menu-item-9" role="option" class=""><a class="dropdown-item" href="#"><span><span>(LSO) Les </span><mark class="rbt-highlight-text">Sab</mark><span>les-d'Olonne Talmont Airport</span></span></a></li><li aria-label="(YBX) Lourdes de Blanc Sablon Airport" aria-selected="false" id="rbt-menu-item-10" role="option" class=""><a class="dropdown-item" href="#"><span><span>(YBX) Lourdes de Blanc </span><mark class="rbt-highlight-text">Sab</mark><span>lon Airport</span></span></a></li><li aria-label="(PFQ) Parsabade Moghan Airport" aria-selected="false" id="rbt-menu-item-11" role="option" class=""><a class="dropdown-item" href="#"><span><span>(PFQ) Par</span><mark class="rbt-highlight-text">sab</mark><span>ade Moghan Airport</span></span></a></li><li aria-label="(QSA) Sabadell Airport" aria-selected="false" id="rbt-menu-item-12" role="option" class=""><a class="dropdown-item" href="#"><span><span>(QSA) </span><mark class="rbt-highlight-text">Sab</mark><span>adell Airport</span></span></a></li><li aria-label="(SNX) Sabana de Mar Airport" aria-selected="false" id="rbt-menu-item-13" role="option" class=""><a class="dropdown-item" href="#"><span><span>(SNX) </span><mark class="rbt-highlight-text">Sab</mark><span>ana de Mar Airport</span></span></a></li><li aria-label="(SEB) Sabha Airport" aria-selected="false" id="rbt-menu-item-14" role="option" class=""><a class="dropdown-item" href="#"><span><span>(SEB) </span><mark class="rbt-highlight-text">Sab</mark><span>ha Airport</span></span></a></li><li aria-label="(GSS) Sabi Sabi Airport" aria-selected="false" id="rbt-menu-item-15" role="option" class=""><a class="dropdown-item" href="#"><span><span>(GSS) </span><mark class="rbt-highlight-text">Sab</mark><span>i </span><mark class="rbt-highlight-text">Sab</mark><span>i Airport</span></span></a></li><li aria-label="(SAW) Sabiha Gokcen International Airport" aria-selected="false" id="rbt-menu-item-16" role="option" class=""><a class="dropdown-item" href="#"><span><span>(SAW) </span><mark class="rbt-highlight-text">Sab</mark><span>iha Gokcen International Airport</span></span></a></li><li aria-label="(AFZ) Sabzevar National Airport" aria-selected="false" id="rbt-menu-item-17" role="option" class=""><a class="dropdown-item" href="#"><span><span>(AFZ) </span><mark class="rbt-highlight-text">Sab</mark><span>zevar National Airport</span></span></a></li><li aria-label="(ULX) Ulusaba Airport" aria-selected="false" id="rbt-menu-item-18" role="option" class=""><a class="dropdown-item" href="#"><span><span>(ULX) Ulu</span><mark class="rbt-highlight-text">sab</mark><span>a Airport</span></span></a></li></ul>
                              <div aria-atomic="true" aria-live="polite" class="sr-only rbt-sr-status" role="status">0 selections</div>
                            </div>
                          </section>

                          <section className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1">
                            <div className="rbt clearfix open col-12 px-0">
                              <div className="rbt-input-hint-container">
                                <input aria-autocomplete="both" aria-expanded="false" aria-haspopup="listbox" autocomplete="nope" placeholder="Destination" role="combobox" type="text" class="rbt-input-main form-control rbt-input" value={this.state.value} onChange={this.handleChange} />
                              <div className="rbt-input-hint">
                              <input className="input_area" aria-hidden="true" readonly="" tabindex="-1" value=""></input>
                              <div className="input_style"></div>
                              </div>
                              </div>
                              <div aria-atomic="true" aria-live="polite" class="sr-only rbt-sr-status" role="status">0 selections</div>
                            </div>
                          </section>

                        </section>

                        <section className="row form-group mb-xl-3 mb-lg-3 mb-md-0 mb-sm-0 mb-0">
                          <section className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1">
                            <div id="Depart Date" tabIndex="-1" className="col-12 px-0 rw-datetime-picker rw-widget">
                              <div className="rw-widget-picker rw-widget-container">
                              <input id="Depart Date_input" role="combobox" placeholder="Depart Date" aria-haspopup="true" aria-expanded="false" aria-owns="" type="text" tabindex="0" autocomplete="off" class="rw-widget-input rw-input" value=""></input>
                                <span className="rw-select rw-select-bordered">
                                  <button tabindex="-1" title="Select date" type="button" aria-label="Select date" className="rw-btn rw-btn-select">
                                  <span aria-hidden="true" class="rw-i rw-i-calendar">
                                                
                                  </span>
                                  </button>
                                </span>
                              </div>
                             <div class="rw-calendar-popup rw-popup-container rw-popup-transition-exited" ><div class="rw-popup-transition"><div id="Depart Date_date" aria-hidden="false" aria-live="polite" aria-labelledby="Depart Date_input" role="group" aria-activedescendant="Depart Date_calendar_active_cell" tabindex="-1" class="rw-popup rw-calendar rw-widget-container rw-widget">() => {
  const [startDate, setStartDate] = useState(null);
   
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      minDate={new Date()}
      maxDate={addMonths(new Date(), 5)}
      showDisabledMonthNavigation
    />
  
};</div></div></div>
                            </div>
                          </section>
                          <section class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><div id="Departure Time (Optional)_input" role="combobox" aria-owns="Departure Time (Optional)_listbox" aria-expanded="false" aria-haspopup="true" aria-busy="false" aria-live="polite" aria-autocomplete="list" aria-disabled="false" aria-readonly="false" tabindex="0" class="col-12 px-0 rw-dropdown-list rw-widget"><select class="form-control" id="sel1" name="sellist1">
                                          <option  value="" selected disabled>Deprature Time (Optional)</option>
                                          <option>No Preference</option>
                                          <option>Morning</option>
                                          <option>Afternoon</option>
                                          <option>Evening</option>
                                          </select>
                                          </div></section>

                          <section class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><div id="# of Depart Stops? (Optional)_input" role="combobox" aria-owns="# of Depart Stops? (Optional)_listbox" aria-expanded="false" aria-haspopup="true" aria-busy="false" aria-live="polite" aria-autocomplete="list" aria-disabled="false" aria-readonly="false" tabindex="0" class="col-12 px-0 rw-dropdown-list rw-widget"><select class="form-control" id="sel1" name="sellist1">
                                          <option  value="" selected disabled># of Depart Stops? (Optional)</option>
                                          <option>No Preference</option>
                                          <option>Non-Stop</option>
                                          <option>1 Stop</option>
                                          <option>2+ Stop</option>
                                        </select></div></section>

                          <section class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><div id="Depart Flexible? (Optional)_input" role="combobox" aria-owns="Depart Flexible? (Optional)_listbox" aria-expanded="false" aria-haspopup="true" aria-busy="false" aria-live="polite" aria-autocomplete="list" aria-disabled="false" aria-readonly="false" tabindex="0" class="col-12 px-0 rw-dropdown-list rw-widget"><select class="form-control" id="sel1" name="sellist1">
                                          <option  value="" selected disabled>Deprature Flexible (Optional)</option>
                                          <option>No</option>
                                          <option>+/-1 Days</option>
                                          <option>+/-2 Days</option>
                                          <option>+/-3 Days</option>
                                          <option>+/-4 Days</option>
                                          <option>+/-5 Days</option>
                                          <option>+/-6 Days</option>
                                          <option>+/-7 Days</option>
                                          </select>
                                          </div></section>

                          <section class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mt-xl-3 mt-lg-3 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><div id="Return Date" tabindex="-1" class="col-12 px-0 rw-datetime-picker rw-widget"><div class="rw-widget-picker rw-widget-container"><input id="Return Date_input" role="combobox" placeholder="Return Date" aria-haspopup="true" aria-expanded="false" aria-owns="" type="text" tabindex="0" autocomplete="off" class="rw-widget-input rw-input" value=""></input><span class="rw-select rw-select-bordered"><button tabindex="-1" title="Select date" type="button" aria-label="Select date" class="rw-btn rw-btn-select"><span aria-hidden="true" class="rw-i rw-i-calendar"></span></button></span></div></div></section>

                          <section class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mt-xl-3 mt-lg-3 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><div id="Return Time (Optional)_input" role="combobox" aria-owns="Return Time (Optional)_listbox" aria-expanded="false" aria-haspopup="true" aria-busy="false" aria-live="polite" aria-autocomplete="list" aria-disabled="false" aria-readonly="false" tabindex="0" class="col-12 px-0 rw-dropdown-list rw-widget"><select class="form-control" id="sel1" name="sellist1">
                                          <option  value="" selected disabled>Return Time (Optional)</option>
                                          <option>No Preference</option>
                                          <option>Morning</option>
                                          <option>Afternoon</option>
                                          <option>Evening</option>
                                        </select></div></section>

                          <section class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mt-xl-3 mt-lg-3 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><div id="# of Return Stops? (Optional)_input" role="combobox" aria-owns="# of Return Stops? (Optional)_listbox" aria-expanded="false" aria-haspopup="true" aria-busy="false" aria-live="polite" aria-autocomplete="list" aria-disabled="false" aria-readonly="false" tabindex="0" class="col-12 px-0 rw-dropdown-list rw-widget"><select class="form-control" id="sel1" name="sellist1">
                                          <option  value="" selected disabled># of Return Stops? (Optional)</option>
                                          <option>No Preference</option>
                                          <option>Non-Stop</option>
                                          <option>1 Stop</option>
                                          <option>2+ Stop</option>
                                        </select></div></section>

                          <section class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mt-xl-3 mt-lg-3 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><div id="Return Flexible? (Optional)_input" role="combobox" aria-owns="Return Flexible? (Optional)_listbox" aria-expanded="false" aria-haspopup="true" aria-busy="false" aria-live="polite" aria-autocomplete="list" aria-disabled="false" aria-readonly="false" tabindex="0" class="col-12 px-0 rw-dropdown-list rw-widget"><div class="rw-widget-input rw-widget-picker rw-widget-container"><select class="form-control" id="sel1" name="sellist1">
                                          <option  value="" selected disabled>Deprature Flexible (Optional)</option>
                                          <option>No</option>
                                          <option>+/-1 Days</option>
                                          <option>+/-2 Days</option>
                                          <option>+/-3 Days</option>
                                          <option>+/-4 Days</option>
                                          <option>+/-5 Days</option>
                                          <option>+/-6 Days</option>
                                          <option>+/-7 Days</option>
                                          </select></div></div></section>



                        </section>

                        <section class="row form-group mb-xl-3 mb-lg-3 mb-md-0 mb-sm-0 mb-0"><section class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><div id="Passengers_input" role="combobox" aria-owns="Passengers_listbox" aria-expanded="false" aria-haspopup="true" aria-busy="false" aria-live="polite" aria-autocomplete="list" aria-disabled="false" aria-readonly="false" tabindex="0" class="col-12 px-0 rw-dropdown-list rw-widget"><select class="form-control" id="sel1" name="sellist1">
                                          <option  value="" selected disabled>Number Of Passingers</option>
                                          <option>No</option>
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                          <option>6</option>
                                          <option>7</option>
                                          <option>8</option>
                                          <option>9</option>
                                          <option>10</option>
                                          <option>11</option>
                                          <option>12</option>
                                          <option>13</option>
                                          <option>14</option>
                                          <option>15</option>
                                          <option>16</option>
                                          <option>17</option>
                                          <option>18</option>
                                          <option>19</option>
                                          <option>20</option>
                                          </select>
                                          </div></section>
                                          <section class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><div id="Class_input" role="combobox" aria-owns="Class_listbox" aria-expanded="false" aria-haspopup="true" aria-busy="false" aria-live="polite" aria-autocomplete="list" aria-disabled="false" aria-readonly="false" tabindex="0" class="col-12 px-0 rw-dropdown-list rw-widget" onChange={this.change} value={this.state.value}><select class="form-control" id="sel1" name="sellist1">
                                          <option  value="" selected disabled>Class</option>
                                          <option>Economy</option>
                                          <option>Bussines</option>
                                          <option>First</option>
                                        </select></div></section></section>

                        <section class="row form-group"><section class="col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><textarea name="notes" id="notes" placeholder="Notes (Optional)" class="col-12 form-control"></textarea></section></section>

                        <section class="row form-group"><section class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><input name="name" id="name" placeholder="Client Name" type="text" class="col-12 form-control"></input></section><section class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"><input name="email" id="email" placeholder="Client Email" type="email" class="col-12 form-control"></input></section><section class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1"> <PhoneInput
  country={'us'}
  value={this.state.phone}
  onChange={phone => this.setState({ phone })}
/></section><section class="d-flex align-items-center col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12"><div class="col-12 custom-checkbox custom-control"><input type="checkbox" name="contactClientFlight" id="contactClientFlight" class="custom-control-input"></input><label class="custom-control-label" for="contactClientFlight">Contact Client Directly?</label></div></section></section>

                        <section class="row text-center"><section class="col-12"><button type="submit" class="btn btn-primary">Submit</button></section></section>
                    </form>
                  </div>
                </div>
              </div>
            </div>

          </section>
          <section class="col-2 d-none d-sm-none d-md-none d-lg-block d-xl-block"><div class="mb-3 card"><div class="card-header"><strong>Sales Stats</strong></div><div class="px-3 pt-2 pb-0 card-body"><ul class="pl-4 my-0"><li><p class="my-0">Bookings: 0</p></li><li><p class="my-0">Revenue: $0</p></li><li><p class="my-0 mb-2">Commission: $0</p></li></ul></div></div><div class="card"><div class="card-header"><strong>Important Links</strong></div><div class="px-3 pt-2 pb-0 card-body"><p class="my-0"><a href="https://docsend.com/view/q9fspwa" target="_blank" rel="noopener noreferrer">Partner Deck (For Affiliates)</a></p><p class="my-0"><a href="https://docsend.com/view/tm2ukzs" target="_blank" rel="noopener noreferrer">Sales Deck (For Clients)</a></p><p class="my-0 text-primary">My Booking Portal</p><p class="my-0 mb-2"><a href="mailto:help@leisurex.org">Email Team LeisureX</a></p></div></div></section>
        </section>
      </section>
    );
  }
}



export default Dashboard;

// <div>  {this.state.on, <form className="col s12">
//             <div className="row">
//                     <div className="input-field col s6">
//                         <input class="validate" id="origin" placeholder="Origin" type="text"></input>

//                     </div>
//                     <div className="input-field col s6">
//                         <input class="validate" id="origin" placeholder="Destination" type="text"></input>

//                     </div>
//                     <div className="contDateSelect">
//                     <div className="contDate">
//                     <div className="input-field   s2">
//                         <DatePicker selected={this.state.startDate}
//                             onSelect={this.handleSelect}
//                             onChange={this.handleChange}
//                             minDate={new Date()}
//                             placeholderText="Depart Date" />
//                     </div>
//                     <div className="input-field   s2 " >
//                         <DatePicker selected={this.state.startDate}
//                             onSelect={this.handleSelect}
//                             onChange={this.handleChange}
//                             minDate={new Date()}
//                             placeholderText="Return Date" />
//                     </div>
//                     </div>
//                     <NameForm />
//                     </div>
//                 </div>

//             </form>
//         }

//         {this.state.on && <form className="col s12">
//             <div className="row">
//                     <div className="input-field col s6">
//                         <input class="validate" id="origin" placeholder="Origin" type="text"></input>
//                         <input class="validate" id="origin" placeholder="Origin" type="text"></input>

//                     </div>
//                 </div>

//             </form>
//         }

//         <button onClick={
//             this.toggle
//         }
//             className="show_round">Round Trip/One Way</button>
//     </div>
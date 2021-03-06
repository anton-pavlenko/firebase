import React, { Component } from "react";
import DatePicker from "react-datepicker";
import NameForm from "./NameForm";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';


// const techCompanies = [
//     { label: "Apple", value: 1 },
//     { label: "Facebook", value: 2 },
//     { label: "Netflix", value: 3 },
//     { label: "Tesla", value: 4 },
//     { label: "Amazon", value: 5 },
//     { label: "Alphabet", value: 6 },
// ];

// const App = () => (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-4"></div>
//         <div className="col-md-4">
//           <Select options={ techCompanies } />
//         </div>
//         <div className="col-md-4"></div>
//       </div>
//     </div>
// );

class Dashboard extends Component {
  state = {
    on: Boolean,
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({ startDate: date });
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    return (
      <div class="table-responsive-sm">
        <section class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-9">
                        <div className="mb-3 card">
                            <div className="card-header">
                                <strong>Team Performance</strong>
                            </div>
                            <div className="px-0 py-0 card-body">
                                <div className="table-responsive">
                                    <table className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto mb-0 table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>Client			Client Billed	Billing Status	Commission	Payout Status</th>
                                                <th>Booking Type</th>
                                                <th>Booking Status</th>
                                                <th>Bookings</th>
                                                <th>Revenue to Date</th>
                                                <th>Your Commission to Date</th>
                                            </tr>
                                        </thead>
                                      
                                        <tbody>
                                            <tr className="text-center">
                                                <td colSpan="12">No Results</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>

        <form>
          
          <p>
            <button
              class="btn btn-dark"
              type="button"
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Round Trip
            </button>
            <button
              class="btn btn-dark"
              type="button"
              data-toggle="collapse"
              data-target="#collapseExample_1"
              aria-expanded="false"
              aria-controls="collapseExample_1"
            >
              One Way
            </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              <div className="form-row">
                <div className="col">
                  <input
                    class="form-control"
                    placeholder="Origin"
                    type="text"
                  ></input>
                  
                </div>
                <div className="form-group col-md-6">
                  <input
                    class="form-control"
                    placeholder="Destination"
                    type="text"
                  ></input>
                </div>
                
              </div>
           
              <div className="contDateSelect">
                <div className="contDate">
                  <div className="input-field">
                    <DatePicker className="col-md-12"
                      selected={this.state.startDate}
                      onSelect={this.handleSelect}
                      onChange={this.handleChange}
                      minDate={new Date()}
                      placeholderText="Depart Date"
                    />
                    <select className="custom-select col-md-4">
                      <option selected disabled>Departure Time (Optional)</option>
                      <option value="1">No Preference</option>
                      <option value="2">Morning</option>
                      <option value="3">Afternoon</option>
                      <option value="3">Evening</option>
                    </select>
                    <select className="custom-select col-md-3">
                      <option selected disabled># of Depart Stops? (Optional)</option>
                      <option value="1">No Preference</option>
                      <option value="2">Non-Stop</option>
                      <option value="3">1 Stop</option>
                      <option value="3">2+ Stop</option>
                    </select>
                    <select className="custom-select col-md-3">
                      <option selected disabled>Depart Flexible? (Optional)</option>
                      <option value="1">No</option>
                      <option value="2">+/-1 Days</option>
                      <option value="2">+/-2 Days</option>
                      <option value="2">+/-3 Days</option>
                      <option value="2">+/-4 Days</option>
                      <option value="2">+/-5 Days</option>
                      <option value="2">+/-6 Days</option>
                      <option value="2">+/-7 Days</option>
                    </select>
                    
                  </div>
                  
                  <div className="input-field">
                    <DatePicker className="col-md-12"
                      selected={this.state.startDate}
                      onSelect={this.handleSelect}
                      onChange={this.handleChange}
                      minDate={new Date()}
                      placeholderText="Return Date"
                    />
                      <select className="custom-select col-md-4">
                      <option selected disabled>Return Time (Optional)</option>
                      <option value="1">No Preference</option>
                      <option value="2">Morning</option>
                      <option value="3">Afternoon</option>
                      <option value="3">Evening</option>
                    </select>
                    <select className="custom-select col-md-3">
                      <option selected disabled># of Return Stops? (Optional)</option>
                      <option value="1">No Preference</option>
                      <option value="2">Non-Stop</option>
                      <option value="3">1 Stop</option>
                      <option value="3">2+ Stop</option>
                    </select>
                    <select className="custom-select col-md-3">
                      <option selected disabled>Return Flexible? (Optional)</option>
                      <option value="1">No</option>
                      <option value="2">+/-1 Days</option>
                      <option value="2">+/-2 Days</option>
                      <option value="2">+/-3 Days</option>
                      <option value="2">+/-4 Days</option>
                      <option value="2">+/-5 Days</option>
                      <option value="2">+/-6 Days</option>
                      <option value="2">+/-7 Days</option>
                    </select>
                    <select className="custom-select col-md-6">
                      <option selected disabled>Number of Passengers</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="3">4</option>
                      <option value="3">5</option>
                      <option value="3">6</option>
                      <option value="3">7</option>
                      <option value="3">8</option>
                      <option value="3">9</option>
                      <option value="3">10</option>
                      <option value="3">11</option>
                      <option value="3">12</option>
                      <option value="3">13</option>
                      <option value="3">14</option>
                      <option value="3">15</option>
                      <option value="3">16</option>
                      <option value="3">17</option>
                      <option value="3">18</option>
                      <option value="3">19</option>
                      <option value="3">20</option>
                    </select>
                    <select className="custom-select col-md-6">
                      <option selected disabled>Class</option>
                      <option value="1">Economy</option>
                      <option value="2">Bussines</option>
                      <option value="3">First</option>
                    </select>
                    <div class="form-group">
                        
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Notes (Optional)"></textarea>
                       </div>
                       <div class="form-row">
    <div class="form-group col-md-3">
      
      <input type="name" class="form-control" id="inputName" placeholder="Client Name"></input>
    </div>
    <div class="form-group col-md-4">
      
    <input type="email" class="form-control" id="inputEmail" placeholder="Client Email"></input>
    </div>
    <IntlTelInput
  containerClassName="intl-tel-input"
  inputClassName="form-control"
/>
    <div class="form-group col-md-2">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"></input>
      <label class="form-check-label" for="gridCheck">
        Contact Client Directly
      </label>
    </div>
  </div>
  </div>
 
  <section class="row text-center"><section class="col-12"><button type="submit" class="btn btn-primary">Submit</button></section></section>
                  </div>
                </div>
              </div>

              
            </div>
          </div>

          <div class="collapse" id="collapseExample_1">
            <div class="card card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </div>
        </form>
      </div>
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

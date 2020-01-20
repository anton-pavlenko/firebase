import React, {Component} from "react";
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
        this.setState({startDate: date});
    };

    toggle = () => {
        this.setState({
            on: !this.state.on
        });
    };

    render() {
        return (<div class="table-responsive-sm">
            <table class="table ">
                <thead>
                    <tr>
                        <th colSpan="12">Your Referrals</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Client</td>
                        <td>Booking Type</td>
                        <td>Booking Status</td>
                        <td>Client Billed</td>
                        <td>Billing Status</td>
                        <td>Commission</td>
                        <td>Payout Status</td>
                    </tr>
                    <tr className="end_content_table">
                        <td className="text-td" colSpan="12">
                            No Results
                        </td>
                    </tr>
                </tbody>
            </table>

            <form>
                <section class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3">
                    <div class="mb-3 card">
                        <div class="card-header">
                            <strong>Team Stats</strong>
                        </div>
                        <div class="px-3 pt-2 pb-0 card-body">
                            <ul class="pl-4 my-0">
                                <li>
                                    <p class="my-0">Bookings: 0</p>
                                </li>
                                <li>
                                    <p class="my-0">Revenue: $0</p>
                                </li>
                                <li>
                                    <p class="my-0 mb-2">Commission: $0</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mb-3 card">
                        <div class="card-header">
                            <strong>Team Members</strong>
                        </div>
                        <div class="px-0 pt-2 pb-0 card-body">
                            <ul class="col-12 mt-0 mb-2">
                                <li class="row">
                                    <section class="my-0 col-12 text-center">You have no Team Members, invite your network and increase your earnings.<br></section>
                                    </li>
                                    <li class="row">
                                        <section class="my-0 col-12 text-center">
                                            <br>
                                                <p class="my-0 text-primary" style="cursor: pointer;">Invite Team Member</p>
                                            </section>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <p>
                            <button aria-controls="collapseExample" aria-expanded="false" class="btn btn-dark" data-target="#collapseExample" data-toggle="collapse" type="button">
                                Round Trip
                            </button>
                            <button aria-controls="collapseExample_1" aria-expanded="false" class="btn btn-dark" data-target="#collapseExample_1" data-toggle="collapse" type="button">
                                One Way
                            </button>
                        </p>
                        <div class="collapse" id="collapseExample">
                            <div class="card card-body">
                                <div className="form-row">
                                    <div className="col">
                                        <input class="form-control" placeholder="Origin" type="text"></input>

                                    </div>
                                    <div className="form-group col-md-6">
                                        <input class="form-control" placeholder="Destination" type="text"></input>
                                    </div>

                                </div>

                                <div className="contDateSelect">
                                    <div className="contDate">
                                        <div className="input-field">
                                            <DatePicker className="col-md-12"
                                                selected={
                                                    this.state.startDate
                                                }
                                                onSelect={
                                                    this.handleSelect
                                                }
                                                onChange={
                                                    this.handleChange
                                                }
                                                minDate={
                                                    new Date()
                                                }
                                                placeholderText="Depart Date"/>
                                            <select className="custom-select col-md-4">
                                                <option disabled selected>Departure Time (Optional)</option>
                                                <option value="1">No Preference</option>
                                                <option value="2">Morning</option>
                                                <option value="3">Afternoon</option>
                                                <option value="3">Evening</option>
                                            </select>
                                            <select className="custom-select col-md-3">
                                                <option disabled selected># of Depart Stops? (Optional)</option>
                                                <option value="1">No Preference</option>
                                                <option value="2">Non-Stop</option>
                                                <option value="3">1 Stop</option>
                                                <option value="3">2+ Stop</option>
                                            </select>
                                            <select className="custom-select col-md-3">
                                                <option disabled selected>Depart Flexible? (Optional)</option>
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
                                                selected={
                                                    this.state.startDate
                                                }
                                                onSelect={
                                                    this.handleSelect
                                                }
                                                onChange={
                                                    this.handleChange
                                                }
                                                minDate={
                                                    new Date()
                                                }
                                                placeholderText="Return Date"/>
                                            <select className="custom-select col-md-4">
                                                <option disabled selected>Return Time (Optional)</option>
                                                <option value="1">No Preference</option>
                                                <option value="2">Morning</option>
                                                <option value="3">Afternoon</option>
                                                <option value="3">Evening</option>
                                            </select>
                                            <select className="custom-select col-md-3">
                                                <option disabled selected># of Return Stops? (Optional)</option>
                                                <option value="1">No Preference</option>
                                                <option value="2">Non-Stop</option>
                                                <option value="3">1 Stop</option>
                                                <option value="3">2+ Stop</option>
                                            </select>
                                            <select className="custom-select col-md-3">
                                                <option disabled selected>Return Flexible? (Optional)</option>
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
                                                <option disabled selected>Number of Passengers</option>
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
                                                <option disabled selected>Class</option>
                                                <option value="1">Economy</option>
                                                <option value="2">Bussines</option>
                                                <option value="3">First</option>
                                            </select>
                                            <div class="form-group">

                                                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Notes (Optional)" rows="3"></textarea>
                                            </div>
                                            <div class="form-row">
                                                <div class="form-group col-md-3">

                                                    <input class="form-control" id="inputName" placeholder="Client Name" type="name"></input>
                                                </div>
                                                <div class="form-group col-md-4">

                                                    <input class="form-control" id="inputEmail" placeholder="Client Email" type="email"></input>
                                                </div>
                                                <IntlTelInput containerClassName="intl-tel-input" inputClassName="form-control"/>
                                                <div class="form-group col-md-2">
                                                    <div class="form-check">
                                                        <input class="form-check-input" id="gridCheck" type="checkbox"></input>
                                                        <label class="form-check-label" for="gridCheck">
                                                            Contact Client Directly
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <section class="row text-center">
                                                <section class="col-12">
                                                    <button class="btn btn-primary" type="submit">Submit</button>
                                                </section>
                                            </section>
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
                
                //
                <div> {this.state.on, <form className="col s12">
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

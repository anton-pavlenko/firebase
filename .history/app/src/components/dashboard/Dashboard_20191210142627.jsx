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
                              <button type="button" class="btn btn-primary active">Round Trip</button>
                              <button type="button" class="btn btn-primary">One Way</button>
                            </div>
                          </section>
                        </section>
                        <section className="row form-group mb-xl-3 mb-lg-3 mb-md-0 mb-sm-0 mb-0"
                    </form>
                  </div>
                </div>
              </div>
            </div>

          </section>
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
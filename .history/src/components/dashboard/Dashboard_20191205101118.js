import React, { Component } from "react";
import DatePicker from "react-datepicker";
import NameForm from "./NameForm";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";


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
                    <select class="custom-select>
                      <option selected disabled>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
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

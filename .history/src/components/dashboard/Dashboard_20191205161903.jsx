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
  

  render() {
    return (
      <section>
        <section className="row mt-3 mx-1">
          <section className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
          <div class="mb-3 card"><div class="card-header"><strong>Your Referrals</strong></div><div class="px-0 py-0 card-body"><div class="table-responsive"><table class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto mb-0 table table-striped table-hover"><thead><tr><th>Client</th><th>Booking Type</th><th>Booking Status</th><th>Client Billed</th><th>Billing Status</th><th>Commission</th><th>Payout Status</th></tr></thead><tbody><tr class="text-center"><td colspan="10">No Results</td></tr></tbody></table></div></div></div>
          <ul className="nav nav-tabs">
            <li class="nav-item"><a class="active nav-link">Book Flight</a></li>
            <li class="nav-item"><a class="nav-link">Book Hotel</a></li>
            <li class="nav-item"><a class="nav-link">Custom Booking</a></li>
          </ul>
          <div className="card">
            <div className="tab-content">
              <div className="tab-pane active">
                <div className="card-body">
                  <form className="text-left">
                  <section class="row">
                    <section class="col-12">
                      </section>
                      </section>
                      <section class="row form-group"><section class="col-12"><div role="group" class="btn-group"><button type="button" class="btn btn-primary active">Round Trip</button><button type="button" class="btn btn-primary">One Way</button></div></section></section>

                        <section className="row form-group mb-xl-3 mb-lg-3 mb-md-0 mb-sm-0 mb-0">
                          <section className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1">
                            <div className="rbt-input-hint-container">
                            <input aria-autocomplete="both" aria-expanded="false" aria-haspopup="listbox" autocomplete="nope" placeholder="Origin" role="combobox" type="text" class="rbt-input-main form-control rbt-input " value=""></input>
                            
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
    );
  }
}

export default Dashboard;


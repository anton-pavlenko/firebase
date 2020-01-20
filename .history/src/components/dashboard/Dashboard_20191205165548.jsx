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
                  <section class="row"><section class="col-12"></section></section>

                  <div class="container"><h2>Example tab 2 (using standard nav-tabs)</h2></div>

<div id="exTab2" class="container">	
<ul class="nav nav-tabs">
			<li class="active">
        <a  href="#1" data-toggle="tab">Overview</a>
			</li>
			<li><a href="#2" data-toggle="tab">Without clearfix</a>
			</li>
			<li><a href="#3" data-toggle="tab">Solution</a>
			</li>
		</ul>

			<div class="tab-content ">
			  <div class="tab-pane active" id="1">
          <h3>Standard tab panel created on bootstrap using nav-tabs</h3>
				</div>
				<div class="tab-pane" id="2">
          <h3>Notice the gap between the content and tab after applying a background color</h3>
				</div>
        <div class="tab-pane" id="3">
          <h3>add clearfix to tab-content (see the css)</h3>
				</div>
			</div>
  </div>

<hr></hr>


                  
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


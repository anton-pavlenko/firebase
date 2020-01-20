import React, { Component } from "react";
import DatePicker from "react-datepicker";
import NameForm from "./NameForm";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';



class Admin_Dashboard extends React.Component{



    render(){

        return(

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
                </section>

<section class="col-2 d-none d-sm-none d-md-none d-lg-block d-xl-block"><div class="dropdown show">
  <a class="btn btn-secondary dropdown-toggle col-12"  href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Users
  </a>

  <div class="dropdown-menu col-12"  aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">User: 1</a>
    <a class="dropdown-item" href="#">User: 2</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div></section></section></section>

        )
    }
}

export default Admin_Dashboard
import React, { Component } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: "",
            LastName: ""
        }
      
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(e) {
        // this.setState({value: event.target.value});
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
      }


    render() {



        return(

            <section>
                <section className="row my-3 mx-1">
                    <section className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2 mb-sm-2 mb-md-2">
                        <div className="card">
                            <div className="card-header">
                                <strong>Update Profile</strong>
                            </div>
                            <div className="card-body"><form className="text-left"><section className="row"><section className="col-12"></section></section><section className="row form-group mb-xl-1 mb-lg-1 mb-md-1 mb-sm-1 mb-1"><section className="mt-1 col-12"><div className="mb-0 row form-group"><label for="firstName" className="col-sm-4 col-form-label">First Name</label><div class="col-sm-8"><input name="firstName" id="firstName" placeholder="First Name" type="text" class="col-12 form-control"  value={this.state.value} onChange={this.handleChange} /></div></div></section><section className="mt-1 col-12"><div className="mb-0 row form-group"><label for="lastName" className="col-sm-4 col-form-label">Last Name</label><div className="col-sm-8"><input name="lastName" id="lastName" placeholder="Last Name" type="text" className="col-12 form-control" value="Somerhalder"value={this.state.value} onChange={this.handleChange} /></div></div></section><section className="mt-1 col-12"><div className="mb-0 row form-group"><label for="email" className="col-sm-4 col-form-label">Email</label><div className="col-sm-8"><input name="email" id="email" placeholder="Email" type="email" className="col-12 form-control" value="gary@copilottravel.com" value={this.state.value} onChange={this.handleChange} /></div></div></section><section className="mt-1 col-12"><div className="mb-0 row form-group"><label for="phone" className="col-sm-4 col-form-label">Phone</label><div className="col-sm-8"><div className="react-tel-input"><PhoneInput
  country={'us'}
  value={this.state.phone}
  onChange={phone => this.setState({ phone })}
  value={this.state.value} onChange={this.handleChange} />
<div className=" flag-dropdown" id="flag-dropdown" tabindex="0" role="button"><div className="selected-flag" title="United States: + 1615"><div className="flag us"><div className="arrow"></div></div></div></div></div></div></div></section><section class="mt-1 col-12"><div className="mb-0 row form-group"><label for="displayName" className="col-sm-4 col-form-label">Display Name</label><div className="col-sm-8"><input name="displayName" id="displayName" placeholder="Display Name" type="text" className="col-12 form-control" value="COPILOT TRAVEL" value={this.state.value} onChange={this.handleChange} /><small className="form-text text-muted">This is the name that will display on your booking portal.</small></div></div></section><section className="mt-1 col-12"><div className="mb-0 row form-group"><label for="username" className="col-sm-4 col-form-label">Username</label><div class="col-sm-8"><input name="username" id="username" placeholder="Username" type="text" className="col-12 form-control" value="copilot" value={this.state.value} onChange={this.handleChange} /><small className="form-text text-muted">This will also be used for your unique URL. Ex. https://www.leisurex.org/copilot</small></div></div></section><section className="mt-1 col-12"><div className="row form-group"><label for="currentPasswordProfile" className="col-sm-4 col-form-label">Current Password</label><div class="col-sm-8"><input name="currentPasswordProfile" id="currentPasswordProfile" placeholder="Current Password" type="password" className="col-12 form-control" value={this.state.value} onChange={this.handleChange} /></div></div></section></section><section className="row text-center"><section className="col-12"><button type="submit" className="btn btn-primary">Submit</button></section></section></form></div>
                        </div>
                    </section>
                    <section class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"><div class="card"><div class="card-header"><strong>Change Password</strong></div><div class="card-body"><form class="text-left"><section class="row"><section class="col-12"></section></section><section class="row form-group mb-xl-3 mb-lg-3 mb-md-3 mb-sm-3 mb-3"><section class="mt-1 col-12"><div class="mb-0 row form-group"><label for="currentPassword" class="col-sm-4 col-form-label">Current Password</label><div class="col-sm-8"><input name="currentPassword" id="currentPassword" placeholder="Current Password" type="password" class="col-12 form-control" value={this.state.value} onChange={this.handleChange} /></div></div></section><section class="mt-1 col-12"><div class="mb-0 row form-group"><label for="newPassword" class="col-sm-4 col-form-label">New Password</label><div class="col-sm-8"><input name="newPassword" id="newPassword" placeholder="New Password" type="password" class="col-12 form-control" value={this.state.value} onChange={this.handleChange} /><small class="form-text text-muted">Must be at least 6 characters long, contain at least one upper case, one lower case and one number.</small></div></div></section><section class="mt-1 col-12"><div class="mb-0 row form-group"><label for="verifyNewPassword" class="col-sm-4 col-form-label">Verify New Password</label><div class="col-sm-8"><input name="verifyNewPassword" id="verifyNewPassword" placeholder="Verify New Password" type="password" class="col-12 form-control" value={this.state.value} onChange={this.handleChange} /></div></div></section></section><section class="row text-center"><section class="col-12"><button type="submit" class="btn btn-primary">Submit</button></section></section></form></div></div></section>
                </section>
            </section>


        )
    }
}

export default Settings
import React, { Component } from "react";



class Settings extends Component {


    render() {



        return(

            <section>
                <section className="row my-3 mx-1">
                    <section className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-2 mb-sm-2 mb-md-2">
                        <div className="card">
                            <div className="card-header">
                                <strong>Update Profile</strong>
                            </div>
                            <div className="card-body"><form className="text-left"><section className="row"><section className="col-12"></section></section><section className="row form-group mb-xl-1 mb-lg-1 mb-md-1 mb-sm-1 mb-1"><section className="mt-1 col-12"><div className="mb-0 row form-group"><label for="firstName" className="col-sm-4 col-form-label">First Name</label><div class="col-sm-8"><input name="firstName" id="firstName" placeholder="First Name" type="text" class="col-12 form-control" value="Gary"></input></div></div></section><section className="mt-1 col-12"><div className="mb-0 row form-group"><label for="lastName" class="col-sm-4 col-form-label">Last Name</label><div class="col-sm-8"><input name="lastName" id="lastName" placeholder="Last Name" type="text" class="col-12 form-control" value="Somerhalder"></input></div></div></section><section class="mt-1 col-12"><div class="mb-0 row form-group"><label for="email" class="col-sm-4 col-form-label">Email</label><div className="col-sm-8"><input name="email" id="email" placeholder="Email" type="email" class="col-12 form-control" value="gary@copilottravel.com"></input></div></div></section><section class="mt-1 col-12"><div class="mb-0 row form-group"><label for="phone" class="col-sm-4 col-form-label">Phone</label><div class="col-sm-8"><div class="react-tel-input" ><input class="col-12 w-100 form-control" id="phone-form-control" placeholder="Phone" type="tel" value="+1 (615) 495-6647" style="height: 38px;"></input><div class=" flag-dropdown" id="flag-dropdown" tabindex="0" role="button"><div class="selected-flag" title="United States: + 1615"><div class="flag us"><div class="arrow"></div></div></div></div></div></div></div></section><section class="mt-1 col-12"><div class="mb-0 row form-group"><label for="displayName" class="col-sm-4 col-form-label">Display Name</label><div class="col-sm-8"><input name="displayName" id="displayName" placeholder="Display Name" type="text" class="col-12 form-control" value="COPILOT TRAVEL"></input><small class="form-text text-muted">This is the name that will display on your booking portal.</small></div></div></section><section class="mt-1 col-12"><div class="mb-0 row form-group"><label for="username" class="col-sm-4 col-form-label">Username</label><div class="col-sm-8"><input name="username" id="username" placeholder="Username" type="text" class="col-12 form-control" value="copilot"></input><small class="form-text text-muted">This will also be used for your unique URL. Ex. https://www.leisurex.org/copilot</small></div></div></section><section class="mt-1 col-12"><div class="row form-group"><label for="currentPasswordProfile" class="col-sm-4 col-form-label">Current Password</label><div class="col-sm-8"><input name="currentPasswordProfile" id="currentPasswordProfile" placeholder="Current Password" type="password" class="col-12 form-control" value=""></input></div></div></section></section><section class="row text-center"><section class="col-12"><button type="submit" class="btn btn-primary">Submit</button></section></section></form></div>
                        </div>
                    </section>

                </section>
            </section>


        )
    }
}

export default Settings
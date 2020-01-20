import React, { Component } from "react";



class MyTeam extends Component{




    render (){
        return(
            <section>
                <section className="row mt-3 mx-1">
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
                                                <th>Name</th>
                                                <th>Approved?</th>
                                                <th>Commission Rate</th>
                                                <th>Bookings</th>
                                                <th>Revenue to Date</th>
                                                <th>Your Commission to Date</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Totals</th>
                                                <th>N/A</th>
                                                <th>N/A</th>
                                                <th>N/A</th>
                                                <th>N/A</th>
                                                <th>N/A</th>
                                                <th>N/A</th>
                                            </tr>
                                        </tfoot>
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
                    <section
                </section>
            </section>
        )
    }
}







export default MyTeam;
import React, { Component } from "react";

class MyClient extends Component{




    render(){

        return(

            <section>
                <section className="row mt-3 mx-1">
                    <section className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="mb-3 card">
                            <div className="card-header">
                                <strong>My Clients</strong>
                            </div>
                            <div className="px-0 py-0 card-body">
                                <div className="table-responsive">
                                    <table className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto mb-0 table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Phone</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>

        )
    }
}

export default MyClient
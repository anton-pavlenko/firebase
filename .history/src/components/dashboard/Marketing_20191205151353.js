import React, { Component } from "react";


class Marketing extends Component {



    render() {


        return(

            <section>
                <section className="row mt-3 mx-1">
                    <section className="col-12">
                        <div className="mb-3 card">
                            <div className="card-header">
                                <strong>Logos</strong>
                            </div>
                            <div className="py-0 card-body">
                                <p class="mt-2 mb-0 text-center">On a Computer, Right Click, then Save Image As</p>
                                <p class="mt-0 mb-2 text-center">On Mobile, Hold Down on Image, then Save</p>
                            <section className="row mx-1 text-center">
                                <section className="col-4 mb-3">
                                    <img className="img-fluid my-3" src="https://cdn.leisurex.org/social/logos/Logo-NoIcon-Full-Color.png" alt="Logo Color No Icon"></img>
                                </section>
                                <section className="col-4 mb-3">
                                    <img className="img-fluid my-3" src="https://cdn.leisurex.org/social/logos/Logo-NoIcon-Full-Color.png" alt="Logo Color No Icon"></img>
                                </section>
                                <section className="col-4 mb-3 bg-dark">
                                    <img className="img-fluid my-3" src="https://cdn.leisurex.org/social/logos/Logo-NoIcon-White.png" alt="Logo White No Icon"></img>

                                </section>
                            </section>
                            <section className="row mx-1 text-center">
                                <section className="col-4 mb-3">
                                    <img class="img-fluid my-3" src="https://cdn.leisurex.org/social/logos/Logo-Full-Color.png" alt="Logo Color"></img>
                                </section>

                            </section>
                            </div>
                        </div>
                    </section>
                </section>
            </section>

        )
    }    
}


export default Marketing
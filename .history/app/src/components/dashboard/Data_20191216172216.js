import React, { Component } from 'react';
import airports from "./airports";

const airoportsList = data.Airoport;


class Data extends Component {
	render() {
		return (
            <ul>
                {airoportsList.map(s => (<li>{s}</li>))}
            </ul>
        );
    }
} 
export default Data;
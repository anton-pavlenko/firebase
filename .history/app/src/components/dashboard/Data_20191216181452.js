import React, { Component } from 'react';
import airports from './Dashboa';

const airoportsList = data.Airoport;


// var results = [];
// var searchField = "name";
// var searchVal = "my Name";
// for (var i=0 ; i < obj.list.length ; i++)
// {
//     if (obj.list[i][searchField] == searchVal) {
//         results.push(obj.list[i]);
//     }
// }

class Data extends Component {
	render() {
		return (
            <ul>
                {airoportsList.map(s => (<li>{name}</li>))}
            </ul>
        );
    }
} 
export default Data;
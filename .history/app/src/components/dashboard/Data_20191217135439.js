import React from "react";
import Autocomplete from "react-autocomplete";
import ReactDom from "react-dom";
const fs = require("fs");

class Data extends React.Component {
  constructor() {
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    this.getItems();
  }

  getItems() {
    const search = document.getElementById('search');
    const matchList = document.getElementById('match-list');

    const searchStates = async searchText => {
        const res = await fetch('../../airports.json');
        const states = await res.json();
    
        console.log(states);
  }

  state = { value: "" };

  render() {
    return (
  
        
    );
  }
}

export default Data;




const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

const searchStates = async searchText => {
    const res = await fetch('../../airports.json');
    const states = await res.json();

    console.log(states);

    search.addEventListener('input', () => searchStates(search.Value));

};

    // let matches = states.filter(state=> {
    //     const regex = new RegExp(`^${serachText}`, 'code');
    //     return state.name.match(regex) || state.code.match(regex);
    // });











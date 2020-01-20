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
  const search = document.getElementById('search');
  const matchList = document.getElementById('match-list');
  getItems() {
    fetch("./airports.json")
      .then(results => results.json())
      .then(results => this.setState({ items: results }));
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
};

    // let matches = states.filter(state=> {
    //     const regex = new RegExp(`^${serachText}`, 'code');
    //     return state.name.match(regex) || state.code.match(regex);
    // });



search.addEventListener('input', () => searchStates(search.Value));








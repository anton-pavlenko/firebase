import React from 'react'
import Autocomplete from 'react-autocomplete';
import App fro;
const fs = require('fs')


class Data extends React.Component {
 
    state = { value: '' };
     
    render(){
    return(
    <div style = {{ textAlign:"center", marginTop:50 }}>
    <h1>React.js Autocomplete</h1>
    <p>Source: <a href="https://jsonworld.com/">jsonworld.com</a></p>
    <Autocomplete
    getItemValue={(item) => item.label}
    items={[
    { label: 'apple' },
    { label: 'banana' },
    { label: 'pear' }
    ]}
    renderItem={(item, isHighlighted) =>
    <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
    {item.label}
    </div>
    }
    value={this.state.value}
    onChange={(event, value) => this.setState({ value }) }
    onSelect={ value => this.setState({ value }) }
    />
     
    </div>
     
    )
    }
     
    }
    
    export default Data;
    
     
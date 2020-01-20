import React from 'react'
import Select from 'react-select';

const options = [
  { value: '1', label: 'No Preference' },
  { value: '2', label: 'Morning' },
  { value: '3', label: 'Afternoon' },
  { value: '4', label: 'Evening' },
];

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    //   this.setState({value: event.target.value});
    this.setState({ value });
    // console.log(`Option selected:`, selectedOption);
  }


  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      //     <select value={this.state.value} onChange={this.handleChange}>
      //     <option value="A">Apple</option>
      //     <option value="B">Banana</option>
      //     <option value="C">Cranberry</option>
      //   </select>
      <form className="formCont col s3" onSubmit={this.handleSubmit}>
        {/* <select className="select" value={this.state.value} onChange={this.handleChange}>
              <option value="">Select Value</option>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select> */}
        <Select
          className="select col  m8"
          value={this.state.value}
          onChange={this.handleChange}
          options={options}
          placeholder={'Deprature Time (Optional)'}
        />
      </form>
    );
  }
}

export default NameForm;
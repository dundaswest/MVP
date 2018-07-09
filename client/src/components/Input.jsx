import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : ''
    }
  }
  handleInputChange(e) {
    this.setState({name:e.target.value})
  }
  render() {
    return (
      <form>
      <label id="name">
        Name
        <input id="input" type="text" name="name" onChange={this.handleInputChange.bind(this)}/>
      </label>
      <input id="submitBtn"type="submit" value="Submit" onClick={(e) => this.props.handleNameSubmit(e,this.state.name)}/>
    </form>
    )
  }
};


export default Input;


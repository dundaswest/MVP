import React from 'react';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <select className="dropDown" onChange={()=>this.props.handleCheckout(this.props.info)}>
        {this.props.people.map((e,i) =>
           <option className = "options" key={i} value={e}>{e}</option>
        )}
      </select>
    )
  }
};


export default DropDown;

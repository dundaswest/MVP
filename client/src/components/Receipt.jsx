import React from 'react';

class Receipt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  handleInputChange(e) {
    this.setState({name:e.target.value})
  }
  render() {
    return (
      <div id="title">Receipt</div>
      <div className="txn-header txn-row">
          <div className="txn-data">Items</div>
          <div className="txn-data">Price</div>
          <div className="txn-data">Name</div>
      </div>
      <div className="txn">

          {this.state.items.map((entry, index) =>
            <div key={index}>
              {entry}
            </div>
          )}
      </div>
      <div className="txn">

        {this.state.price.slice(0,this.state.items.length).map((entry, index) =>
          <div key={index}>
            {entry}
          <DropDown people={this.state.people}/>
          </div>
        )}
      </div>
      <div className="clearFloat"></div>
    )
  }
};


export default Receipt;









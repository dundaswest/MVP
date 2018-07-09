import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const style = {
      display: this.props.show ? 'block' : 'none',
    };
    return (
      <div id="myModal" className="modal" style={style} >

          <div className="modalContent">

          <div className = "modalHeader">
          <div id="selectedName">{`${this.props.selectedName}'s Total`}</div>
          <div className="txn-header txn-row modal-row">
          <div className="txn-data">Items</div>
          <div className="txn-data">Price</div>
        </div>
           {this.props.info.map((e) =>
            <div className="modalItemDiv">
              <div className="modalItem">{e[0]}</div>
              <div className="modalItem">{e[1]}</div>
              <div className="clear"></div>
            </div>
          )}
        </div>
      </div>
      <div className="txn-header txn-row">
      <div className="txn-data">Total</div>
      </div>
      <div className="total">{this.props.info.reduce((acc,cur) => acc + parseFloat(cur[1]),0).toFixed(2)}</div>
      </div>
    );
  }
}


export default Modal;

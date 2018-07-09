import React from 'react';
import axios from 'axios';
import DropDown from './DropDown';
import Input from './Input.jsx';
import Modal from './Modal';
import Basic from './Drop.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName:'',
      table:[],
      items:[],
      price:[],
      people:[''],
      selectedName:'',
      selectedList:[],
      checkout:[],
      show:false,
    }
  }

  componentDidMount() {
    this.getReceipt();
  }
  handleFileSubmit() {
    let fileName1 = document.getElementById('fileName');
    console.log(fileName1)
    //this.setState({fileName})
  }
  handleNameSubmit(e,name) {
    e.preventDefault();
    this.setState({people:this.state.people.concat(name)});
    this.setState({selectedName:name});
    this.setState({show:false});
    this.setState({checkout:[]});
  }
  handleDoneClick(){
    this.setState({show:!this.state.show});
  }
  handleCheckout(entry) {
    console.log(entry);
    this.setState({checkout:this.state.checkout.concat([entry])});
  }
  getReceipt() {
    axios.get('/receipt')
      .then((response) => {
        console.log('from axios',response.data);
        this.setState({ items: response.data.items });
        this.setState({ price: response.data.price });
        let arr = this.state.items.map((e,i) => [e,this.state.price[i]]);
        this.setState({table:arr});
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Input handleNameSubmit={this.handleNameSubmit.bind(this)}/>
      <div className="txn-header txn-row">
          <div className="txn-data">Items</div>
          <div className="txn-data">Price</div>
          <div className="txn-data">Name</div>
      </div>
      <div className="txn">

          {this.state.table.map((entry, index) =>
          <div>
            <div key={`${index}0`} className="tx">
              {entry[0]}
            </div>
            <div key={`${index}1`} className="tx price" >
              {parseFloat(entry[1])}
            </div>
            <div key={`${index}2`} className="tx">
              <DropDown people={this.state.people} handleCheckout= {this.handleCheckout.bind(this)} info={entry}/>
            </div>
          </div>
          )}
      </div>
      <div className="clearFloat"></div>

      <button onClick={this.handleDoneClick.bind(this)} id="done">done!</button>
      <Modal show={this.state.show} selectedName={this.state.selectedName}info={this.state.checkout}/>
      <Basic handleFileSubmit={this.handleFileSubmit.bind(this)}/>
      </div>
    )
  }
};


export default App;

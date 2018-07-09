import React from 'react';
import axios from 'axios';
import DropDown from './DropDown';
import Input from './Input.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table:[],
      items:[],
      price:[],
      people:[],
      selectedName:'',
      selectedList:[],
      checkout:{}
    }
  }

  componentDidMount() {
    this.getReceipt();
  }

  handleNameSubmit(e,name) {
    e.preventDefault();
    this.setState({people:this.state.people.concat(name)});
    this.setState({selectedName:name});
  }
  handleSelect(){
    this.setState({selectedList:this.state.people.concat()})
  }
  handleCheckout() {
    console.log('hey')
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

      <button onClick={this.handleCheckout}>done!</button>
      </div>
    )
  }
};


export default App;

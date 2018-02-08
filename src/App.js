
import React, { Component } from 'react';
import './App.css';
import Form from "./Form"

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      userInput: [],
      tableView: "hidden"
    };
    this.handleData = this.handleData.bind(this);
  }

  handleData(data) {
    let list = this.state.userInput;
    if(data.title === "" || data.description === "") {
      alert("Please Fill Both Fields");
    }else{
      list.push({title: data.title, description: data.description});
      this.setState({userInput: list, tableView: ""})
    }
  }
  

  deleteTableRow(index){
    let list = this.state.userInput;
    list.splice(index, 1);
    this.setState({userInput: list});
    if(list.length === 0 ){
      this.setState({tableView: "hidden"});
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Simple-App</h1>
        </header>

        <Form handlerFromParent={this.handleData}/>

        <div className={this.state.tableView}>
        <table className="table hidden=false">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
    
      {this.state.userInput.map((input, index) => {

        return(
        <tbody>
          <tr>
          <td>{index}</td>
          <td>{input.title}</td>
          <td>{input.description}</td>
          <td><button className = "btn btn-danger btn-sm" 
          onClick= {() => {this.deleteTableRow(index)}}>Delete</button></td>
          </tr>
        </tbody>
      )
      })}
    
        </table>
        </div>
      
      </div>
    );
  }
}

export default App;

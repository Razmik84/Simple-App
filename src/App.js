import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      userInput: [],
      tableView: "hidden"
    };
  }

  addUserInput(e){
    e.preventDefault();
    
    let list = this.state.userInput;
    if(this.refs.title.value === "" || this.refs.description.value === "") {
      alert("Please Fill Both Fields");
    }else{
      list.push({title: this.refs.title.value, description: this.refs.description.value});
      this.setState({userInput: list, tableView: ""})
    }
    this.refs.form.reset();
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

        <div className="myForm">
        <form ref="form">
            <div className="form-group">
              <label>Title</label>
              <input type="text" ref="title" className="form-control" placeholder="Title"/>
            </div>
            <div className="form-group">
              <label>Description</label>
              <input type="text" ref="description" className="form-control" placeholder="Description"/>
            </div>
          <button className="btn btn-primary" onClick={this.addUserInput.bind(this)}>Submit</button>
        </form>
        </div>

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
          <td><button className = "btn btn-danger btn-sm" onClick= {() => {this.deleteTableRow(index)}}>Delete</button></td>
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

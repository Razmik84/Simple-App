import React, { Component } from 'react';
import './App.css';


class Form extends Component {

  constructor(){
    super();
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      titleField: "",
      descriptionField: ""
    }
  }
  submitHandler(evt) {
    evt.preventDefault();
    this.props.handlerFromParent({title: this.state.titleField, description: this.state.descriptionField});
   
    this.setState({
      titleField: '',
      descriptionField: ''
    });
   
  }
  
  handleTitleChange(event) {
    this.setState({
      titleField: event.target.value,
    });
  }

  handleDescriptionChange(event) {
    this.setState({
      descriptionField: event.target.value,
    });
  }

  render() {
    return (
     
      <div className="myForm">
        <form ref="form">
            <div className="form-group">
              <label>Title</label>
              <input type="text" 
              value={this.state.titleField}
              onChange={this.handleTitleChange} 
              className="form-control" placeholder="Title"/>
            </div>
            <div className="form-group">
              <label>Description</label>
              <input type="text" 
              value={this.state.descriptionField}
              onChange={this.handleDescriptionChange}
              className="form-control" 
              placeholder="Description"/>
            </div>
          <button className="btn btn-primary" onClick={this.submitHandler}>Submit</button>
        </form>
      </div>

        

    );
  }
}

export default Form;













import React, { Component } from 'react';
import Login from './Login';
import List from './List';
import Form from'./Form';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      screen: 'Login'
    }
    this.goToForm = this.goToForm.bind(this);
    this.goToList = this.goToList.bind(this);
  }
  
  goToList(){
    console.log("navigate");
    this.setState({screen: 'List'});
  }
  goToForm(){
    console.log("navigate");
    this.setState({screen: 'Form'});
  }
  render() {
    return (
      <div className="App">
      {
        this.state.screen === 'Login'&& (
        <div>
          <Login onNavigate = {this.goToList}/>
        </div>
      ) }
      {
        this.state.screen === 'List'&& (
        <div>
         <List onNavigate = {this.goToForm}/>
        </div>
      ) }    
      {
        this.state.screen === 'Form'&& (
        <div>
          <Form onNavigate = {this.goToList}/>
        </div>
      ) }        
      </div>
    );
  }
}

export default App;
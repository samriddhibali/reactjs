import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import Signup from './Components/Signup';
import Login from './Components/Login';
import List from './Components/List';
import Logout from './Components/Logout';
import Form from './Components/Form';
import './App.css';

export class App extends Component {
  render() {
   
    return (
      <div className="App">

        {
          localStorage.getItem('logged') &&
          <header className = "header">
          <table align="center" cellPadding='25' width='45%'>
            <tbody>
              <tr>

                <td> 
                  <NavLink to = "/List" activeStyle = {{ color: 'red', textDecoration: 'underline'}} style = {{textDecoration: 'none'}} >Go to List</NavLink>
                </td>
                <td> 
                  <NavLink to = "/Form" activeStyle = {{ color: 'red', textDecoration: 'underline'}} style = {{textDecoration: 'none'}}>Go to Form</NavLink> 
                </td>
                <td>
                  <NavLink to = "/" onClick = {()=>{ window.localStorage.clear()}} style = {{textDecoration: 'none'}}>Logout</NavLink> 
                </td>

              </tr>
            </tbody>
          </table>
          </header>  
        }

        <Switch>
          <Route exact path = "/" component = {Login} />
          <Route exact path = "/List" component = {List} />
          <Route exact path = "/Form" component = {Form} />
          <Route exact path = "/Signup" component = {Signup} />
        </Switch>
      </div>
    );
  }
}

export default App;
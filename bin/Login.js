import React, { Component } from 'react';

class Login extends Component {
    render(){
        return(
        <div className = 'Login'>
            <h1>Login Page</h1>
            <form name = "login" method="get" onSubmit = {this.props.onNavigate}>
            <label>Enter Username: </label>
            <input type="text" name="username" required/><br/><br/>
            <label>Enter Password: </label>
            <input type="password" name="password" required/><br/><br/>
            <input type = "submit" name="submit"/>
            </form>
        </div>
        );
    }
}

export default Login;
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../../../../Library/Caches/typescript/3.0/node_modules/redux';
import { validateLogin } from '../ActionCreator/LoginAction';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uname: '',
            password: ''
        };
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validateData = () => {
        const user = {
            "uname": this.state.uname.trim(),
            "password": this.state.password.trim()
        }
        this.props.validateLogin(user)
            .then(() => {
                if (this.props.data.newUser && this.props.data.status) {
                    alert("Now enter your details")
                    window.location.replace('/Form')
                }
                else {
                    this.props.history.go(0);
                }
            })
            .catch(() => {
                this.props.history.go(0);
            })
    }

    checkValid = () => {
        if (this.props.data.status) {
            localStorage.setItem("logged", 'success');
            // this.props.history.go(0);
        }
    }

    render() {
        this.checkValid();
        console.log("Data---           ", this.props.data)

        return (
            <div className = "Login">
                <h1>Login</h1>
                {
                    this.props.data.msg &&
                    <i>{this.props.data.msg}</i>
                }
                {/* <form className = "Signup" method="post"> */}
                <div className = "field">

                    <label>Username: </label>
                    <input type="text" name="uname" className="userName" onChange={this.handleInput} /><br /><br /><br />

                    <label>Password: </label>
                    <input type="password" name="password" className="password" onChange={this.handleInput} /><br /><br /><br />

                    <button className='button' onClick={this.validateData}>Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/Signup" ><button className="button add">New User</button></Link>
                </div>
                {/* </form> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.LoginReducer,
    //    newUser: state.LoginReducer.newUser,
    //    status: state.LoginReducer.status,
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("dispatchToProps");
    return bindActionCreators({
        validateLogin: validateLogin,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
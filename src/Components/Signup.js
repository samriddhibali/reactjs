import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../../../../Library/Caches/typescript/3.0/node_modules/redux';
import { signup } from '../ActionCreator/LoginAction';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            uname: '',
            suname: '',
            password: '',
        };
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validateData = (e) => {
        e.preventDefault();

        const user = {
            "uname": this.state.uname.trim(),
            "password": this.state.password.trim()
        }
        this.props.signup(user)
        .then(() => {
            if(this.props.newUser){
                alert("Now Login..")
                this.props.history.push('/');
            }
        })
        .catch((e)=>{
            console.log(e)
        })

    }

    createUsername = (e) => {
        const a = this.state.fname.toLowerCase();
        const b = this.state.lname.toLowerCase();
        if (a !== '' && b !== '') {
            this.setState({
                uname: a + '_' + b,
                suname: a + '_' + b
            });
           // console.log("uname: ",this.state.uname);
        }
        e.preventDefault();
    }

    render() {
      //  console.log(this.props.msg,"jfbsjbfjkseb")

        return (
            <div className='Signup'>
                <h1>SignUp</h1>
                <form method="post" onSubmit={this.validateData} >
                    <fieldset className="field">
                        <label>First Name: </label>
                        <input type="text" name="fname" className="firstName" onChange={this.handleInput} value={this.state.fname} /><br /><br />

                        <label>Last Name: </label>
                        <input type="text" name="lname" className="lastName" onChange={this.handleInput} value={this.state.lname} /><br /><br />

                        <button className='small-button' onClick={this.createUsername}>Suggest Username</button><br /><br />
                        <div className="small">Suggested Username: {this.state.suname}</div><br />

                        <label>Username: </label>
                        <input type="text" name="uname" className="userName" pattern="[a-z_]+" required onChange={this.handleInput} value={this.state.uname} /><br /><div className="small italic">(lowercase letters only)</div><br /><br />

                        <label>Password: </label>
                        <input type="password" name="password" className="password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$" required onChange={this.handleInput} value={this.state.password} /><br /><div className="small italic">(atleast one lowercase, one uppercase, one digit and minimun 8 letters)</div><br /><br />

                        {/* <label>Date of Birth: </label>
                        <input type="date" name="dob" onChange={this.handleInput} value={this.state.dob} /><br /><br /> */}

                        <button type="submit" className='button'>Submit</button>
                    </fieldset>
                </form>
            </div>

        );
    }
}


const mapDispatchToProps = (dispatch) => {
    console.log("dispatchToProps");
    return bindActionCreators({ signup: signup }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        msg: state.LoginReducer.msg,
        newUser: state.LoginReducer.newUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signup));
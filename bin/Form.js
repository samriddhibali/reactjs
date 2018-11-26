import React, { Component } from 'react';

class Form extends Component {
    render(){
        return(
            <div className = "form">
            <form name = "detail">
            <h3>Enter Details</h3>
            <label>Name: </label>
            <input type="text" name="name"/><br/><br/>
            <label>Salary: </label>
            <input type="text" name="sal"/><br/><br/>
            <label>Department: </label>
            <input type="text" name="dept"/><br/><br/>
            <label>DOB: </label>
            <input type="text" name="dob"/><br/><br/>
            <button name = "submit" onClick={this.props.onNavigate}> Save </button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button name = "cancel" onClick={this.props.onNavigate}> Cancel </button>
            </form>
            </div>
        );
    }
}

export default Form;

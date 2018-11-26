import React, { Component } from 'react';
import './App.css';

class List extends Component {
    render(){
        return(
            <div className = 'List'>
            <h3>Customer List</h3>
            <button className = 'add' onClick={this.props.onNavigate}>Add</button>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Department</th>
                    <th>DOB</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button className = "edit">Edit</button>/<button className = "delete">Delete</button></td>
                </tr>
            </tbody>
            </div>
        );
    }
}

export default List;
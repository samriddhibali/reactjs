import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../../../../Library/Caches/typescript/3.0/node_modules/redux';
import { createUser, editRecord, getEditRecord, showEditData, reset } from '../ActionCreator/DetailAction';


class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            dept: '',
            dob: ''
        };
    }

    componentDidMount() {
        if (localStorage.getItem("logged") !== 'success') {
            this.props.history.push('/');
        }
        let id = window.location.search;

        if(id){
        this.props.getEditRecord(id.substring(4))
            .then((response) => {
                this.props.showEditData(response.data)
            })
            .catch((e) => {
                console.log(e.response)
            });
        }
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        //console.log(e.target.name, "ONCHANGEINPUT", e.target.value, typeof e.target.value);
    }

    saveDetail = (e) => {
        let id = window.location.search;
        const user = {
            "name": this.state.name,
            "salary": this.state.salary,
            "dept": this.state.dept,
            "dob": this.state.dob
        }
        console.log("savesave", user);

        if (this.state.name === '' || this.state.salary === '' || this.state.dept === '' || this.state.dob === '') {
            alert("Please fill all the details");
        }
        else {
            if (id === '') {
                this.props.createUser(user)
                    .then((response) => {
                        window.location.replace('/List');
                    })
                    .catch((e) => {
                        console.log(e.response)
                    });
            }
            else {
                this.props.editRecord(user, id)
                    .then((response) => {
                        //this.props.history.push('/List') 
                        window.location.replace('/List');
                    })
                    .catch((e) => {
                        console.log(e.response)
                    });
            }
        }
        e.preventDefault();
    }

    render() {
        return (
            <div className="Form">
                <h2>Enter Details</h2>
                <form name="detail" method="post">
                    <fieldset className = "field">
                        <label>Name: </label>
                        <input type="text" name="name" onChange={this.handleInput} placeholder={this.props.data.name} /><br /><br />
                        <label>Salary: </label>
                        <input type="text" name="salary" onChange={this.handleInput} placeholder={this.props.data.salary} /><br /><br />
                        <label>Department: </label>

                        {
                            this.props.fetched ?
                        <select defaultValue onChange={this.handleInput} name="dept">
                        {
                            window.location.search === ''
                             ?
                                <option disabled value>Select</option>
                            :
                            <option disabled value>{this.props.data.dept}</option>
                        }
                            {
                                this.props.cdata
                                    .map((name) => {
                                        return (
                                            name.dept
                                        )
                                    })
                                    .filter((ele, pos, arr) => {
                                        return (arr.indexOf(ele) === pos
                                        )
                                    })
                                    .map((element, index) => {
                                        // console.log(element)
                                        return (
                                            <option key = {index} value={element}> {element} </option>)
                                    })
                                }
                        </select>
                        :
                         //   !this.props.fetched &&
                            <input type="text" name="dept" onChange={this.handleInput} placeholder={this.props.data.dept} />
                        }
                        <br /><br />

                        <label>DOB: </label>
                                               
                        {
                            this.props.data.dob ?
                           <input type="text" name="dob" onChange={this.handleInput} onClick ={(e) => e.target.type='date'} placeholder = {this.props.data.dob}/>
                        :
                           <input type="date" name="dob" onChange={this.handleInput} />
                        }
                        <br /><br /> 
                        
                        <button name="save" className="button" onClick={this.saveDetail}>Save</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button name="cancel" className="button" onClick={(e) => { this.props.history.push('/List')}}>Cancel </button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("dispatchToProps");
    return bindActionCreators({
        createUser: createUser,
        editRecord: editRecord,
        getEditRecord: getEditRecord,
        showEditData: showEditData,
        reset : reset,
    }, dispatch)
}

const mapStateToProps = (state) => {
    console.log("stateToProps  ", state);
    return {
        data: state.DetailReducer.edetail,
        cdata: state.DetailReducer.cdetail,
        fetched: state.DetailReducer.fetched,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Form));
import React, { Component } from 'react';
import '../App.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../../../../Library/Caches/typescript/3.0/node_modules/redux';
import { showData, deleteRecord, reset, showDataSuccessful } from '../ActionCreator/DetailAction';

class List extends Component {

    componentDidMount() {
        if (localStorage.getItem("logged") !== 'success') {
            this.props.history.push('/');
        }
        
        if(!this.props.fetched){
        //console.log('testing props--->>>>',this.props.fetched);
        this.props.showData()
            .then((response) => {
                console.log(response)
                this.props.showDataSuccessful(response.data);
            })
            .catch((e) => {
                console.log('Some error occured.', e)
            })
        }
    
    }

    toDelete = (e) => {
        this.props.deleteRecord(e)
            .then((response) => {
                window.location.replace('/List');
            })
            .catch((e) => {
                console.log(e.response)
            });
    }
    
    render() {
        const { data } = this.props;

        return (

            <div className='List'>
                <h2>Customer List</h2>
                {
                    this.props.msg &&
                    <div>{this.props.msg}</div>
                }
                <button className="add button" onClick={() => this.props.history.push('/Form')}>Add Record</button>
                <table className="detail" border='1'>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Department</th>
                            <th>DOB</th>
                            <th colSpan = "2">Action</th>
                        </tr>
                        {
                            data && data.map((name, index) => {
                                if (name.name) {
                                    this.props.reset();

                                    return (
                                        <tr key={index}><td>{name.name}</td>
                                            <td>{name.salary}</td>
                                            <td>{name.dept}</td>
                                            <td>{name.dob}</td>
                                            <td><button name={name.id} id={index} className="small-button" onClick={(e) => { this.props.history.push('/Form?id=' + e.target.name), e.preventDefault() }}>Edit</button></td> 
                                            <td><button name={name.id} className="small-button" onClick={this.toDelete}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                        }

                    </tbody>
                </table>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    console.log("dispatchToProps");
    return bindActionCreators({
        showData: showData,
        deleteRecord: deleteRecord,
        reset: reset,
        showDataSuccessful: showDataSuccessful
    }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        data: state.DetailReducer.cdetail,
        msg: state.DetailReducer.msg,
        fetched: state.DetailReducer.fetched,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(List));
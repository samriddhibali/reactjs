import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Logout extends Component {
    logout = () => {
        window.localStorage.clear();
        // this.props.history.push('/');
        window.location.replace('/');
    }

    render() {
       // console.log('Logout');
        return (
            <div >
                <button className="button" onClick={this.logout}>Logout</button>
            </div>

        )
    }
}

export default withRouter(Logout);
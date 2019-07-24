import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handleLogin() {
        alert('Logging in');
        this.props.history.push('/food/salmon');
    }

    handleBack() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className='Navbar'>
                <button onClick={this.handleLogin}>Log in</button>
                <button onClick={this.handleBack}>Go back</button>
            </div>
        )
    }
}

export default withRouter(Navbar);
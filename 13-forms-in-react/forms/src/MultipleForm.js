import React, { Component } from 'react'

class MultipleForm extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', email: '', password: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(`You typed: ${this.state.username}`);
        this.setState({ username: '' })
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='username'>Full Name:</label>
                <input type='text' name='username' value={this.state.username} onChange={this.handleChange} />
                <input type='email' name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange} />
                <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} />
                <button>Submit!</button>
            </form>
        )
    }
}

export default MultipleForm;
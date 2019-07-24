import React, { Component } from 'react'

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = { fullName: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(`You typed: ${this.state.fullName}`);
        this.setState({ fullName: '' })
    }

    handleChange(event) {
        this.setState({ fullName: event.target.value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='fullname'>Full Name:</label>
                <input type='text' id='fullname' name='fullname' value={this.state.fullName} onChange={this.handleChange} />
                <button>Submit!</button>
            </form>
        )
    }
}

export default NameForm;
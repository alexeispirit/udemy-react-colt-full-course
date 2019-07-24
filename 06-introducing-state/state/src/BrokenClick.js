import React, { Component } from 'react'

class BrokenClick extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
        this.handleClick = this.handleClick.bind(this);
    }

            handleClick(e) {
        this.setState({ clicked: true });
    }

    render () {
        return (
            <div>
                 <button onClick={this.handleClick}>Click me!</button>
                <h1>{this.state.clicked ? 'Clicked' : 'Not Clicked'}</h1>
            </div>
        )
    }
}

export default BrokenClick;
// Three ways to bind this in handle
// ===================================
// 1. bind inline
// onClick={this.handleClick.bind(this)}
// ===================================
// 2. arrow function
// onClick={() => this.handleClick()}
// ===================================
// 3. bind in the constructor
// constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
// }
// ===================================
// 4. experimental
// handleClick = () => {
//     console.log(this)
// }
// ===================================

import React, { Component } from 'react'
import './WiseSquare.css'

class WiseSquareWithProps extends Component {
    constructor(props) {
        super(props);
        this.dispenseWisdom = this.dispenseWisdom.bind(this);
    }

    static defaultProps = {
        messages: [
            "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
            "Educating the mind without educating the heart is no education at all.",
            "Not everything that is faced can be changed, but nothing can be changed until it is faced."
        ]
    }

    dispenseWisdom() {
        let {messages} = this.props;
        let rIndex = Math.floor(Math.random() * messages.length);
        console.log(messages[rIndex]);
    }

    render() {
        return (
            <div    className='WiseSquare'
                    onMouseEnter={this.dispenseWisdom}>
                    :)
            </div>
        );
    }
}

export default WiseSquareWithProps;
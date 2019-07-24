import React, { Component } from 'react';

class StateClicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        };
        this.generateRandom = this.generateRandom.bind(this);
    }

    generateRandom(e) {
        let rand = Math.floor(Math.random() * 10) + 1;
        this.setState({num: rand});
    }

    render() {
        return (
            <div>
                <h1>My num is {this.state.num}</h1>
                {
                    this.state.num !== 7 
                    ?
                    <button onClick={this.generateRandom}>Random Number</button>
                    :
                    <h1>You Won!</h1>
                }
            </div>
        )
    }
}

export default StateClicker;
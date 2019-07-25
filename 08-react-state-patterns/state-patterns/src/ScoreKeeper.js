import React, { Component } from 'react'

class ScoreKeeper extends Component {
    constructor(props) {
        super(props);
        this.state = { score: 0 };
        this.singleKill = this.singleKill.bind(this);
        this.tripleKill = this.tripleKill.bind(this);
    }

    incrementScore(prevState) {
        return { score: prevState.score + 1}
    }

    singleKill() {
        // Bad code for state depending on previous state
        this.setState({score: this.state.score + 1});
    }

    // tripleKill() {
    //     this.setState(prevState => {
    //         return {score: prevState.score + 3};
    //     })
    // }

    tripleKill() {
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
    }

    render() {
        return (
            <div>
                <h1>Score is: {this.state.score}</h1>
                <button onClick={this.singleKill}>Single Kill!</button>
                <button onClick={this.tripleKill}>Triple Kill!</button>
            </div>
        );
    }
}

export default ScoreKeeper;
import React, { Component } from 'react'

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date() }
        console.log('CONSTRUCTOR');
    }

    componentDidMount() {
        console.log('COMPONENTDIDMOUNT');
        this.timerId = setInterval(() => {
            this.setState({time: new Date()});
        }, 1000)
    }

    componentDidUpdate() {
        console.log('COMPONENTDIDUPDATE')
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        console.log('RENDER')
        return <h1>{this.state.time.getSeconds()}</h1>;
    }
}

export default Timer;
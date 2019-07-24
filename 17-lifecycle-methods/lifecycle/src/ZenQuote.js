import React, { Component } from 'react'
import axios from 'axios';
import './ZenQuote.css';

class ZenQuote extends Component {
    constructor(props) {
        super(props);
        this.state = { quote: '', isLoaded: false };
    }

    componentDidMount() {
        // load data
        axios.get('https://api.github.com/zen')
            .then(response => {
                setTimeout(() => {
                    // set state with data
                    this.setState({ quote: response.data, isLoaded: true });
                }, 3000)
            });
    }

    componentDidUpdate() {
        
    }

    render() {
        return (
            <div>
                {this.state.isLoaded ? (
                    <div>
                        <h1>Always remember...</h1>
                        <p>{this.state.quote}</p>
                    </div>
                ) : (
                    <div className='loader'></div>
                )}
            </div>
        );
    }
}

export default ZenQuote;
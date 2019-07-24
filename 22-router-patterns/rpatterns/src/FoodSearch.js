import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class FoodSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { query: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    handleClick(evt) {
        // Do something
        alert('saved food to db');
        // redirect somewhere
        this.props.history.push(`/food/${this.state.query}`);
    }

    render() {
        return (
            <div>
                <h1>Search for a food</h1>
                <input 
                    type='text' 
                    name='query' 
                    placeholder='search for a food' 
                    value={this.state.query} 
                    onChange={this.handleChange} />
                <Link to={`/food/${this.state.query}`}>Go</Link>
                <button onClick={this.handleClick}>Save food</button>
            </div>
        )
    }
}

export default FoodSearch;
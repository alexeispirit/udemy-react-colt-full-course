import React, { Component } from 'react'

class Dog extends Component {
    render() {
        return (
            <div>
                <h1>Dog</h1>
                <h3>{this.props.name}</h3>
            </div>
        )
    }
}

export default Dog;
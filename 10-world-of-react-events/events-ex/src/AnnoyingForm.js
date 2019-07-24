import React, { Component } from 'react'

class AnnoyingForm extends Component {
    handleKeyUp(event) {
        if(event.keyCode === 56) {
            alert('*** I love the * character ***');
        } else {
            alert('Nooo');
        }
    }

    render() {
        return (
            <div>
                <h3>Try typing in here</h3>
                <textarea onKeyUp={this.handleKeyUp}/>
            </div>
        );
    }
}

export default AnnoyingForm;
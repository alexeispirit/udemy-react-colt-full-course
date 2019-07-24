import React, { Component } from 'react'

class CopyDemo extends Component {
    handleCopy() {
        alert('Stop stealing from me');
    }

    render() {
        return (
            <div>
                <h3>Try copying some of this text: </h3>
                <section style={{width: "300px", display: "inline-block"}} onCopy={this.handleCopy}>
                    Tenderloin pork chicken flank. Cupim jerky tri-tip tenderloin pork cow short ribs prosciutto shoulder tail meatball t-bone pork belly. Capicola turkey pork corned beef cupim kielbasa boudin porchetta, ham hock hamburger bresaola meatloaf jowl meatball. Corned beef doner drumstick ball tip, pastrami cow short ribs ham hock bacon pork loin. Turkey filet mignon shankle, turducken salami jerky pastrami pork chop chuck spare ribs corned beef ribeye landjaeger doner chicken.
                </section>
            </div>
        )
    }
}

export default CopyDemo;
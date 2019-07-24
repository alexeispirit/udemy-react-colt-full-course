function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();

        let msg;
        if (num === 7) {
            msg = <div>
                <h2>Congrats you win</h2>
            </div>
        } else {
            msg = <div>
                <h2>Sorry you lose</h2>
            </div>
        }
        return (
            <div>
                <h1>Your number is... {num}</h1>
                <p>{num === 7 ? 'Congrats!' : 'Unlucky!'}</p>
                {
                    num === 7 &&
                    <img src="https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" />
                }
                {msg}
            </div>
        )
    }
}
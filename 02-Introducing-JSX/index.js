function getMood() {
    const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
    return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>My current mood is: {getMood()}</h1>
                <img src="https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" />
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <NumPicker />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
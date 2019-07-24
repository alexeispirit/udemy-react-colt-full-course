class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to="Ringo" 
                    from="Paul" 
                    bangs={4}
                    num={3} // Number
                    data={[1,2,3,4,5]} // Array
                    isFunny // Boolean
                    image="https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                />
                <Hello 
                    to="Ringo" 
                />
            </div>
        )
    }
}

class AppSlot extends React.Component {
    render() {
        return (
            <div>
                <h1>Slot Machines</h1>
                <SlotMachine 
                    s1="x"
                    s2="z"
                    s3="x"
                />
                <SlotMachine 
                    s1="x"
                    s2="y"
                    s3="x"
                />
                <SlotMachine 
                    s1="x"
                    s2="x"
                    s3="x"
                />
            </div>
        )
    }
}

class AppLoop extends React.Component {
    render() {
        return (
            <div>
                <Friend name="Alex" hobbies={['Cooking', 'Sports']} />
                <Friend name="Frida" hobbies={['Painting', 'Swimming']} />
            </div>
        )
    }
}

ReactDOM.render(<AppSlot />, document.getElementById('root'));
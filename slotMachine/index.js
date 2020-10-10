class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Slot Machine!</h1>
                <SlotMachine
                    s1="X"
                    s2="X"
                    s3="X"
                />

                <SlotMachine
                    s1="X"
                    s2="Y"
                    s3="X"
                />
            </div>
            
            
            
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

class App extends React.Component{
    render(){
        return(
            <div>
            <Friend
            name ="Timmy"
            hobbies ={['Painting', 'TV', 'Rollerblading']}
            />

            <Friend
            name ="Jon Jon"
            hobbies ={['Computers', 'Reading', 'Rollerblading']}
            />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
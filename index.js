class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello there!</h1>
				<p>This is my first React Component!</p>
				<p>I have a lot to learn about React!</p>
			</div>
		);
	}
}

ReactDOM.render(<Hello />, document.getElementById('root'));

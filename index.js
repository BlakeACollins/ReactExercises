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

function MoreToLearn() {
	return (
		<div>
			<h2>More Components</h2>
			<p>But this time using a function component!</p>
		</div>
			);
}

ReactDOM.render(<Hello />, document.getElementById('root'));
ReactDOM.render(<MoreToLearn />, document.getElementById('more'));

import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = { value: '' };
	changeText(e) {
		this.setState({ value: e.target.value });
	}
	render() {
		return (
			<div>
				<h1>Un repetidor</h1>
				<input
					type="text"
					placeholder="Empieza a escribir algo"
					onChange={(e) => this.changeText(e)}
					value={this.state.value}
				/>
				<p className="repeater">{this.state.value}</p>
			</div>
		);
	}
}

export default App;

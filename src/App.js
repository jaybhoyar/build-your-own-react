import React, { Component } from "react";
import randomColorPair from "./randomColor.js";
import "./App.scss";
import Header from "./Header";
import copy from "copy-to-clipboard";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pColor: randomColorPair().pair,
			ratio: randomColorPair().ratio,
			score: randomColorPair().score
		};
	}
	changeColor() {
		this.setState({
			pColor: randomColorPair().pair,
			ratio: randomColorPair().ratio,
			score: randomColorPair().score
		});
		console.log(this.pColor);
	}
	invertColor() {
		this.setState({ pColor: this.state.pColor.reverse() });
	}
	clickToCopy(color) {
		copy(color);
	}
	render() {
		return (
			<>
				<Header {...this.state.pColor} />
				<div
					style={{ backgroundColor: this.state.pColor[0] }}
					className="container"
				>
					<div className="toggle_colors">
						<button
							style={{
								color: this.state.pColor[0],
								backgroundColor: this.state.pColor[1]
							}}
							className="color_code"
							onClick={() =>
								this.clickToCopy(this.state.pColor[1])
							}
						>
							{this.state.pColor[1]}
						</button>
						<button
							className="next_color"
							style={{
								color: this.state.pColor[0],
								backgroundColor: this.state.pColor[1]
							}}
							onClick={() => this.changeColor()}
						>
							Next ↻
						</button>
						<span style={{ color: this.state.pColor[1] }}>
							{this.state.ratio} Contrast {this.state.score}
						</span>
						<button
							className="next_color"
							style={{
								color: this.state.pColor[0],
								backgroundColor: this.state.pColor[1]
							}}
							onClick={() => this.invertColor()}
						>
							Invert ⇋
						</button>
						<button
							style={{
								color: this.state.pColor[0],
								backgroundColor: this.state.pColor[1]
							}}
							className="color_code"
							onClick={() =>
								this.clickToCopy(this.state.pColor[1])
							}
						>
							{this.state.pColor[0]}
						</button>
					</div>

					<p style={{ color: this.state.pColor[1] }}>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book.
					</p>
				</div>
			</>
		);
	}
}

export default App;

import React, { Component } from "react";
import { SketchPicker } from "react-color";
import ColorLensIcon from "@mui/icons-material/ColorLens";

export class SketchExample extends Component {
	state = {
		displayColorPicker: false,
		color: {
			r: 241,
			g: 112,
			b: 19,
			a: 1,
		},
	};
	handleClick = () => {
		this.setState({ displayColorPicker: !this.state.displayColorPicker });
	};

	handleClose = () => {
		this.setState({ displayColorPicker: false });
	};

	handleChange = (color) => {
		this.setState({ color: color.rgb });
	};
	render() {

		return (
			<div>
				<div className="pcr-button" onClick={this.handleClick}>
					<ColorLensIcon />

				</div>
				{this.state.displayColorPicker ? <div >
					<SketchPicker color={this.state.color} onChange={this.handleChange} />
				</div> : null}

			</div>

		);
	}
}

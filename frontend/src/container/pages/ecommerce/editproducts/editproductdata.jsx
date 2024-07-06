import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const defaultContent = `
<ul>
  <li>Care Instructions: Machine Wash</li>
  <li>Neckline: The pullover is framed with a Crew Neck</li>
  <li>Fit Type: Regular Fit</li>
  <li>Long Sleeves: The pullover is designed with Long Sleeves.</li>
  <li>Soft Hand feel: The fabric is extremely soft and comfortable, keeping you at ease for hours.</li>
  <li>Solid: The pullover is available in solid pattern.</li>
</ul>`;

class ProductEditor extends Component {
	static modules = {
		toolbar: [
			[{ header: "1" }, { header: "2" }, { font: [] }],
			[{ size: [] }],
			["bold", "italic", "underline", "strike", "blockquote"],
			[{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
			["link", "image", "video"],
			["clean"],
		],
		clipboard: {
			matchVisual: false,
		},
	};

	static formats = [
		"header", "font", "size",
		"bold", "italic", "underline", "strike", "blockquote",
		"list", "bullet", "indent",
		"link", "image", "video",
	];

	constructor(props) {
		super(props);
		this.state = { productEditorHtml: defaultContent, theme: "snow" };
		this.handleChange = this.handleChange.bind(this);
		this.handleThemeChange = this.handleThemeChange.bind(this);
	}

	handleChange(html) {
		this.setState({ productEditorHtml: html });
	}

	handleThemeChange(newTheme) {
		this.setState({ theme: newTheme });
	}

	render() {
		return (
			<div>
				<ReactQuill
					theme={this.state.theme}
					onChange={this.handleChange}
					value={this.state.productEditorHtml}
					modules={ProductEditor.modules}
					formats={ProductEditor.formats}
					bounds={".app"}
					// eslint-disable-next-line react/prop-types
					placeholder={this.props.placeholder}
				/>
			</div>
		);
	}
}

export default ProductEditor;

import React, { Fragment } from "react";
import { connect } from "react-redux";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import LabeledTwoThumbs, { Marks } from "./rangesliderdata";
import { Card, Col, Form, Row } from "react-bootstrap";
import Showcode from "../../../../components/ui/showcode/showcode";
import { slider1, slider2, slider3, slider4 } from "../../../../components/ui/data/formsdata/formsprism";

const Rangeslider = () => {

	const AirbnbSlider = styled(Slider)(({ theme }) => ({
		color: "#3a8589",
		height: 3,
		padding: "13px 0",
		"& .MuiSlider-thumb": {
			height: 27,
			width: 27,
			backgroundColor: "#fff",
			border: "1px solid currentColor",
			"&:hover": {
				boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
			},
			"& .airbnb-bar": {
				height: 9,
				width: 1,
				backgroundColor: "currentColor",
				marginLeft: 1,
				marginRight: 1,
			},
		},
		"& .MuiSlider-track": {
			height: 3,
		},
		"& .MuiSlider-rail": {
			color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
			opacity: theme.palette.mode === "dark" ? undefined : 1,
			height: 3,
		},
	}));

	function AirbnbThumbComponent(props) {
		// eslint-disable-next-line react/prop-types
		const { children, ...other } = props;
		return (
			<SliderThumb {...other}>
				{children}
				<span className="airbnb-bar" />
				<span className="airbnb-bar" />
				<span className="airbnb-bar" />
			</SliderThumb>
		);
	}

	function valuetext(value) {
		return `${value}°C`;
	}

	return (
		<Fragment>
			<Row>
				<Col xl={3}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Default-Styling
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="slider">
								<Box sx={{ m: 3 }} />
								<AirbnbSlider
									slots={{ thumb: AirbnbThumbComponent }}
									getAriaLabel={(index) => (index === 0 ? "Minimum price" : "Maximum price")}
									defaultValue={[10, 90]}
								/>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={3}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Fit Handles
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="slider-fit">
								<AirbnbSlider
									slots={{ thumb: AirbnbThumbComponent }}
									getAriaLabel={(index) => (index === 0 ? "Minimum price" : "Maximum price")}
									defaultValue={[10, 90]}
								/>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={3}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Rounded Styling
							</Card.Title>
						</Card.Header>
						<Card.Body className='p-4'>
							<div id="slider-round">
								<RangeSlider
									className="single-thumb"
									defaultValue={[0, 50]}
									thumbsDisabled={[true, false]}
									rangeSlideDisabled={true}
								/>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={3}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Square Styling
							</Card.Title>
						</Card.Header>
						<Card.Body className='p-4'>
							<div id="slider-square">
								<RangeSlider
									className="square-thumb"
									defaultValue={[0, 50]}
									thumbsDisabled={[true, false]}
									rangeSlideDisabled={true}
								/>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Toggle Movement By Clicking Pips</Card.Title>
						</Card.Header>
						<Card.Body className="p-5">
							<div id="slider-pips">
								<LabeledTwoThumbs
								// rtl={local_variable.dir == "rtl"}
								/>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Soft Limits</Card.Title>
						</Card.Header>
						<Card.Body className="p-5">
							<div id="soft">
								<Marks
								//  rtl={local_variable.dir == "rtl"}
								/>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<h6 className="mb-3">noUiSlider Colors:</h6>
			<Row>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Primary
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="primary-colored-slider">
								<Slider
									aria-label="Temperature"
									defaultValue={30}
									getAriaValueText={valuetext}
									color="primary"
									className=''
								/>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Secondary
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="secondary-colored-slider">
								<Slider
									aria-label="Temperature"
									defaultValue={30}
									getAriaValueText={valuetext}
									color="secondary"
								/>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Warning
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="warning-colored-slider">
								<Slider
									aria-label="Temperature"
									defaultValue={30}
									getAriaValueText={valuetext}
								// color="warning"
								/>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Info
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="info-colored-slider">
								<Slider
									aria-label="Temperature"
									defaultValue={30}
									getAriaValueText={valuetext}
								// color="info"
								/>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Success
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="success-colored-slider">
								<Slider
									aria-label="Temperature"
									defaultValue={30}
									getAriaValueText={valuetext}
								// color="success"
								/>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Danger
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="danger-colored-slider">
								<Slider
									aria-label="Temperature"
									defaultValue={30}
									getAriaValueText={valuetext}
								// color="danger"
								/>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={3}>
					<Showcode title=" Default Range" code={slider1}>
						<Form.Range className="" id="customRange1" />
					</Showcode>
				</Col>
				<Col xl={3}>
					<Showcode title=" Disabled Range" code={slider2}>
						<Form.Range className="" id="disabledRange" disabled />
					</Showcode>
				</Col>
				<Col xl={3}>
					<Showcode title="Range With Min and Max Values" code={slider3}>
						<Form.Range className="" min="0" max="5" id="customRange2" />
					</Showcode>
				</Col>
				<Col xl={3}>
					<Showcode title=" Range With Steps" code={slider4}>
						<Form.Range className="" min="0" max="5" step="0.5" id="customRange3" />
					</Showcode>
				</Col>
			</Row>

		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	local_varaiable: state
});

export default connect(mapStateToProps, {})(Rangeslider);

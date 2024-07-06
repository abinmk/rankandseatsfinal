import React, { FC, Fragment, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import StarsIcon from "@mui/icons-material/Stars";

const Ratings = () => {

	const [value, setValue] = useState(2);
	const [hover, setHover] = useState(-1);

	const labels = ["Poor", "Fair", "Good", "Excellent", "Perfect"];
	function getLabelText(value) {
		return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
	}
	const [ratingValue, setRatingValue] = useState(0);
	const handleRatingChange = (_event, newValue) => {
		setRatingValue(newValue); // Update the rating value when the user clicks
	};
	const [ratingValue2, setRatingValue2] = useState(3);
	const handleRatingChange2 = (_event, newValue) => {
		setRatingValue2(newValue); // Update the rating value when the user clicks
	};
	const [ratingValue3, setRatingValue3] = useState(4);
	const handleRatingChange3 = (_event, newValue) => {
		setRatingValue3(newValue); // Update the rating value when the user clicks
	};
	const [ratingValue4, setRatingValue4] = useState(2);
	const handleRatingChange4 = (_event, newValue) => {
		setRatingValue4(newValue); // Update the rating value when the user clicks
	};
	const [ratingValue5, setRatingValue5] = useState(4);
	const handleRatingChange5 = (_event, newValue) => {
		setRatingValue5(newValue); // Update the rating value when the user clicks
	};
	return (
		<Fragment>
			<Row>
				<Col xxl={6} xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Basic Rater
							</Card.Title>
						</Card.Header>
						<Card.Body className="text-center">
							<div className="">
								<h6 className="fs-14 fw-semibold">Show Some <span className="text-danger">&#10084;</span> with rating </h6>
								<Rating name="clickable-rating"
									value={ratingValue5}
									onChange={handleRatingChange5} />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={6} xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								5 star rater with steps
							</Card.Title>
						</Card.Header>
						<Card.Body className="text-center">
							<div className="">
								<h6 className="fs-14 fw-semibold">Dont forget to rate the product </h6>
								<Rating name="clickable-rating"
									value={ratingValue2}
									onChange={handleRatingChange2} />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={6} xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Custom messages
							</Card.Title>
						</Card.Header>
						<Card.Body className="text-center">
							<div className="">
								<h6 className="fs-14 fw-semibold">Your rating is much appreciated&#128079; </h6>
								<Rating name="clickable-rating"
									value={ratingValue3}
									onChange={handleRatingChange3} />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={6} xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								5 Star rater with custom isBusyText and simulated backend
							</Card.Title>
						</Card.Header>
						<Card.Body className="text-center">
							<div className="">
								<h6 className="fs-14 fw-semibold">Thanks for rating</h6>
								<Rating name="clickable-rating"
									value={ratingValue4}
									onChange={handleRatingChange4} />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={6} xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								On hover event
							</Card.Title>
						</Card.Header>
						<Card.Body className="text-center">
							<div className="">
								<h6 className="fs-14  fw-semibold">Please give your valuable rating</h6>
								<div className="d-flex flex-wrap align-items-center justify-content-center">
									<Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
										<Rating
											name="hover-feedback"
											value={value}
											precision={0.5}
											getLabelText={getLabelText}
											onChange={(_event, newValue) => {
												setValue(newValue);
											}}
											onChangeActive={(_event, newHover) => {
												setHover(newHover);
											}}
											emptyIcon={<StarsIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
										/>
										{value !== null && (
											<Box className="rating-stars my-rating-9 rating-9" sx={{ ml: 2 }}>
												<span className="live-rating badge bg-success-transparent ms-3">
													{labels[hover !== -1 ? hover : value]}
												</span>
											</Box>
										)}
									</Box>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={6} xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Clear/reset rater
							</Card.Title>
						</Card.Header>
						<Card.Body className="text-center">
							<div className="">
								<p className="fs-14 mb-0 fw-semibold">Thank You so much for your support :</p>
								<div className="d-flex flex-wrap align-items-center justify-content-center">
									<Rating
										name="clickable-rating"
										value={ratingValue}
										onChange={handleRatingChange} // Handle rating change when the user clicks
									/>
									<Button
										variant='danger-light'
										className="btn btn-icon btn-sm ms-3"
										id="rater-reset-button"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										data-bs-title="Reset"
									>
										<i className="ri-restart-line"></i>
									</Button>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<div className="col-xxl-12 col-xl-12">
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Unlimited number of stars readOnly
							</Card.Title>
						</Card.Header>
						<Card.Body className="text-center">
							<div className="">
								<h6 className="fs-14  fw-semibold">Thanks for rating</h6>
								<Stack spacing={1} className="rating-stars block my-rating-7">
									<Rating id="stars-unlimited" name="half-rating-read" value={6} max={10} size="large" readOnly />
								</Stack>
							</div>
						</Card.Body>
					</Card>
				</div>
			</Row>

		</Fragment>
	);
};

export default Ratings;

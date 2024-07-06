import React, { FC, Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

//IMAGES
import media60 from "../../../assets/images/media/media-60.jpg";
import media61 from "../../../assets/images/media/media-61.jpg";
import Showcode from "../../../components/ui/showcode/showcode";
import { placeholder, placeholder1, placeholder2, placeholder3 } from "../../../components/ui/data/advanceuiprismdata/advanceuiprism";

const Placeholders = () => {

	return (
		<Fragment>
			<Row>
				<Col xl={6}>
					<Row>
						<Col xl={6}>
							<Card className="custom-card">
								<img className="card-img-top" src={media60} alt="" />
								<Card.Body>
									<Card.Title>Card title</Card.Title>
									<p className="card-text">Some quick example text to build on the card title and make
										up
										the bulk of the card's content.</p>
									<Link to="#" className="btn btn-primary mt-2">Go somewhere</Link>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={6}>
							<div className="card  custom-card" aria-hidden="true">
								<img className="card-img-top" src={media61} alt="" />
								<Card.Body>
									<div className="h5 card-title placeholder-glow">
										<span className="placeholder col-6"></span>
									</div>
									<p className="card-text placeholder-glow">
										<span className="placeholder col-7"></span>
										<span className="placeholder col-4"></span>
										<span className="placeholder col-4"></span>
										<span className="placeholder col-6"></span>
									</p>
									<Link to="#" tabIndex={-1} className="btn btn-primary disabled placeholder col-6  mt-2"></Link>
								</Card.Body>
							</div>
						</Col>
						<Col xl={12}>
							<Showcode title="Animation" code={placeholder}>
								<p className="placeholder-glow mb-0">
									<span className="placeholder col-12"></span>
								</p>
								<p className="placeholder-wave mb-0">
									<span className="placeholder col-12"></span>
								</p>
							</Showcode>
						</Col>
					</Row>
				</Col>
				<Col xl={6}>
					<Row>
						<Col xl={12}>
							<Row>
								<Col xl={12}>
									<Showcode title="Sizing" code={placeholder1}>
										<span className="placeholder col-12 placeholder-xl mb-1"></span>
										<span className="placeholder col-12 placeholder-lg"></span>
										<span className="placeholder col-12"></span>
										<span className="placeholder col-12 placeholder-sm"></span>
										<span className="placeholder col-12 placeholder-xs"></span>
									</Showcode>
								</Col>
							</Row>
						</Col>
						<Col xl={12}>
							<Showcode title="Colors" code={placeholder2}>
								<span className="placeholder col-12"></span>
								<span className="placeholder col-12 bg-primary"></span>
								<span className="placeholder col-12 bg-secondary"></span>
								<span className="placeholder col-12 bg-success"></span>
								<span className="placeholder col-12 bg-danger"></span>
								<span className="placeholder col-12 bg-warning"></span>
								<span className="placeholder col-12 bg-info"></span>
								<span className="placeholder col-12 bg-light"></span>
								<span className="placeholder col-12 bg-dark"></span>
							</Showcode>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Showcode title="Width" code={placeholder3}>
						<span className="placeholder bg-primary col-6"></span>
						<span className="placeholder bg-primary w-75"></span>
						<span className="placeholder bg-primary" style={{ width: "25%" }}></span>
					</Showcode>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Placeholders;

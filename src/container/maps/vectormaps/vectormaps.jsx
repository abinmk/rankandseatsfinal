
import React, { FC, Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { MapAnnotation, Shapeworldmap, USState, WorldMap } from "./vectormapdata";

const Vectormaps = () => {
	const [content, setContent] = useState("");
	return (
		<Fragment>
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Basic Vector Map</Card.Title>
						</Card.Header>
						<Card.Body  >
							<div id="vector-map">
								<WorldMap setTooltipContent={setContent} />
								{content}
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Map With Markers</Card.Title>
						</Card.Header>
						<Card.Body  >
							<div id="marker-map">
								<Shapeworldmap />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Map With Image Markers</Card.Title>
						</Card.Header>
						<Card.Body  >
							<div id="marker-image-map">
								<MapAnnotation />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Map With Lines</Card.Title>
						</Card.Header>
						<Card.Body  >
							<div id="lines-map">
								<USState />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Vectormaps;

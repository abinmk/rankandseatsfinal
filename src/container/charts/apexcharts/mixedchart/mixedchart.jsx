import React, { FC, Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Linearea, Linecolumnarea, Mixedlinecolumn, MultipleYaxis } from "./mixedchartdata";

const Mixedchart = () => {

	return (
		<Fragment>
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Line &amp; Column Chart</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="mixed-linecolumn">
								<Mixedlinecolumn />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Line &amp; Area Chart</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="mixed-linearea">
								<Linearea />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Line,Column &amp; Area Chart</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="mixed-all">
								<Linecolumnarea />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Mixedchart;

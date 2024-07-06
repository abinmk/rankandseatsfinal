import React, { FC, Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Basicrangearea, Comborangearea } from "./rangeareachartdata";

const Rangeareachart = () => {
	return (
		<Fragment>
			<Row>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Basic Range Area Chart
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="rangearea-basic">
								<Basicrangearea />
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Combo Range Area Chart
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div id="rangearea-combo">
								<Comborangearea />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Rangeareachart;

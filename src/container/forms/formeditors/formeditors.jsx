
import React, { FC, Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Editor from "./formeditordata";
import Editor1 from "./formeditordata1";

const Formeditors = () => {
	{
		return (
			<Fragment>
				<Row>
					<Col xl={12}>
						<Card className="custom-card">
							<Card.Header>
								<Card.Title>
									Quill Snow Editor
								</Card.Title>
							</Card.Header>
							<Card.Body>
								<Editor placeholder={""} />

							</Card.Body>
						</Card>
					</Col>
				</Row>

				<Row>
					<Col xl={12}>
						<Card className="custom-card">
							<Card.Header>
								<Card.Title>
									Quill Bubble Editor
								</Card.Title>
							</Card.Header>
							<Card.Body>
								<Editor1 />
							</Card.Body>
						</Card>
					</Col>
				</Row>

			</Fragment>
		);
	}
};
export default Formeditors;

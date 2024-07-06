import React, { FC, Fragment } from "react";
import { Buttonspinner, Colorspinner } from "./spinnersdata";
import { Button, Col, Row } from "react-bootstrap";
import Showcode from "../../../components/ui/showcode/showcode";
import { spinner1, spinner10, spinner2, spinner3, spinner4, spinner5, spinner6, spinner7, spinner8, spinner9 } from "../../../components/ui/data/uielementsdata/uielementsprism";

const Spinners = () => {

	return (
		<Fragment>
			<Row>
				<Col xl={6}>
					<Showcode title="Border spinner" code={spinner1}>
						<div className="spinner-border  text-primary" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Colors" code={spinner2}>
						{Colorspinner.map((idx) => (
							<div className={`spinner-border me-2 text-${idx.color}`} role="status" key={Math.random()}>
								<span className="visually-hidden">Loading...</span>
							</div>
						))}
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<Showcode title=" Growing spinner" code={spinner3}>
						<div className="spinner-grow text-primary" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title=" Growing spinner" code={spinner4}>
						{Colorspinner.map((idx) => (
							<div className={`spinner-grow me-1 text-${idx.color}`} role="status" key={Math.random()}>
								<span className="visually-hidden">Loading...</span>
							</div>
						))}
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<Showcode title="Alignment Flex" code={spinner5}>
						<div className="d-flex justify-content-center mb-4">
							<div className="spinner-border text-primary" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						</div>
						<div className="d-flex align-items-center">
							<strong>Loading...</strong>
							<div className="spinner-border text-primary ms-auto" role="status" aria-hidden="true"></div>
						</div>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Alignment Float" code={spinner6}>
						<div className="clearfix mb-4">
							<div className="spinner-border text-primary float-end" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						</div>
						<div className="clearfix">
							<div className="spinner-border text-primary float-start" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						</div>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<Showcode title='Alignment Text center' code={spinner7}>
						<div className="text-center">
							<div className="spinner-border text-primary" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						</div>
					</Showcode>
					<Showcode title=" Spinner Sizes" code={spinner8} customCardBodyClass="d-flex align-items-center">
						<div className="spinner-border text-primary spinner-border-sm me-4" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
						<div className="spinner-grow text-primary spinner-grow-sm me-4" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
						<div className="spinner-border text-primary me-4" style={{ width: "3rem", height: "3rem" }}
							role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
						<div className="spinner-grow text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Alignment Margin" code={spinner9}>
						<div className="spinner-border text-primary m-5" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<div className="col-xl-12">
					<Showcode title="Buttons" code={spinner10}>
						<div className="btn-list">
							<Button variant='primary-light' className="btn" type="button" disabled>
								<span className="spinner-border spinner-border-sm align-middle" role="status"
									aria-hidden="true"></span>
								<span className="visually-hidden"> Loading...</span>
							</Button>
							<Button variant='primary-light' className="btn" type="button" disabled>
								<span className="spinner-border spinner-border-sm align-middle" role="status"
									aria-hidden="true"></span>
								Loading...
							</Button>
							<Button variant='primary-light' className="btn" type="button" disabled>
								<span className="spinner-grow spinner-grow-sm align-middle" role="status"
									aria-hidden="true"></span>
								<span className="visually-hidden"> Loading...</span>
							</Button>
							{Buttonspinner.map((idx) => (
								<Button variant={idx.color} className="" type="button" disabled key={Math.random()}>
									<span className="spinner-grow spinner-grow-sm align-middle" role="status"
										aria-hidden="true"></span>
									Loading...
								</Button>
							))}
						</div>
					</Showcode>
				</div>
			</Row>

		</Fragment>
	);
};
export default Spinners;

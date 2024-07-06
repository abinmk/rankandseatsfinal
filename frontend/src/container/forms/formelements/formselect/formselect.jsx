import React, { FC, Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { Multipleselectdata, Multipleselectdata1, Optionwithnosearch, SingleGroup } from "./formselectdata";
import Showcode from "../../../../components/ui/showcode/showcode";
import { select1, select2, select3, select4, select5, select6 } from "../../../../components/ui/data/formsdata/formsprism";

const Formselect = () => {
	const components = {
		DropdownIndicator: null,
	};

	const createOption = (label) => ({
		label,
		value: label,
	});

	const [inputValue, setInputValue] = useState("");
	const [value, setValue] = useState([
		createOption("one"),
		createOption("two"),
		createOption("three")
	]);
	const [inputValue1, setInputValue1] = useState("");
	const [value1, setValue1] = useState([
		createOption("child-1"),
		createOption("child-2")
	]);

	const handleKeyDown1 = (event) => {
		if (!inputValue1) return;
		switch (event.key) {
		case "Enter":
		case "Tab":
			setValue1((prev) => [...prev, createOption(inputValue1)]);
			setInputValue1("");
			event.preventDefault();
		}
	};
	const handleKeyDown = (event) => {
		if (!inputValue) return;
		switch (event.key) {
		case "Enter":
		case "Tab":
			setValue((prev) => [...prev, createOption(inputValue)]);
			setInputValue("");
			event.preventDefault();
		}
	};
	const [isSearchable] = useState(true);

	//
	const [inputValue2, setInputValue2] = useState("");
	const [value2, setValue2] = useState([
		createOption("abc@hotmail.com"),
	]);

	const handleKeyDown2 = (event) => {
		if (!inputValue2) return;
		switch (event.key) {
		case "Enter":
		case "Tab":
			setValue2((prev) => [...prev, createOption(inputValue2)]);
			setInputValue2("");
			event.preventDefault();
		}
	};
	return (
		<Fragment>
			<Row>
				<Col xl={4}>
					<Showcode title="Default Select" code={select1}>
						<Form.Select aria-label="Default select example">
							<option>Open this select menu</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</Form.Select>
					</Showcode>
				</Col>
				<Col xl={4}>
					<Showcode title="Disabled Select" code={select2}>
						<Form.Select aria-label="Default select example" disabled={true}>
							<option>Open this select menu</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</Form.Select>
					</Showcode>
				</Col>
				<Col xl={4}>
					<Showcode title="Rounded Select" code={select3}>
						<Form.Select className="form-select rounded-pill" aria-label="Default select example">
							<option>Open this select menu</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</Form.Select>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Showcode title="Select Sizes" code={select4}>
						<Form.Select size="sm" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
							<option>Open this select menu</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</Form.Select>
						<Form.Select className="form-select mb-3 ps-2" aria-label="Default select">
							<option>Open this select menu
							</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</Form.Select>
						<Form.Select size="lg" className="form-select form-select-lg"
							aria-label=".form-select-lg example">
							<option>Open this select menu</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</Form.Select>
					</Showcode>
				</Col>
			</Row>
			<h6 className="fw-semibold mb-2">Choices:</h6>
			<Row>
				<Col xl={6}>
					<Row>
						<Col xl={12}>
							<Card className="custom-card">
								<Card.Header className="d-flex align-items-center justify-content-between">
									<h6 className="card-title">Multiple Select</h6>
								</Card.Header>
								<Card.Body>
									<p className="fw-semibold mb-2">Default</p>
									<div className="choices mb-24">
										<Select isMulti name="colors" options={Multipleselectdata} className="default basic-multi-select custom-multi mb-3" id="choices-multiple-default"
											menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Multipleselectdata[0]]}
										/></div>
									<p className="fw-semibold mb-2">With Remove Button</p>
									<div className="choices mb-24">
										<Select isMulti name="colors" options={Multipleselectdata1} className="basic-multi-select custom-multi mb-3" id="choices-multiple-default"
											menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Multipleselectdata1[0]]}
										/>
									</div>
									<p className="fw-semibold mb-2">Option groups</p>
									<div className="choices mb-24">
										<SingleGroup />
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={12}>
							<Card className="custom-card">
								<Card.Header>
									<Card.Title>
										Passing Through Options
									</Card.Title>
								</Card.Header>
								<Card.Body className="passing-option">
									<CreatableSelect
										components={components}
										classNamePrefix='react-select'
										inputValue={inputValue}
										isClearable
										isMulti
										menuIsOpen={false}
										onChange={(newValue) => {
											// Ensure newValue is an array (or empty array) of objects
											if (Array.isArray(newValue)) {
												setValue(newValue);
											} else {
												// Handle the case when newValue is not an array
												setValue([]);
											}
										}}
										onInputChange={(newValue) => setInputValue(newValue)}
										onKeyDown={handleKeyDown}
										placeholder="Type something and press enter..."
										value={value}
									/>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={12}>
							<Card className="custom-card">
								<Card.Header>
									<Card.Title>
										Options added via config with no search
									</Card.Title>
								</Card.Header>
								<Card.Body>
									<Select isClearable name="choices-single-no-search" options={Optionwithnosearch} className="default basic-multi-select" id="choices-single-no-search"
										menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Optionwithnosearch[5]]}
									/>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Col>
				<Col xl={6}>
					<Row>
						<Col xl={12}>
							<Card className="custom-card">
								<Card.Header className="card-header d-flex align-items-center justify-content-between">
									<h6 className="card-title">Single Select</h6>
								</Card.Header>
								<Card.Body>
									<p className="fw-semibold mb-2">Default</p>
									<Select isSearchable={isSearchable} name="colors" options={Multipleselectdata} className="default basic-multi-select" id="choices-multiple-default"
										menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Multipleselectdata[0]]}
									/>
									<p className="fw-semibold mb-2">Option groups</p>
									<SingleGroup />
								</Card.Body>
							</Card>
						</Col>
						<Col xl={12}>
							<Card className="custom-card">
								<Card.Header>
									<Card.Title>
										Email Address Only
									</Card.Title>
								</Card.Header>
								<Card.Body className="passing-option">
									{/* <Form.Control className="form-control"
                  id="choices-text-email-filter" type="text" placeholder="This is a placeholder"/> */}
									<CreatableSelect
										components={components}
										classNamePrefix='react-select'
										inputValue={inputValue2}
										isClearable
										isMulti
										menuIsOpen={false}
										onChange={(newValue) => {
											// Ensure newValue is an array (or empty array) of objects
											if (Array.isArray(newValue)) {
												setValue1(newValue);
											} else {
												// Handle the case when newValue is not an array
												setValue1([]);
											}
										}}
										onInputChange={(newValue) => setInputValue2(newValue)}
										onKeyDown={handleKeyDown2}
										placeholder="Type something and press enter..."
										value={value2}
									/>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={12}>
							<Card className="custom-card">
								<Card.Header>
									<Card.Title>
										Passing Unique Values
									</Card.Title>
								</Card.Header>
								<Card.Body className="passing-option">
									<CreatableSelect
										components={components}
										classNamePrefix='react-select'
										inputValue={inputValue1}
										isClearable
										isMulti
										menuIsOpen={false}
										onChange={(newValue) => {
											// Ensure newValue is an array (or empty array) of objects
											if (Array.isArray(newValue)) {
												setValue1(newValue);
											} else {
												// Handle the case when newValue is not an array
												setValue1([]);
											}
										}}
										onInputChange={(newValue) => setInputValue1(newValue)}
										onKeyDown={handleKeyDown1}
										placeholder="Type something and press enter..."
										value={value1}
									/>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<Showcode title="Multiple Attribute Select" code={select5}>
						<Form.Select multiple className="form-select" aria-label="multiple select example">
							<option className="selected">Open this select menu</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</Form.Select>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Showcode title="Using Size Attribute" code={select6}>
						<Form.Select className="form-select" htmlSize={4} aria-label="size 3 select example">
							<option className="selected">Open this select menu</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
							<option value="4">Four</option>
							<option value="5">Five</option>
						</Form.Select>
					</Showcode>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Formselect;

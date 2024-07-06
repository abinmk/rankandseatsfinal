import React, { FC, Fragment, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Selectmaxoption, Selectoption1, Selectoption2, Selectoption3, Selectoption4, Selectoption5 } from "./select2data";
import Select from "react-select";

const Select2 = () => {

	const [selectedOptions, setSelectedOptions] = useState(null);

	const handleSelectChange = (selected) => {
		// Define your maximum selection limit (e.g., 2 in this example)
		const maxSelections = 3;

		if (selected && selected.length <= maxSelections) {
			setSelectedOptions(selected);
		}
	};

	const [singleSelectValue, setSingleSelectValue] = useState(null);
	const [isSelectDisabled, setSelectDisabled] = useState(false);

	const options = [
		{ value: "s-1", label: "Selection-1" },
		{ value: "s-2", label: "Selection-2" },
		{ value: "s-3", label: "Selection-3" },
		{ value: "s-4", label: "Selection-4" },
		{ value: "s-5", label: "Selection-5" },
	];

	const handleSingleSelectChange = (selectedOption) => {
		setSingleSelectValue(selectedOption);
	};

	const disableSelect = () => {
		setSelectDisabled(true);
	};

	const enableSelect = () => {
		setSelectDisabled(false);
	};
	return (
		<Fragment>
			<Row>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Basic Select2
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Select name="state" options={Selectoption1} className="basic-multi-select " isSearchable
								menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectoption1[0]]}
							/>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Multiple Select
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Select isMulti name="states[]" options={Selectoption2} className="js-example-basic-multiple w-full custom-multi" isSearchable
								menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectoption2[0]]}
							/>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Single Select With Placeholder
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Select name="state" options={Selectoption3} className="js-example-placeholder-single js-states" isClearable
								menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectoption3[0]]}
							/>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Multiple Select With Placeholder
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Select isMulti name="state" options={Selectoption4} className="js-example-placeholder-multiple w-full js-states"
								menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectoption4[0]]}
							/>
						</Card.Body>
					</Card>
				</Col><Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Templating
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Select
								name="state"
								options={Selectoption5}
								className="js-example-templating js-persons basic-custom-select"
								menuPlacement="auto"
								classNamePrefix="Select2"
								defaultValue={[Selectoption5[0]]}
							/>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Templating Selection
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Select
								name="state"
								options={Selectoption5}
								className="basic-multi-select basic-custom-select"
								menuPlacement="auto"
								classNamePrefix="Select2"
								defaultValue={[Selectoption5[0]]}
							// styles={customStyles} // You can apply custom styles here.
							/>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<div className="col-xl-6">
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Max Selections Limiting
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Select
								isMulti
								name="states[]"
								options={Selectmaxoption}
								className="basic-multi-select"
								isSearchable
								menuPlacement="auto"
								classNamePrefix="Select2"
								// defaultValue={[Selectmaxoption[0]]}
								value={selectedOptions}
								onChange={handleSelectChange} // Type assertion here
							/>
						</Card.Body>
					</Card>
				</div>
				<div className="col-xl-6">
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Disabling a Select2 control
							</Card.Title>
						</Card.Header>
						<Card.Body className=" vstack gap-3">
							<Select
								className="mb-3"
								options={options}
								classNamePrefix="Select2"
								value={singleSelectValue}
								onChange={handleSingleSelectChange}
								isDisabled={isSelectDisabled}
							/>
							<Select isMulti name="state" options={options} className="js-example-placeholder-multiple w-full js-states"
								menuPlacement='auto' classNamePrefix="Select2" defaultValue={[options[0]]} isDisabled
							/>
							<div>
								<Button variant='primary-light' className="btn me-2" onClick={enableSelect}>
									Enable
								</Button>
								<Button variant='primary' className="btn" onClick={disableSelect}>
									Disable
								</Button>
							</div>
						</Card.Body>
					</Card>
				</div>
			</Row>

		</Fragment>
	);
};

export default Select2;

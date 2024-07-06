import React, { FC, Fragment, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Productoptions1, Productoptions2, Productoptions3, Productoptions4, Productoptions5, Productoptions6, Productoptions7, Productoptions8 } from "./addproductsdata";
import DatePicker from "react-datepicker";
import ReactQuill from "react-quill";
import Select from "react-select";
//filepond
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

const Addproducts = () => {
	const [value1, setValue1] = useState("");
	const [files, setFiles] = useState([]);
	const [files1, setFiles1] = useState([]);
	const [startDate, setStartDate] = useState(new Date());
	const handleDateChange = (date) => {
		// Ensure date is defined before setting it
		if (date) {
			setStartDate(date);
		}
	};
	return (
		<Fragment>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Body className="add-products p-0">
							<div className="p-4">
								<Row className="gx-5">
									<Col xxl={6} xl={12} lg={12} md={6}>
										<div className="card custom-card shadow-none mb-0">
											<Card.Body className="p-0">
												<Row className="gy-3">
													<Col xl={12}>
														<Form.Label htmlFor="product-name-add">Product Name</Form.Label>
														<Form.Control type="text" className="form-control" id="product-name-add" placeholder="Name" />
														<Form.Label htmlFor="product-name-add" className="form-label mt-1 fs-12 op-5 text-muted mb-0">*Product Name should not exceed 30 characters</Form.Label>
													</Col>
													<Col xl={6}>
														<Form.Label htmlFor="product-category-add">Category</Form.Label>
														<Select name="colors" options={Productoptions1} className="basic-multi-select" isSearchable
															menuPlacement='auto' classNamePrefix="Select2" placeholder="Category"
														/>
													</Col>
													<Col xl={6}>
														<Form.Label htmlFor="product-gender-add">Gender</Form.Label>
														<Select name="colors" options={Productoptions2} className="basic-multi-select" isSearchable
															menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
														/>
													</Col>
													<Col xl={6}>
														<Form.Label htmlFor="product-brand-add">Brand</Form.Label>
														<Select name="colors" options={Productoptions4} className="basic-multi-select" isSearchable
															menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
														/>
													</Col>
													<Col xl={6}>
														<Form.Label htmlFor="product-size-add">Size</Form.Label>
														<Select name="colors" options={Productoptions3} className="basic-multi-select" isSearchable
															menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
														/>
													</Col>
													<Col xl={6}>
														<Form.Label htmlFor="product-cost-add">Enter Cost</Form.Label>
														<input type="text" className="form-control" id="product-cost-add" placeholder="Cost" />
														<label htmlFor="product-cost-add" className="form-label mt-1 fs-12 op-5 text-muted mb-0">*Mention final price of the product</label>
													</Col>
													<div className="col-xl-6 color-selection">
														<Form.Label htmlFor="product-color-add">Colors</Form.Label>
														<Select isMulti name="colors" options={Productoptions5} className="basic-multi-select" isSearchable
															menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
														/>
													</div>
													<Col xl={12}>
														<Form.Label htmlFor="product-description-add">Product Description</Form.Label>
														<textarea className="form-control" id="product-description-add" rows={2}></textarea>
														<label htmlFor="product-description-add" className="form-label mt-1 fs-12 op-5 text-muted mb-0">*Description should not exceed 500 letters</label>
													</Col>
													<div className="col-xl-12 product-documents-container">
														<p className="fw-semibold mb-2 fs-14">Product Images :</p>
														<FilePond className="multiple-filepond"
															files={files}
															onupdatefiles={setFiles}
															allowMultiple={true}
															maxFiles={6}
															server="/api"
															name="files" /* sets the file input name, it's filepond by default */
															labelIdle='Drag & Drop your file here or click '
														/>
													</div>
													<label className="form-label op-5 mt-3">Minimum 0f 6 images are need to be uploaded,make sure the image size match the proper background size and all images should be uniformly maintained with width and height to the image container,image size should not exceed 2MB,once uploaded to change the image you need to wait minimum of 24hrs. </label>
													<div className="col-xl-12 product-documents-container">
														<p className="fw-semibold mb-2 fs-14">Warrenty Documents :</p>
														<FilePond className="multiple-filepond"
															files={files1}
															onupdatefiles={setFiles1}
															allowMultiple={true}
															maxFiles={6}
															server="/api"
															name="files" /* sets the file input name, it's filepond by default */
															labelIdle='Drag & Drop your file here or click '
														/>
													</div>
												</Row>
											</Card.Body>
										</div>
									</Col>
									<Col xxl={6} xl={12} lg={12} md={6}>
										<div className="card custom-card shadow-none mb-0">
											<div className="card-body p-0">
												<div className="row gy-4">
													<div className="col-xl-4">
														<Form.Label htmlFor="product-actual-price">Actual Price</Form.Label>
														<input type="text" className="form-control" id="product-actual-price" placeholder="Actual Price" />
													</div>
													<div className="col-xl-4">
														<Form.Label htmlFor="product-dealer-price">Dealer Price</Form.Label>
														<input type="text" className="form-control" id="product-dealer-price" placeholder="Dealer Price" />
													</div>
													<div className="col-xl-4">
														<Form.Label htmlFor="product-discount">Discount</Form.Label>
														<input type="text" className="form-control" id="product-discount" placeholder="Discount in %" />
													</div>
													<Col xl={6}>
														<Form.Label htmlFor="product-type">Product Type</Form.Label>
														<input type="text" className="form-control" id="product-type" placeholder="Type" />
													</Col>
													<Col xl={6}>
														<Form.Label htmlFor="product-discount">Item Weight</Form.Label>
														<input type="text" className="form-control" id="product-discount1" placeholder="Weight in gms" />
													</Col>
													<Col xl={6}>
														<Form.Label htmlFor="publish-date">Publish Date</Form.Label>
														<DatePicker selected={startDate} onChange={handleDateChange} />
													</Col>
													<Col xl={6}>
														<Form.Label htmlFor="publish-time">Publish Time</Form.Label>
														<DatePicker
															selected={startDate}
															onChange={handleDateChange}
															showTimeSelect
															showTimeSelectOnly
															timeIntervals={15}
															timeCaption="Time"
															dateFormat="h:mm aa"
														/>
													</Col>
													<Col xl={6}>
														<Form.Label htmlFor="product-status-add">Published Status</Form.Label>
														<Select name="colors" options={Productoptions6} className="basic-multi-select" isSearchable
															menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
														/>
													</Col>
													<Col xl={6}>
														<Form.Label>Product Tags</Form.Label>
														<Select isMulti name="colors" options={Productoptions7} defaultValue={[Productoptions7[0], Productoptions7[3]]}
															className="basic-multi-select" isSearchable
															menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
														/>
													</Col>
													<Col xl={12}>
														<Form.Label htmlFor="product-status-add1">Availability</Form.Label>
														<Select name="colors" options={Productoptions8}
															className="basic-multi-select" isSearchable
															menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
														/>
													</Col>
													<Col xl={12}>
														<Form.Label>Product Features</Form.Label>
														<div id="product-features">
															<ReactQuill theme="snow" value={value1} onChange={setValue1} />
														</div>
													</Col>
												</div>
											</div>
										</div>
									</Col>
								</Row>
							</div>
							<div className="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-end">
								<Button variant='primary-light' type="button" className="btn m-1">Add Product<i className="bi bi-plus-lg ms-2"></i></Button>
								<Button variant='success-light' type="button" className="btn m-1">Save Product<i className="bi bi-download ms-2"></i></Button>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Addproducts;

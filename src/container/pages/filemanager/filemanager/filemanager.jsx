import React, { FC, Fragment, useState } from "react";
import { Button, Card, Col, Dropdown, Form, InputGroup, Modal, ProgressBar, Row } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { Filestore } from "./filemanagerdata";

//filepond
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { Link } from "react-router-dom";
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

//IMAGES
import filemanager1 from "../../../../assets/images/media/file-manager/1.png";

const Filemanager = () => {
	const [files, setFiles] = useState([]);
	//
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	//
	const [show1, setShow1] = useState(false);

	const handleClose1 = () => setShow1(false);
	const handleShow1 = () => setShow1(true);

	return (
		<Fragment>
			<div className="file-manager-container p-2 gap-4 d-sm-flex">
				<div className="file-manager-navigation">
					<div className="d-flex align-items-center justify-content-between w-100 p-3 border-bottom">
						<div>
							<h6 className="fw-semibold mb-0">File Manager</h6>
						</div>
						<Dropdown>
							<Dropdown.Toggle variant='' className="btn btn-sm btn-icon btn-primary-light btn-wave waves-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								<i className="ri-settings-3-line"></i>
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item href="#">Hidden Files</Dropdown.Item>
								<Dropdown.Item href="#">Another action</Dropdown.Item>
								<Dropdown.Item href="#">Something else here</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
					<div className="p-3 border-bottom">
						<InputGroup>
							<Form.Control type="text" className="" placeholder="Search Files" aria-describedby="button-addon2" />
							<Button variant="" className="btn btn-primary" type="button" id="button-addon2"><i className="ri-search-line"></i></Button>
						</InputGroup>
					</div>
					<div>
						<SimpleBar id="files-main-nav">
							<ul className="list-unstyled files-main-nav" id="files-main-nav">
								<li className="active files-type">
									<Link to="#">
										<div className="d-flex align-items-center">
											<div className="me-2">
												<i className="ri-folder-2-line fs-16"></i>
											</div>
											<span className="flex-fill text-nowrap">
												My Files
											</span>
											<span className="badge bg-primary">322</span>
										</div>
									</Link>
								</li>
								<li className="files-type">
									<Link to="#">
										<div className="d-flex align-items-center">
											<div className="me-2">
												<i className="ri-star-s-line fs-16"></i>
											</div>
											<span className="flex-fill text-nowrap">
												Favourites
											</span>
										</div>
									</Link>
								</li>
								<li className="files-type">
									<Link to="#">
										<div className="d-flex align-items-center">
											<div className="me-2">
												<i className="ri-share-forward-line fs-16"></i>
											</div>
											<span className="flex-fill text-nowrap">
												Shared Files
											</span>
										</div>
									</Link>
								</li>
								<li className="files-type">
									<Link to="#">
										<div className="d-flex align-items-center">
											<div className="me-2">
												<i className="ri-delete-bin-line fs-16"></i>
											</div>
											<span className="flex-fill text-nowrap">
												Recycle Bin
											</span>
										</div>
									</Link>
								</li>
								<li className="files-type">
									<Link to="#">
										<div className="d-flex align-items-center">
											<div className="me-2">
												<i className="ri-history-fill fs-16"></i>
											</div>
											<span className="flex-fill text-nowrap">
												Recent Files
											</span>
										</div>
									</Link>
								</li>
								<li className="files-type">
									<Link to="#">
										<div className="d-flex align-items-center">
											<div className="me-2">
												<i className="ri-settings-3-line fs-16"></i>
											</div>
											<span className="flex-fill text-nowrap">
												Settings
											</span>
										</div>
									</Link>
								</li>
								<li className="files-type">
									<Link to="#">
										<div className="d-flex align-items-center">
											<div className="me-2">
												<i className="ri-questionnaire-line fs-16"></i>
											</div>
											<span className="flex-fill text-nowrap">
												Help Center
											</span>
										</div>
									</Link>
								</li>
								<li className="files-type">
									<Link to="#">
										<div className="d-flex align-items-center">
											<div className="me-2">
												<i className="ri-folder-line fs-16"></i>
											</div>
											<span className="flex-fill text-nowrap">
												Version
											</span>
										</div>
									</Link>
								</li>
								<li>
									<h6 className="mt-3 mb-0 ">Storage</h6>
								</li>
								<li className="align-items-center justify-content-center">
									<div className="">
										<div id="filestore">
											<Filestore />
										</div>
									</div>
									<div className="d-flex justify-content-center border rounded-2">
										<div className="d-flex p-4 border-end">
											<div className="text-center">
												<p className="mb-1 text-muted"> <i className="bx bxs-circle text-primary fs-13  me-1"></i> Space Used </p>
												<h5 className="mb-0 text-dark op-9">350GB </h5>
											</div>
										</div>
										<div className="d-flex p-4">
											<div className="text-center">
												<p className="mb-1 text-muted"> <i className="bx bxs-circle text-light fs-13  me-1"></i> Free Space</p>
												<h5 className=" mb-0 text-dark op-9">150GB</h5>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</SimpleBar>
					</div>
				</div>
				<div className="file-manager-folders overflow-auto">
					<div className="d-sm-flex p-3 align-items-center justify-content-between border-bottom">
						<div>
							<h6 className="fw-semibold mb-0">Folders</h6>
						</div>
						<div className="d-flex mt-3 mt-sm-0">
							<Button variant="" id="folders-close-btn" className="d-sm-none d-block btn btn-icon btn-sm btn-danger-light me-1">
								<i className="ri-close-fill"></i> </Button>
							<Button variant="" className="btn btn-sm btn-primary d-flex align-items-center justify-content-center btn-wave waves-light me-1"
								onClick={handleShow}
								data-bs-toggle="modal" data-bs-target="#create-folder">
								<i className="ri-add-circle-line align-middle me-1"></i>Create Folder
							</Button>
							<Modal centered show={show} onHide={handleClose} className="modal fade" id="create-folder" tabindex="-1"
								aria-labelledby="create-folder" data-bs-keyboard="false"
								aria-hidden="true">
								<Modal.Header closeButton>
									<h6 className="modal-title" id="staticBackdropLabel">Create Folder
									</h6>
								</Modal.Header>
								<div className="modal-body">
									<label htmlFor="create-folder1" className="form-label">Folder Name</label>
									<input type="text" className="form-control" id="create-folder1" placeholder="Folder Name" />
								</div>
								<Modal.Footer>
									<Button variant="" type="button" className="btn btn-sm btn-icon btn-light" onClick={handleClose}
										data-bs-dismiss="modal"><i className="ri-close-fill"></i></Button>
									<Button variant="" type="button" className="btn btn-sm btn-success">Create</Button>
								</Modal.Footer>
							</Modal>
							<Button variant="" className="btn btn-sm btn-outline-secondary d-flex align-items-center justify-content-center btn-wave waves-light"
								onClick={handleShow1}
								data-bs-toggle="modal" data-bs-target="#create-file">
								<i className="ri-add-circle-line align-middle me-1"></i>Create File
							</Button>
							<Modal centered show={show1} onHide={handleClose1} className="modal fade" id="create-file" tabindex="-1"
								aria-labelledby="create-file" data-bs-keyboard="false"
								aria-hidden="true">
								<Modal.Header closeButton>
									<h6 className="modal-title" id="staticBackdropLabel1">Create File
									</h6>
								</Modal.Header>
								<div className="modal-body">
									<label htmlFor="create-file1" className="form-label">File Name</label>
									<input type="text" className="form-control" id="create-file1" placeholder="File Name" />
								</div>
								<Modal.Footer>
									<Button variant="" type="button" className="btn btn-sm btn-icon btn-light" onClick={handleClose1}
										data-bs-dismiss="modal"><i className="ri-close-fill"></i></Button>
									<Button variant="" type="button" className="btn btn-sm btn-success">Create</Button>
								</Modal.Footer>
							</Modal>
						</div>
					</div>
					<div className="p-4 file-folders-container" id="file-folders-container">
						<div className="d-flex mb-3 align-items-center justify-content-between">
							<p className="mb-0 fw-semibold fs-14">Fileupload</p>
						</div>
						<div className="mb-3">
							<FilePond className="multiple-filepond"
								files={files}
								onupdatefiles={setFiles}
								allowMultiple={true}
								maxFiles={3}
								server="/api"
								name="files" /* sets the file input name, it's filepond by default */
								labelIdle='Drag & Drop your file here or click '
							/>
						</div>
						<div className="d-flex mb-3 align-items-center justify-content-between">
							<p className="mb-0 fw-semibold fs-14">My Files</p>
							<Button variant="" className="btn btn-sm btn-primary-light">View All</Button>
						</div>
						<div className="row mb-3">
							<Col xxl={2} xl={3} lg={4} md={4} className="">
								<Card className="custom-card shadow-none border border-dashed-primary">
									<Card.Body className="card-body p-3 text-center">
										<Link to="#">
											<div className="justify-content-between">
												<div className="file-format-icon">
													<svg xmlns="http://www.w3.org/2000/svg" className="svg-primary" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path opacity="0.3" d="M19 2H5a3.009 3.009 0 0 0-3 3v8.86l3.88-3.88a3.075 3.075 0 0 1 4.24 0l2.871 2.887.888-.888a3.008 3.008 0 0 1 4.242 0L22 15.86V5a3.009 3.009 0 0 0-3-3z" /><path opacity="1" d="M10.12 9.98a3.075 3.075 0 0 0-4.24 0L2 13.86V19a3.009 3.009 0 0 0 3 3h14c.815 0 1.595-.333 2.16-.92L10.12 9.98z" /><path opacity="0.1" d="m22 15.858-3.879-3.879a3.008 3.008 0 0 0-4.242 0l-.888.888 8.165 8.209c.542-.555.845-1.3.844-2.076v-3.142z" /></svg>
												</div>
												<div>
													<span className="fw-semibold mb-1">
														Images
													</span>
													<span className="fs-10 d-block text-muted">
														214.32MB
													</span>
												</div>
											</div>
										</Link>
									</Card.Body>
								</Card>
							</Col>
							<Col xxl={2} xl={3} lg={4} md={4} className="">
								<Card className="custom-card shadow-none border border-dashed-primary">
									<Card.Body className="card-body p-3 text-center">
										<Link to="#">
											<div className="justify-content-between">
												<div className="file-format-icon">
													<svg xmlns="http://www.w3.org/2000/svg" className="svg-secondary" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path opacity="0.3" d="M14 18H5a3.003 3.003 0 0 1-3-3V9a3.003 3.003 0 0 1 3-3h9a3.003 3.003 0 0 1 3 3v6a3.003 3.003 0 0 1-3 3z" /><path opacity="1" d="M21.895 7.554a1 1 0 0 0-1.342-.449l-3.564 1.783c.001.038.01.073.011.112v6c0 .039-.01.074-.011.112l3.564 1.783A1 1 0 0 0 22 16V8a1 1 0 0 0-.105-.446z" /></svg>
												</div>
												<div>
													<span className="fw-semibold mb-1">
														Videos
													</span>
													<span className="fs-10 d-block text-muted">
														1.45GB
													</span>
												</div>
											</div>
										</Link>
									</Card.Body>
								</Card>
							</Col>
							<Col xxl={2} xl={3} lg={4} md={4} className="">
								<Card className="custom-card shadow-none border border-dashed-primary">
									<Card.Body className="card-body p-3 text-center">
										<Link to="#">
											<div className="justify-content-between">
												<div className="file-format-icon">
													<svg xmlns="http://www.w3.org/2000/svg" className="svg-warning" viewBox="0 0 24 24"><path opacity="0.3" d="m20 9-7-7H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3Z" /><path opacity="1" d="M20 9h-5a2 2 0 0 1-2-2V2zm-5 9H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm0-4H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm-5-4H9a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z" /></svg>
												</div>
												<div>
													<span className="fw-semibold mb-1">
														Docs
													</span>
													<span className="fs-10 d-block text-muted">
														432.29KB
													</span>
												</div>
											</div>
										</Link>
									</Card.Body>
								</Card>
							</Col>
							<Col xxl={2} xl={3} lg={4} md={4} className="">
								<Card className="custom-card shadow-none border border-dashed-primary">
									<Card.Body className="card-body p-3 text-center">
										<Link to="#">
											<div className="justify-content-between">
												<div className="file-format-icon">
													<svg xmlns="http://www.w3.org/2000/svg" className="svg-info" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path opacity="0.3" d="M6 21H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h3a3.003 3.003 0 0 1 3 3v2a3.003 3.003 0 0 1-3 3zm15 0h-3a3.003 3.003 0 0 1-3-3v-2a3.003 3.003 0 0 1 3-3h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z" /><path opacity="1" d="M12 3C6.477 3 2 7.477 2 13v1a1 1 0 0 1 1-1h1a8 8 0 0 1 16 0h1a1 1 0 0 1 1 1v-1c0-5.523-4.477-10-10-10z" /></svg>
												</div>
												<div>
													<span className="fw-semibold mb-1">
														Music
													</span>
													<span className="fs-10 d-block text-muted">
														289MB
													</span>
												</div>
											</div>
										</Link>
									</Card.Body>
								</Card>
							</Col>
							<Col xxl={2} xl={3} lg={4} md={4} className="">
								<Card className="custom-card shadow-none border border-dashed-primary">
									<Card.Body className="card-body p-3 text-center">
										<Link to="#">
											<div className="justify-content-between">
												<div className="file-format-icon">
													<svg xmlns="http://www.w3.org/2000/svg" className="svg-success" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><circle cx="12" cy="4" r="2" opacity="0.3" /><path fill="#b7d7fd" d="M12 6a1.98 1.98 0 0 1-1-.277V8a1 1 0 0 0 2 0V5.723A1.98 1.98 0 0 1 12 6z" /><path opacity="0.3" d="M17 22H7a3.003 3.003 0 0 1-3-3v-9a3.003 3.003 0 0 1 3-3h10a3.003 3.003 0 0 1 3 3v9a3.003 3.003 0 0 1-3 3z" /><path opacity="1" d="M14.97 12.243 16.28 7H7.72l1.31 5.243A1 1 0 0 0 10 13h4a1 1 0 0 0 .97-.757z" /><path fill="#b7d7fd" d="M2 18a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1zm20 0a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1z" /><circle cx="9" cy="16" r="1" opacity="1" /><circle cx="15" cy="16" r="1" opacity="1" /></svg>
												</div>
												<div>
													<span className="fw-semibold mb-1">
														Apps
													</span>
													<span className="fs-10 d-block text-muted">
														12.56GB
													</span>
												</div>
											</div>
										</Link>
									</Card.Body>
								</Card>
							</Col>
							<Col xxl={2} xl={3} lg={4} md={4} className="">
								<Card className="custom-card shadow-none border border-dashed-primary">
									<Card.Body className="card-body p-3 text-center">
										<Link to="#">
											<div className="justify-content-between">
												<div className="file-format-icon">
													<svg xmlns="http://www.w3.org/2000/svg" className="svg-danger" viewBox="0 0 24 24"><path opacity="1" d="M15.707 13.293a1 1 0 0 0-1.414 0L13 14.586V3a1 1 0 0 0-2 0v11.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414Z" /><path opacity="0.3" d="M18 9h-5v5.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L11 14.586V9H6a3.003 3.003 0 0 0-3 3v7a3.003 3.003 0 0 0 3 3h12a3.003 3.003 0 0 0 3-3v-7a3.003 3.003 0 0 0-3-3Z" /></svg>
												</div>
												<div>
													<span className="fw-semibold mb-1">
														Downloads
													</span>
													<span className="fs-10 d-block text-muted">
														3.12GB
													</span>
												</div>
											</div>
										</Link>
									</Card.Body>
								</Card>
							</Col>
						</div>
						<div className="d-flex mb-3 align-items-center justify-content-between">
							<p className="mb-0 fw-semibold fs-14">Folders</p>
							<Button variant="" className="btn btn-sm btn-primary-light">View All</Button>
						</div>
						<div className="row mb-3">
							<Col xxl={3} xl={6} lg={6} md={6}>
								<div className="card border custom-card shadow-none">
									<div className="card-body ">
										<div className="mb-4 folder-svg-container d-flex justify-content-between align-items-top">
											<Link to={`${import.meta.env.BASE_URL}pages/filemanager/filedetails`}>
												<svg xmlns="http://www.w3.org/2000/svg" className="svg-warning" data-name="Layer 1" viewBox="0 0 24 24"><path opacity="1" d="M19.97586,10V9a3,3,0,0,0-3-3H10.69678l-.31622-.94868A3,3,0,0,0,7.53451,3H3.97586a3,3,0,0,0-3,3V19a2,2,0,0,0,2,2H3.3067a2,2,0,0,0,1.96774-1.64223l1.40283-7.71554A2,2,0,0,1,8.645,10Z" /><path opacity="0.3" d="M22.02386,10H8.645a2,2,0,0,0-1.96777,1.64221L5.27441,19.35773A2,2,0,0,1,3.3067,21H19.55292a2,2,0,0,0,1.96771-1.64227l1.48712-8.17884A1,1,0,0,0,22.02386,10Z" /></svg>
											</Link>
											<div>
												<Dropdown>
													<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave waves-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
														<i className="ri-more-2-fill"></i>
													</Dropdown.Toggle>
													<Dropdown.Menu>
														<Dropdown.Item href="#">Delete</Dropdown.Item>
														<Dropdown.Item href="#">Rename</Dropdown.Item>
														<Dropdown.Item href="#">Hide Folder</Dropdown.Item>
													</Dropdown.Menu>
												</Dropdown>
											</div>
										</div>
										<p className="fs-14 fw-semibold mb-1 lh-1">
											<Link to="#">Images</Link>
										</p>
										<div className="d-flex align-items-center justify-content-between flex-wrap">
											<div>
												<span className="text-muted fs-12">
													246 Files
												</span>
											</div>
											<div>
												<span className="text-default fw-semibold">
													214.32MB
												</span>
											</div>
										</div>
									</div>
								</div>
							</Col>
							<Col xxl={3} xl={6} lg={6} md={6}>
								<div className="card border custom-card shadow-none">
									<div className="card-body">
										<div className="mb-4 folder-svg-container d-flex justify-content-between align-items-top">
											<Link to={`${import.meta.env.BASE_URL}pages/filemanager/filedetails`}>
												<svg xmlns="http://www.w3.org/2000/svg" className="svg-success" data-name="Layer 1" viewBox="0 0 24 24"><path opacity="1" d="M19.97586,10V9a3,3,0,0,0-3-3H10.69678l-.31622-.94868A3,3,0,0,0,7.53451,3H3.97586a3,3,0,0,0-3,3V19a2,2,0,0,0,2,2H3.3067a2,2,0,0,0,1.96774-1.64223l1.40283-7.71554A2,2,0,0,1,8.645,10Z" /><path opacity="0.3" d="M22.02386,10H8.645a2,2,0,0,0-1.96777,1.64221L5.27441,19.35773A2,2,0,0,1,3.3067,21H19.55292a2,2,0,0,0,1.96771-1.64227l1.48712-8.17884A1,1,0,0,0,22.02386,10Z" /></svg>
											</Link>
											<div>
												<Dropdown>
													<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave waves-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
														<i className="ri-more-2-fill"></i>
													</Dropdown.Toggle>
													<Dropdown.Menu>
														<Dropdown.Item href="#">Delete</Dropdown.Item>
														<Dropdown.Item href="#">Rename</Dropdown.Item>
														<Dropdown.Item href="#">Hide Folder</Dropdown.Item>
													</Dropdown.Menu>
												</Dropdown>
											</div>
										</div>
										<p className="fs-14 fw-semibold mb-1 lh-1">
											<Link to="#">Docs</Link>
										</p>
										<div className="d-flex align-items-center justify-content-between flex-wrap">
											<div>
												<span className="text-muted fs-12">
													17 Files
												</span>
											</div>
											<div>
												<span className="text-default fw-semibold">
													432.39KB
												</span>
											</div>
										</div>
									</div>
								</div>
							</Col>
							<Col xxl={3} xl={6} lg={6} md={6}>
								<div className="card border custom-card shadow-none">
									<div className="card-body">
										<div className="mb-4 folder-svg-container d-flex justify-content-between align-items-top">
											<Link to={`${import.meta.env.BASE_URL}pages/filemanager/filedetails`}>
												<svg xmlns="http://www.w3.org/2000/svg" className="svg-pink" data-name="Layer 1" viewBox="0 0 24 24"><path opacity="1" d="M19.97586,10V9a3,3,0,0,0-3-3H10.69678l-.31622-.94868A3,3,0,0,0,7.53451,3H3.97586a3,3,0,0,0-3,3V19a2,2,0,0,0,2,2H3.3067a2,2,0,0,0,1.96774-1.64223l1.40283-7.71554A2,2,0,0,1,8.645,10Z" /><path opacity="0.3" d="M22.02386,10H8.645a2,2,0,0,0-1.96777,1.64221L5.27441,19.35773A2,2,0,0,1,3.3067,21H19.55292a2,2,0,0,0,1.96771-1.64227l1.48712-8.17884A1,1,0,0,0,22.02386,10Z" /></svg>
											</Link>
											<div>
												<Dropdown>
													<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave waves-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
														<i className="ri-more-2-fill"></i>
													</Dropdown.Toggle>
													<Dropdown.Menu>
														<Dropdown.Item href="#">Delete</Dropdown.Item>
														<Dropdown.Item href="#">Rename</Dropdown.Item>
														<Dropdown.Item href="#">Hide Folder</Dropdown.Item>
													</Dropdown.Menu>
												</Dropdown>
											</div>
										</div>
										<p className="fs-14 fw-semibold mb-1 lh-1">
											<Link to="#">Downloads</Link>
										</p>
										<div className="d-flex align-items-center justify-content-between flex-wrap">
											<div>
												<span className="text-muted fs-12">
													437 Files
												</span>
											</div>
											<div>
												<span className="text-default fw-semibold">
													3.12GB
												</span>
											</div>
										</div>
									</div>
								</div>
							</Col>
							<Col xxl={3} xl={6} lg={6} md={6} className="">
								<Card className="border custom-card shadow-none">
									<Card.Body className="">
										<div className="mb-4 folder-svg-container d-flex justify-content-between align-items-top">
											<Link to={`${import.meta.env.BASE_URL}pages/filemanager/filedetails`}>
												<svg xmlns="http://www.w3.org/2000/svg" className="svg-info" data-name="Layer 1" viewBox="0 0 24 24"><path opacity="1" d="M19.97586,10V9a3,3,0,0,0-3-3H10.69678l-.31622-.94868A3,3,0,0,0,7.53451,3H3.97586a3,3,0,0,0-3,3V19a2,2,0,0,0,2,2H3.3067a2,2,0,0,0,1.96774-1.64223l1.40283-7.71554A2,2,0,0,1,8.645,10Z" /><path opacity="0.3" d="M22.02386,10H8.645a2,2,0,0,0-1.96777,1.64221L5.27441,19.35773A2,2,0,0,1,3.3067,21H19.55292a2,2,0,0,0,1.96771-1.64227l1.48712-8.17884A1,1,0,0,0,22.02386,10Z" /></svg>
											</Link>
											<div>
												<Dropdown>
													<Dropdown.Toggle variant="" className="btn btn-sm btn-icon btn-light btn-wave waves-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
														<i className="ri-more-2-fill"></i>
													</Dropdown.Toggle>
													<Dropdown.Menu>
														<Dropdown.Item href="#">Delete</Dropdown.Item>
														<Dropdown.Item href="#">Rename</Dropdown.Item>
														<Dropdown.Item href="#">Hide Folder</Dropdown.Item>
													</Dropdown.Menu>
												</Dropdown>
											</div>
										</div>
										<p className="fs-14 fw-semibold mb-1 lh-1">
											<Link to="#">Apps</Link>
										</p>
										<div className="d-flex align-items-center justify-content-between flex-wrap">
											<div>
												<span className="text-muted fs-12">
													165 Files
												</span>
											</div>
											<div>
												<span className="text-default fw-semibold">
													12.56GB
												</span>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
						</div>
						<Row>
							<Col xxl={4} xl={5} lg={12} md={12}>
								<div className="d-flex mb-3 align-items-center justify-content-between mt-3">
									<p className="mb-0 fw-semibold fs-14">Storage</p>
								</div>
								<div className="">
									<ul className="mt-4">
										<li className="mb-4">
											<div className="d-flex mb-4 align-items-center">
												<div className="me-3">
													<span className="avatar avatar-md br-5 bg-warning-transparent text-warning"><i className="fe fe-box"></i></span>
												</div>
												<div className="flex-fill">
													<div className="d-flex justify-content-between">
														<h6 className="fw-semibold">
															Internal Storage
														</h6>
														<div>
															<p className="mb-0 fs-13 text-muted">
																<i className="fe fe-arrow-up-right me-1 text-success brround d-inline-flex"></i>40Gb / 500GB
															</p>
														</div>
													</div>
													<ProgressBar variant='warning' className='progress-xs' striped animated now={60} />
												</div>
											</div>
										</li>
										<li className="mb-4">
											<div className="d-flex mb-4 align-items-center">
												<div className="me-3">
													<span className="avatar avatar-md br-5 bg-pink-transparent text-pink"><i className="fe fe-layers"></i></span>
												</div>
												<div className="flex-fill">
													<div className="d-flex justify-content-between">
														<h6 className="fw-semibold">
															External Storage
														</h6>
														<div>
															<p className="mb-0 fs-13 text-muted">
																<i className="fe fe-arrow-up-right me-1 text-success brround d-inline-flex"></i>3Gb / 8GB
															</p>
														</div>
													</div>
													<ProgressBar variant='pink' className='progress-xs' striped animated now={60} />
												</div>
											</div>
										</li>
										<li className="mb-4">
											<div className="d-flex mb-4 align-items-center">
												<div className="me-3">
													<span className="avatar avatar-md br-5 bg-info-transparent text-info"><i className="fe fe-cloud"></i></span>
												</div>
												<div className="flex-fill">
													<div className="d-flex justify-content-between">
														<h6 className="fw-semibold">
															Cloud Storage
														</h6>
														<div>
															<p className="mb-0 fs-13 text-muted">
																<i className="fe fe-arrow-up-right me-1 text-success brround d-inline-flex"></i>10Gb / 176GB
															</p>
														</div>
													</div>
													<ProgressBar variant='info' className='progress-xs' striped animated now={60} />
												</div>
											</div>
										</li>
										<li>
											<div className="d-flex mb-4 align-items-center">
												<div className="me-3">
													<span className="avatar avatar-md br-5 bg-primary-transparent text-primary"><i className="fe fe-grid"></i></span>
												</div>
												<div className="flex-fill">
													<div className="d-flex justify-content-between">
														<h6 className="fw-semibold">
															Other Storage
														</h6>
														<div>
															<p className="mb-0 fs-13 text-muted">
																<i className="fe fe-arrow-up-right me-1 text-success brround d-inline-flex"></i>70Gb / 16GB
															</p>
														</div>
													</div>
													<ProgressBar variant='primary' className='progress-xs' striped animated now={90} />
												</div>
											</div>
										</li>
									</ul>
								</div>
							</Col>
							<Col xxl={8} xl={7} lg={12} md={12}>
								<div className="d-flex mb-3 align-items-center justify-content-between">
									<p className="mb-0 fw-semibold fs-14">Recents</p>
									<Button variant="" className="btn btn-sm btn-primary-light">View All</Button>
								</div>
								<div className="table-responsive border border-bottom-0">
									<table className="table text-nowrap table-hover">
										<thead>
											<tr>
												<th scope="col">File Name</th>
												<th scope="col">Category</th>
												<th scope="col">Size</th>
												<th scope="col">Date Modified</th>
												<th scope="col">Action</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope="row">
													<div className="d-flex align-items-center">
														<div className="me-2">
															<span className="avatar avatar-xs">
																<img src={filemanager1} alt="" />
															</span>
														</div>
														<div className="fs-13">
															VID-00292312-SPK823.mp4
														</div>
													</div>
												</th>
												<td>Videos</td>
												<td>87MB</td>
												<td>22,Nov 2022</td>
												<td>
													<div className="hstack gap-2 fs-15">
														<Link to="#" className="btn btn-icon btn-sm btn-info-light rounded-pill"><i className="ri-eye-line"></i></Link>
														<Link to="#" className="btn btn-icon btn-sm btn-danger-light rounded-pill"><i className="ri-delete-bin-line"></i></Link>
													</div>
												</td>
											</tr>
											<tr>
												<th scope="row">
													<div className="d-flex align-items-center">
														<div className="me-2">
															<span className="avatar avatar-xs">
																<img src={filemanager1} alt="" />
															</span>
														</div>
														<div className="fs-13">
															IMG-09123878-SPK734.jpeg
														</div>
													</div>
												</th>
												<td>Images</td>
												<td>1.35MB</td>
												<td>25,Nov 2022</td>
												<td>
													<div className="hstack gap-2 fs-15">
														<Link to="#" className="btn btn-icon btn-sm btn-info-light rounded-pill"><i className="ri-eye-line"></i></Link>
														<Link to="#" className="btn btn-icon btn-sm btn-danger-light rounded-pill"><i className="ri-delete-bin-line"></i></Link>
													</div>
												</td>
											</tr>
											<tr className="table-active">
												<th scope="row">
													<div className="d-flex align-items-center">
														<div className="me-2">
															<span className="avatar avatar-xs">
																<img src={filemanager1} alt="" />
															</span>
														</div>
														<div className="fs-13">
															AMB-2012.zip
														</div>
													</div>
												</th>
												<td>Archives</td>
												<td>422KB</td>
												<td>23,Nov 2022</td>
												<td>
													<div className="hstack gap-2 fs-15">
														<Link to="#" className="btn btn-icon btn-sm btn-info-light rounded-pill"><i className="ri-eye-line"></i></Link>
														<Link to="#" className="btn btn-icon btn-sm btn-danger-light rounded-pill"><i className="ri-delete-bin-line"></i></Link>
													</div>
												</td>
											</tr>
											<tr>
												<th scope="row">
													<div className="d-flex align-items-center">
														<div className="me-2">
															<span className="avatar avatar-xs">
																<img src={filemanager1} alt="" />
															</span>
														</div>
														<div className="fs-13">
															AUD-1002-2012.mp3
														</div>
													</div>
												</th>
												<td>Archives</td>
												<td>422KB</td>
												<td>23,Nov 2022</td>
												<td>
													<div className="hstack gap-2 fs-15">
														<Link to="#" className="btn btn-icon btn-sm btn-info-light rounded-pill"><i className="ri-eye-line"></i></Link>
														<Link to="#" className="btn btn-icon btn-sm btn-danger-light rounded-pill"><i className="ri-delete-bin-line"></i></Link>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</div>

		</Fragment>
	);
};

export default Filemanager;

import React, { FC, useState } from "react";
import { Row, Card, Col, Form } from "react-bootstrap";

//filepond
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import Showcode from "../../../../components/ui/showcode/showcode";
import { file } from "../../../../components/ui/data/formsdata/formsprism";
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

const Fileuploads = () => {
	const [files, setFiles] = useState([]);
	const [files1, setFiles1] = useState([]);
	const [files2, setFiles2] = useState([]);
	return (
		<>
			<Row>
				<Col xl={6}>
					<Showcode title="Bootstrap File Input" code={file}>
						<Form.Group controlId="formFile" className="mb-3">
							<Form.Label>Default file input example</Form.Label>
							<Form.Control type="file" />
						</Form.Group>
						<Form.Group controlId="formFileMultiple" className="mb-3">
							<Form.Label>Multiple files input example</Form.Label>
							<Form.Control type="file" multiple />
						</Form.Group>
						<Form.Group controlId="formFileDisabled" className="mb-3">
							<Form.Label>Disabled file input example</Form.Label>
							<Form.Control type="file" disabled />
						</Form.Group>
						<Form.Group controlId="formFileSm" className="mb-3">
							<Form.Label>Small file input example</Form.Label>
							<Form.Control type="file" size="sm" />
						</Form.Group>
						<Form.Group controlId="formFileLg" className="mb-3">
							<Form.Label>Large file input example</Form.Label>
							<Form.Control type="file" size="lg" />
						</Form.Group>
					</Showcode>
				</Col>
				<Col xl={6}>
					<Row>
						<Col xl={12}>
							<Card className="custom-card">
								<Card.Header>
									<Card.Title>
										Multiple Upload
									</Card.Title>
								</Card.Header>
								<Card.Body>
									<FilePond className="multiple-filepond"
										files={files}
										onupdatefiles={setFiles}
										allowMultiple={true}
										maxFiles={3}
										server="/api"
										name="files" /* sets the file input name, it's filepond by default */
										labelIdle='Drag & Drop your file here or click '
									/>
								</Card.Body>
							</Card>
						</Col>
						<Col xl={12}>
							<Card className="custom-card">
								<Card.Header>
									<Card.Title>
										Single Upload
									</Card.Title>
								</Card.Header>
								<Card.Body>
									<FilePond className="multiple-filepond single-fileupload"
										files={files1}
										onupdatefiles={setFiles1}
										allowMultiple={true}
										maxFiles={1}
										server="/api"
										name="files" /* sets the file input name, it's filepond by default */
										labelIdle='Drag & Drop your file here or click '
									/>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Dropzone
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<FilePond className="multiple-filepond"
								files={files2}
								onupdatefiles={setFiles2}
								allowMultiple={true}
								maxFiles={3}
								server="/api"
								name="files" /* sets the file input name, it's filepond by default */
								labelIdle='Drag & Drop your file here or click '
							/>
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</>
	);
};

export default Fileuploads;

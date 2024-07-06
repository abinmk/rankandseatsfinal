import React, { FC, Fragment } from "react";
import { Col, Row } from "react-bootstrap";
//IMAGES
import media28 from "../../../assets/images/media/media-28.jpg";
import video1 from "../../../assets/video/1.mp4";
import Showcode from "../../../components/ui/showcode/showcode";
import { object1, object10, object11, object12, object13, object14, object15, object16, object2, object3, object4, object5, object6, object7, object9 } from "../../../components/ui/data/uielementsdata/uielementsprism";

const Objectfit = () => {

	return (
		<Fragment>
			<Row>
				<Col xxl={3} xl={6} lg={6} md={6} sm={12}>
					<Showcode title="Object Fit Contain" code={object1} customCardBodyClass="object-fit-container">
						<img src={media28} className="object-fit-contain border rounded" alt="..." />
					</Showcode>
				</Col>
				<Col xxl={3} xl={6} lg={6} md={6} sm={12}>
					<Showcode title="Object Fit Cover" code={object2} customCardBodyClass="object-fit-container">
						<img src={media28} className="object-fit-cover border rounded" alt="..." />
					</Showcode>
				</Col>
				<Col xxl={3} xl={6} lg={6} md={6} sm={12}>
					<Showcode title="Object Fit Fill" code={object3} customCardBodyClass="object-fit-container">
						<img src={media28} className="object-fit-fill border rounded" alt="..." />
					</Showcode>
				</Col>
				<Col xxl={3} xl={6} lg={6} md={6} sm={12}>
					<Showcode title="Object Fit Scale Down" code={object4} customCardBodyClass="object-fit-container">
						<img src={media28} className="object-fit-scale border rounded" alt="..." />
					</Showcode>
				</Col>
				<Col xxl={3} xl={6} lg={6} md={6} sm={12}>
					<Showcode title="Object Fit None" code={object5} customCardBodyClass="object-fit-container">
						<img src={media28} className="object-fit-none border rounded" alt="..." />
					</Showcode>
				</Col>
				<Col xxl={3} xl={6} lg={6} md={6} sm={12}>
					<Showcode title="Object Fit Contain (SM - responsive)" code={object6} customCardBodyClass="object-fit-container">
						<img src={media28} className="object-fit-sm-contain border rounded" alt="..." />
					</Showcode>
				</Col>
				<Col xxl={3} xl={6} lg={6} md={6} sm={12}>
					<Showcode title="Object Fit Contain (MD - responsive)" code={object7} customCardBodyClass="object-fit-container">
						<img src={media28} className="object-fit-md-contain border rounded" alt="..." />
					</Showcode>
				</Col>
				<Col xxl={3} xl={6} lg={6} md={6} sm={12}>
					<Showcode title="Object Fit Contain (LG - responsive)" code={object9} customCardBodyClass="object-fit-container">
						<img src={media28} className="object-fit-lg-contain border rounded" alt="..." />
					</Showcode>
				</Col>
				<Col xxl={3} xl={6} lg={6} md={6} sm={12}>
					<Showcode title="Object Fit Contain (XL - responsive)" code={object10} customCardBodyClass="object-fit-container">
						<img src={media28} className="object-fit-xl-contain border rounded" alt="..." />
					</Showcode>
				</Col>
				<Col xxl={3} xl={6} lg={6} md={6} sm={12}>
					<Showcode title="Object Fit Contain (XXL - responsive)" code={object11} customCardBodyClass="object-fit-container">
						<img src={media28} className="object-fit-xxl-contain border rounded" alt="..." />
					</Showcode>
				</Col>
				<Col xxl={3} xl={6} lg={6} md={6} sm={12}>
					<Showcode title="Object Fit Contain Video" code={object12} customCardBodyClass="object-fit-container">
						<video src={video1} className="object-fit-contain rounded border" autoPlay loop muted></video>
					</Showcode>
				</Col>
				<Col xxl={3} xl={6} lg={6} md={6} sm={12}>
					<Showcode title="Object Fit Cover Video" code={object13} customCardBodyClass="object-fit-container">
						<video src={video1} className="object-fit-contain rounded border" autoPlay loop muted></video>
					</Showcode>
				</Col>
				<Col xxl={3} xl={6} lg={6} md={6} sm={12}>
					<Showcode title="Object Fit Fill Video" code={object14} customCardBodyClass="object-fit-container">
						<video src={video1} className="object-fit-contain rounded border" autoPlay loop muted></video>
					</Showcode>
				</Col>
				<Col xxl={3} xl={6} lg={6} md={6} sm={12}>
					<Showcode title="Object Fit Scale Video" code={object15} customCardBodyClass="object-fit-container">
						<video src={video1} className="object-fit-contain rounded border" autoPlay loop muted></video>
					</Showcode>
				</Col>
				<Col xxl={3} xl={6} lg={6} md={6} sm={12}>
					<Showcode title="Object Fit None Video" code={object16} customCardBodyClass="object-fit-container">
						<video src={video1} className="object-fit-contain rounded border" autoPlay loop muted></video>
					</Showcode>
				</Col>
			</Row>

		</Fragment>
	);
};

export default Objectfit;

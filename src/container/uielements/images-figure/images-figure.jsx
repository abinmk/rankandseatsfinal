import React, { FC, Fragment } from "react";
import { Col, Row } from "react-bootstrap";

//IMAGES
import media48 from "../../../assets/images/media/media-48.jpg";
import media49 from "../../../assets/images/media/media-49.jpg";
import media50 from "../../../assets/images/media/media-50.jpg";
import media51 from "../../../assets/images/media/media-51.jpg";
import media52 from "../../../assets/images/media/media-52.jpg";
import media55 from "../../../assets/images/media/media-55.jpg";
import media56 from "../../../assets/images/media/media-56.jpg";
import media53 from "../../../assets/images/media/media-53.jpg";
import media54 from "../../../assets/images/media/media-54.jpg";
import media57 from "../../../assets/images/media/media-57.jpg";
import Showcode from "../../../components/ui/showcode/showcode";
import { image1, image2, image3, image4, image5, image6, image7, image8, image9 } from "../../../components/ui/data/uielementsdata/uielementsprism";

const ImagesFigure = () => {

	return (
		<Fragment>
			<Row>
				<Col xl={4}>
					<Showcode title="Responsive image" code={image1}>
						<p className="card-title mb-3">Use <code> .img-fluid </code>class to the img tag to get responsive image.</p>
						<div className="text-center">
							<img src={media48} className="img-fluid" alt="..." />
						</div>
					</Showcode>
				</Col>
				<Col xl={4}>
					<Showcode title="Image With Radius" code={image2}>
						<p className="card-title mb-3">Use <code>.rounded</code> class along with <code>.img-fluid</code> to get border radius.</p>
						<div className="text-center">
							<img src={media49} className="img-fluid rounded" alt="..." />
						</div>
					</Showcode>
				</Col>
				<Col xl={4}>
					<Showcode title="Rounded Image" code={image3}>
						<p className="card-title mb-3">Use <code>.rounded-pill</code> class to <code>img</code> tag to get rounded image.</p>
						<div className="text-center">
							<img src={media50} className="img-fluid rounded-pill" alt="..." />
						</div>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={4}>
					<Showcode title="Image Left Align" code={image4}>
						<img className="rounded float-start" src={media53} alt="..." />
					</Showcode>
				</Col>
				<Col xl={4}>
					<Showcode title="Image Center Align" code={image5}>
						<img className="rounded mx-auto d-block" src={media55} alt="..." />
					</Showcode>
				</Col>
				<Col xl={4}>
					<Showcode title="Image Right Align" code={image6}>
						<img className="rounded float-end" src={media54} alt="..." />
					</Showcode>
				</Col>
				<div className="col-xl-6">
					<Showcode title="Figures" code={image7}>
						<figure className="figure">
							<img className="bd-placeholder-img figure-img img-fluid rounded card-img" src={media56} alt="..." />
							<figcaption className="figure-caption">A caption for the above image.
							</figcaption>
						</figure>
						<figure className="figure float-end">
							<img className="bd-placeholder-img figure-img img-fluid rounded card-img" src={media57} alt="..." />
							<figcaption className="figure-caption text-end">A caption for the above image.
							</figcaption>
						</figure>
					</Showcode>
				</div>
				<div className="col-xl-3">
					<Showcode title="Image Thumbnail" code={image8}>
						<p className="card-title mb-3">Use <code> .img-thumbnail </code>to give an image a rounded 1px border.</p>
						<div className="text-center">
							<img src={media51} className="img-thumbnail" alt="..." />
						</div>
					</Showcode>
				</div>
				<div className="col-xl-3">
					<Showcode title="Rounded Thumbnail" code={image9}>
						<p className="card-title mb-3">Use <code> .rounded-pill </code>along with <code> .img-thummbnail </code> to get radius.</p>
						<div className="text-center">
							<img src={media52} className="img-thumbnail rounded-pill" alt="..." />
						</div>
					</Showcode>
				</div>
			</Row>

		</Fragment>
	);
};

export default ImagesFigure;

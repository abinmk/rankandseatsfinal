import React, { FC, Fragment } from "react";
import { Col, Carousel, Row } from "react-bootstrap";

//IMAGES
import media26 from "../../../assets/images/media/media-26.jpg";
import media27 from "../../../assets/images/media/media-27.jpg";
import media33 from "../../../assets/images/media/media-33.jpg";
import media30 from "../../../assets/images/media/media-30.jpg";
import media28 from "../../../assets/images/media/media-28.jpg";
import media29 from "../../../assets/images/media/media-29.jpg";
import media31 from "../../../assets/images/media/media-31.jpg";
import media59 from "../../../assets/images/media/media-59.jpg";
import media60 from "../../../assets/images/media/media-60.jpg";
import media61 from "../../../assets/images/media/media-61.jpg";
import media43 from "../../../assets/images/media/media-43.jpg";
import media44 from "../../../assets/images/media/media-44.jpg";
import media45 from "../../../assets/images/media/media-45.jpg";
import media25 from "../../../assets/images/media/media-25.jpg";
import media40 from "../../../assets/images/media/media-40.jpg";
import media41 from "../../../assets/images/media/media-41.jpg";
import media42 from "../../../assets/images/media/media-42.jpg";
import media62 from "../../../assets/images/media/media-62.jpg";
import media63 from "../../../assets/images/media/media-63.jpg";
import media64 from "../../../assets/images/media/media-64.jpg";
import media13 from "../../../assets/images/media/media-13.jpg";
import media14 from "../../../assets/images/media/media-14.jpg";
import media18 from "../../../assets/images/media/media-18.jpg";
import Showcode from "../../../components/ui/showcode/showcode";
import { carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8 } from "../../../components/ui/data/advanceuiprismdata/advanceuiprism";

const Carousels = () => {

	return (
		<Fragment>
			<Row>
				<Col xl={4} md={6}>
					<Showcode title="Slides Only" code={carousel1}>
						<Carousel id="carouselExampleSlidesOnly" className="carousel slide carousel-icons" indicators={false}>
							<Carousel.Item className="active">
								<img src={media26} className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src={media27} className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src={media33} className="d-block w-100" alt="..." />
							</Carousel.Item>
						</Carousel>
					</Showcode>
				</Col>
				<Col xl={4} md={6}>
					<Showcode title="With Controls" code={carousel2}>
						<Carousel id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" indicators={false}>
							<Carousel.Item className="active">
								<img src={media28} className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src={media31} className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src={media29} className="d-block w-100" alt="..." />
							</Carousel.Item>
						</Carousel>
					</Showcode>
				</Col>
				<Col xl={4} md={6}>
					<Showcode title="With Indicators" code={carousel3}>
						<Carousel id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
							<Carousel.Item className="active">
								<img src={media25} className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src={media29} className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src={media30} className="d-block w-100" alt="..." />
							</Carousel.Item>
						</Carousel>
					</Showcode>
				</Col>
				<Col xl={4} md={6}>
					<Showcode title="With Captions" code={carousel4}>
						<Carousel id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
							<Carousel.Item className="active">
								<img src={media59} className="d-block w-100" alt="..." />
								<Carousel.Caption className="d-none d-md-block">
									<h5 className='text-fixed-white'>First slide label</h5>
									<p>Some representative placeholder content for the first slide.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img src={media60} className="d-block w-100" alt="..." />
								<Carousel.Caption className="d-none d-md-block">
									<h5 className='text-fixed-white'>Second slide label</h5>
									<p>Some representative placeholder content for the second slide.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img src={media61} className="d-block w-100" alt="..." />
								<Carousel.Caption className="d-none d-md-block">
									<h5 className='text-fixed-white'>Third slide label</h5>
									<p>Some representative placeholder content for the third slide.</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</Showcode>
				</Col>
				<Col xl={4} md={6}>
					<Showcode title="Croosfade" code={carousel5}>
						<Carousel fade id="carouselExampleFade" className="carousel slide carousel-fade" indicators={false}>
							<Carousel.Item className="active">
								<img src={media43} className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src={media44} className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src={media45} className="d-block w-100" alt="..." />
							</Carousel.Item>
						</Carousel>
					</Showcode>
				</Col>
				<Col xl={4} md={6}>
					<Showcode title="Individual .Carousel-item Interval" code={carousel6}>
						<Carousel id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" indicators={false}>
							<Carousel.Item interval={1000} className="active" >
								<img src={media40} className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item interval={2000}>
								<img src={media41} className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item >
								<img src={media42} className="d-block w-100" alt="..." />
							</Carousel.Item>
						</Carousel>
					</Showcode>
				</Col>
			</Row>
			<Row>
				<Col xl={4} md={6}>
					<Showcode title="Disable Touch Swiping" code={carousel7}>
						<Carousel touch={false} id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" indicators={false}
							data-bs-interval="false">
							<Carousel.Item className="carousel-item active">
								<img src={media63} className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src={media64} className="d-block w-100" alt="..." />
							</Carousel.Item>
							<Carousel.Item>
								<img src={media62} className="d-block w-100" alt="..." />
							</Carousel.Item>
						</Carousel>
					</Showcode>
				</Col>
				<Col xl={4} md={6}>
					<Showcode title="Dark Variant" code={carousel8}>
						<Carousel id="carouselExampleDark" className="carousel slide">
							<Carousel.Item className="active" data-bs-interval="10000">
								<img src={media13} className="d-block w-100"
									alt="..." />
								<Carousel.Caption className="d-none d-md-block">
									<h5 className='text-fixed-white'>First slide label</h5>
									<p className="op-7">Some representative placeholder content for the first slide.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item data-bs-interval="2000">
								<img src={media14} className="d-block w-100"
									alt="..." />
								<Carousel.Caption className="d-none d-md-block">
									<h5 className='text-fixed-white'>Second slide label</h5>
									<p className="op-7">Some representative placeholder content for the second slide.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img src={media18} className="d-block w-100"
									alt="..." />
								<Carousel.Caption className="d-none d-md-block">
									<h5 className='text-fixed-white'>Third slide label</h5>
									<p className="op-7">Some representative placeholder content for the third slide.</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</Showcode>
				</Col>
			</Row>
		</Fragment>
	);
};

export default Carousels;

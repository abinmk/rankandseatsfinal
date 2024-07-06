import React, { FC, Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Autoplay, EffectCoverflow, Pagination, Scrollbar, Navigation, EffectFade, EffectCube, Keyboard, Mousewheel, FreeMode, Thumbs, EffectFlip } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

//IMAGES
import media1 from "../../../assets/images/media/media-1.jpg";
import media2 from "../../../assets/images/media/media-2.jpg";
import media3 from "../../../assets/images/media/media-3.jpg";
import media5 from "../../../assets/images/media/media-5.jpg";
import media6 from "../../../assets/images/media/media-6.jpg";
import media7 from "../../../assets/images/media/media-7.jpg";
import media8 from "../../../assets/images/media/media-8.jpg";
import media10 from "../../../assets/images/media/media-10.jpg";
import media11 from "../../../assets/images/media/media-11.jpg";
import media12 from "../../../assets/images/media/media-12.jpg";
import media13 from "../../../assets/images/media/media-13.jpg";
import media15 from "../../../assets/images/media/media-15.jpg";
import media16 from "../../../assets/images/media/media-16.jpg";
import media17 from "../../../assets/images/media/media-17.jpg";
import media18 from "../../../assets/images/media/media-18.jpg";
import media19 from "../../../assets/images/media/media-19.jpg";
import media25 from "../../../assets/images/media/media-25.jpg";
import media26 from "../../../assets/images/media/media-26.jpg";
import media27 from "../../../assets/images/media/media-27.jpg";
import media28 from "../../../assets/images/media/media-28.jpg";
import media29 from "../../../assets/images/media/media-29.jpg";
import media30 from "../../../assets/images/media/media-30.jpg";
import media31 from "../../../assets/images/media/media-31.jpg";
import media33 from "../../../assets/images/media/media-33.jpg";
import media62 from "../../../assets/images/media/media-62.jpg";
import media63 from "../../../assets/images/media/media-63.jpg";
import media64 from "../../../assets/images/media/media-64.jpg";
import media40 from "../../../assets/images/media/media-40.jpg";
import media41 from "../../../assets/images/media/media-41.jpg";
import media42 from "../../../assets/images/media/media-42.jpg";
import media43 from "../../../assets/images/media/media-43.jpg";
import media44 from "../../../assets/images/media/media-44.jpg";
import media32 from "../../../assets/images/media/media-32.jpg";
import media59 from "../../../assets/images/media/media-59.jpg";
import media60 from "../../../assets/images/media/media-60.jpg";
import media61 from "../../../assets/images/media/media-61.jpg";

const Swiperjs = () => {

	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<Fragment>
			<Row>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Basic Swiper
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Swiper
								spaceBetween={30}
								centeredSlides={true}
								autoplay={{ delay: 2500, disableOnInteraction: false }}
								modules={[Autoplay]}
								className="mySwiper swiper swiper-basic"
							>
								<SwiperSlide><img src={media27} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media26} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media25} alt="" /></SwiperSlide>
							</Swiper>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Swiper with Pagination
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, }}
								modules={[Pagination, Autoplay]} className="mySwiper">
								<SwiperSlide><img src={media33} alt="" className="h-100 w-100" /></SwiperSlide>
								<SwiperSlide><img src={media31} alt="" className="h-100 w-100" /></SwiperSlide>
								<SwiperSlide><img src={media33} alt="" className="h-100 w-100" /></SwiperSlide>
							</Swiper>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Swiper With Navigation
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Swiper spaceBetween={30} centeredSlides={true} navigation={true} modules={[Navigation]} className="mySwiper swiper-navigation">
								<SwiperSlide><img src={media28} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media29} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media30} alt="" /></SwiperSlide>
							</Swiper>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Vertical Swiper
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Swiper direction={"vertical"} pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Pagination, Autoplay]} className="mySwiper swiper vertical swiper-vertical">
								<SwiperSlide><img src={media8} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media32} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media17} alt="" /></SwiperSlide>
							</Swiper>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Custom Paginatioin
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Swiper modules={[Pagination, Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false, }} className="mySwiper swiper custom-pagination">
								<SwiperSlide><img src={media25} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media5} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media33} alt="" /></SwiperSlide>
							</Swiper>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Scrollbar Swiper
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Swiper scrollbar={{ hide: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Scrollbar, Autoplay]} className="mySwiper swiper scrollbar-swiper">
								<SwiperSlide><img src={media30} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media28} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media29} alt="" /></SwiperSlide>
							</Swiper>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Pagination Fraction
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Swiper pagination={{ type: "fraction", }} navigation={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
								modules={[Pagination, Navigation, Autoplay]} className="mySwiper swiper pagination-fraction ">
								<SwiperSlide><img src={media16} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media30} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media31} alt="" /></SwiperSlide>
							</Swiper>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Dynamic Pagination
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Swiper autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ dynamicBullets: true, clickable: true, }} modules={[Pagination, Autoplay]} className="mySwiper">
								<SwiperSlide><img src={media15} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media17} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media16} alt="" /></SwiperSlide>
							</Swiper>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Pagination With Progress
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Swiper pagination={{ type: "progressbar", }} autoplay={{ delay: 2500, disableOnInteraction: false, }} navigation={true} modules={[Pagination, Navigation, Autoplay]} className="mySwiper">
								<SwiperSlide><img src={media12} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media8} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media5} alt="" /></SwiperSlide>
							</Swiper>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Effect Fade
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Swiper spaceBetween={30} effect={"fade"} navigation={true} pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
								modules={[EffectFade, Navigation, Pagination, Autoplay]} className="mySwiper swiper swiper-fade">
								<SwiperSlide><img src={media18} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media19} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media13} alt="" /></SwiperSlide>
							</Swiper>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Effect Cube
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Swiper effect={"cube"} grabCursor={true} cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
								pagination={true} modules={[EffectCube, Pagination, Autoplay]} className="mySwiper swiper swiper-effect-cube">
								<SwiperSlide><img src={media62} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media63} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media64} alt="" /></SwiperSlide>
							</Swiper>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Effect Flip
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Swiper effect={"flip"} grabCursor={true} pagination={true} navigation={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
								modules={[EffectFlip, Pagination, Navigation, Autoplay]} className="mySwiper">
								<SwiperSlide><img src={media64} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media62} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media63} alt="" /></SwiperSlide>
							</Swiper>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>Nested Swiper</Card.Title>
						</Card.Header>
						<Card.Body>
							<Swiper className="mySwiper swiper-h swiper swiper-horizontal1" spaceBetween={50} pagination={{ clickable: true, }} modules={[Pagination]}>
								<SwiperSlide><img src={media30} alt="" /></SwiperSlide>
								<SwiperSlide>
									<Swiper className="mySwiper2 swiper-v swiper vertical swiper-vertical1" direction={"vertical"} spaceBetween={50} pagination={{ clickable: true, }}
										modules={[Pagination]}>
										<SwiperSlide><img src={media25} alt="" /></SwiperSlide>
										<SwiperSlide><img src={media31} alt="" /></SwiperSlide>
										<SwiperSlide><img src={media32} alt="" /></SwiperSlide>
									</Swiper>
								</SwiperSlide>
								<SwiperSlide><img src={media28} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media29} alt="" /></SwiperSlide>
							</Swiper>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Keyboard Control
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Swiper slidesPerView={1} spaceBetween={30} keyboard={{ enabled: true, }} pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
								navigation={true} modules={[Keyboard, Pagination, Navigation, Autoplay]} className="mySwiper">
								<SwiperSlide><img src={media31} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media12} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media8} alt="" /></SwiperSlide>
							</Swiper>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Mouse Wheel Control
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Swiper direction={"vertical"} slidesPerView={1} spaceBetween={30} mousewheel={true} pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
								modules={[Mousewheel, Pagination, Autoplay]} className="mySwiper swiper vertical vertical-mouse-control">
								<SwiperSlide><img src={media28} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media30} alt="" /></SwiperSlide>
								<SwiperSlide><img src={media32} alt="" /></SwiperSlide>
							</Swiper>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<div className="col-xl-12">
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Effect Coverflow
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Swiper
								effect={"coverflow"}
								grabCursor={true}
								centeredSlides={false}
								slidesPerView={4}
								autoplay={{ delay: 2500, disableOnInteraction: false, }}
								coverflowEffect={{
									rotate: 50,
									stretch: 0,
									depth: 100,
									modifier: 1,
									slideShadows: true,
								}}
								pagination={{
									clickable: true,
								}}
								modules={[EffectCoverflow, Pagination, Autoplay]}
								className="mySwiper"
							>
								<SwiperSlide><img className="img-fluid" src={media40} alt="img" /></SwiperSlide>
								<SwiperSlide><img className="img-fluid" src={media41} alt="img" /></SwiperSlide>
								<SwiperSlide><img className="img-fluid" src={media42} alt="img" /></SwiperSlide>
								<SwiperSlide><img className="img-fluid" src={media43} alt="img" /></SwiperSlide>
								<SwiperSlide><img className="img-fluid" src={media44} alt="img" /></SwiperSlide>
								<SwiperSlide><img className="img-fluid" src={media59} alt="img" /></SwiperSlide>
								<SwiperSlide><img className="img-fluid" src={media60} alt="img" /></SwiperSlide>
								<SwiperSlide><img className="img-fluid" src={media61} alt="img" /></SwiperSlide>
							</Swiper>
						</Card.Body>
					</Card>
				</div>
			</Row>
			<Row>
				<div className="col-xl-12">
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Thumbs Gallery
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Swiper
								spaceBetween={10} autoplay={{ delay: 2500, disableOnInteraction: false, }} navigation={true} thumbs={{ swiper: thumbsSwiper }}
								modules={[FreeMode, Navigation, Thumbs, Autoplay]} className="mySwiper2 swiper swiper-preview" >
								<SwiperSlide>
									<img className="img-fluid rounded" src={media1} alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img className="img-fluid rounded" src={media2} alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img className="img-fluid rounded" src={media3} alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img className="img-fluid rounded" src={media6} alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img className="img-fluid rounded" src={media6} alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img className="img-fluid rounded" src={media10} alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img className="img-fluid rounded" src={media11} alt="img" />
								</SwiperSlide>

							</Swiper>
							<Swiper
								onSwiper={setThumbsSwiper}
								autoplay={{ delay: 2500, disableOnInteraction: false, }} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true}
								modules={[FreeMode, Navigation, Thumbs, Autoplay]} className="mySwiper swiper swiper-view">
								<SwiperSlide>
									<img className="img-fluid rounded" src={media1} alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img className="img-fluid rounded" src={media2} alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img className="img-fluid rounded" src={media3} alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img className="img-fluid rounded" src={media6} alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img className="img-fluid rounded" src={media7} alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img className="img-fluid rounded" src={media10} alt="img" />
								</SwiperSlide>
								<SwiperSlide>
									<img className="img-fluid rounded" src={media11} alt="img" />
								</SwiperSlide>
							</Swiper>
						</Card.Body>
					</Card>
				</div>
			</Row>

		</Fragment>
	);
};

export default Swiperjs;

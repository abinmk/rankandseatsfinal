import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

//IMAGES
import media40 from "../../../assets/images/media/media-40.jpg";
import media41 from "../../../assets/images/media/media-41.jpg";
import media42 from "../../../assets/images/media/media-42.jpg";
import media43 from "../../../assets/images/media/media-43.jpg";
import media44 from "../../../assets/images/media/media-44.jpg";
import media45 from "../../../assets/images/media/media-45.jpg";
import media46 from "../../../assets/images/media/media-46.jpg";
import media47 from "../../../assets/images/media/media-47.jpg";

export const ProfileGallery = () => {

	const [open, setOpen] = useState(false);
	return (
		<>
			<Row>
				<Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
					<Link to="#" className="glightbox card" data-gallery="gallery1">
						<img src={media40} alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
					<Link to="#" className="glightbox card" data-gallery="gallery1">
						<img src={media41} alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
					<Link to="#" className="glightbox card" data-gallery="gallery1">
						<img src={media42} alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
					<Link to="#" className="glightbox card" data-gallery="gallery1">
						<img src={media43} alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
					<Link to="#" className="glightbox card" data-gallery="gallery1">
						<img src={media44} alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
					<Link to="#" className="glightbox card" data-gallery="gallery1">
						<img src={media45} alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
					<Link to="#" className="glightbox card" data-gallery="gallery1">
						<img src={media46} alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
					<Link to="#" className="glightbox card" data-gallery="gallery1">
						<img src={media47} alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
					<Link to="#" className="glightbox card" data-gallery="gallery1">
						<img src={media43} alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
					<Link to="#" className="glightbox card" data-gallery="gallery1">
						<img src={media42} alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
					<Link to="#" className="glightbox card" data-gallery="gallery1">
						<img src={media44} alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
					<Link to="#" className="glightbox card" data-gallery="gallery1">
						<img src={media45} alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
					<Link to="#" className="glightbox card" data-gallery="gallery1">
						<img src={media40} alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
					<Link to="#" className="glightbox card" data-gallery="gallery1">
						<img src={media46} alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
					<Link to="#" className="glightbox card" data-gallery="gallery1">
						<img src={media42} alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
				<Col xxl={3} xl={3} lg={3} md={6} sm={12} className="">
					<Link to="#" className="glightbox card" data-gallery="gallery1">
						<img src={media40} alt="image" onClick={() => setOpen(true)} />
					</Link>
				</Col>
			</Row>

			<Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} zoom={{
				maxZoomPixelRatio: 10,
				scrollToZoom: true
			}}
			slides={[{ src: media40 }, { src: media41 },
				{ src: media42 }, { src: media43 },
				{ src: media44 }, { src: media45 },
				{ src: media46 }, { src: media47 },
				{ src: media43 }, { src: media42 },
				{ src: media42 }, { src: media44 },
				{ src: media44 }, { src: media45 },
				{ src: media40 }, { src: media46 },
				{ src: media42 }, { src: media40 }]} />

		</>
	);
};

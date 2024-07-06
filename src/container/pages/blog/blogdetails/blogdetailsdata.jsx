import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Col, Row } from "react-bootstrap";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Link } from "react-router-dom";

//IMAGES
import media40 from "../../../../assets/images/media/media-40.jpg";
import media41 from "../../../../assets/images/media/media-41.jpg";
import media27 from "../../../../assets/images/media/media-27.jpg";
import media28 from "../../../../assets/images/media/media-28.jpg";
import media29 from "../../../../assets/images/media/media-29.jpg";
import media30 from "../../../../assets/images/media/media-30.jpg";
import media31 from "../../../../assets/images/media/media-31.jpg";
import media32 from "../../../../assets/images/media/media-32.jpg";
import media33 from "../../../../assets/images/media/media-33.jpg";

export const Filedetailsgallery = () => {

	const [open, setOpen] = useState(false);
	return (
		<>
			<Row id="lightgallery" className="list-unstyled row row-sm gy-3 gx-3">
				<Col sm={6} lg={4}>
					<Link to="#" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
						<img src={media40} alt="image" className="img-responsive br-5 w-100" />
					</Link>
				</Col>
				<Col sm={6} lg={4}>
					<Link to="#" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
						<img src={media41} alt="image" className="img-responsive br-5 w-100" />
					</Link>
				</Col>
				<Col sm={6} lg={4}>
					<Link to="#" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
						<img src={media27} alt="image" className="img-responsive br-5 w-100" />
					</Link>
				</Col>
				<Col sm={6} lg={4}>
					<Link to="#" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
						<img src={media28} alt="image" className="img-responsive br-5 w-100" />
					</Link>
				</Col>
				<Col sm={6} lg={4}>
					<Link to="#" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
						<img src={media29} alt="image" className="img-responsive br-5 w-100" />
					</Link>
				</Col>
				<Col sm={6} lg={4}>
					<Link to="#" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
						<img src={media30} alt="image" className="img-responsive br-5 w-100" />
					</Link>
				</Col>
				<Col sm={6} lg={4}>
					<Link to="#" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
						<img src={media31} alt="image" className="img-responsive br-5 w-100" />
					</Link>
				</Col>
				<Col sm={6} lg={4}>
					<Link to="#" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
						<img src={media32} alt="image" className="img-responsive br-5 w-100" />
					</Link>
				</Col>
				<Col sm={6} lg={4}>
					<Link to="#" className="glightbox" data-gallery="gallery1" onClick={() => setOpen(true)}>
						<img src={media33} alt="image" className="img-responsive br-5 w-100" />
					</Link>
				</Col>
			</Row>

			<Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} zoom={{
				maxZoomPixelRatio: 10,
				scrollToZoom: true
			}}
			slides={[{ src: media40 }, { src: media41 },
				{ src: media27 }, { src: media28 },
				{ src: media29 }, { src: media30 },
				{ src: media31 }, { src: media32 },
				{ src: media33 }]} />

		</>
	);
};

import { Maindata } from "../container/pages/ecommerce/products/productsdata";

//IMAGES
import png1 from "../assets/images/ecommerce/png/1.png";
import png3 from "../assets/images/ecommerce/png/3.png";
import png4 from "../assets/images/ecommerce/png/4.png";
import png6 from "../assets/images/ecommerce/png/6.png";
import png7 from "../assets/images/ecommerce/png/7.png";
import png8 from "../assets/images/ecommerce/png/8.png";
import png9 from "../assets/images/ecommerce/png/9.png";
import png10 from "../assets/images/ecommerce/png/10.png";

const initialState = {
	lang: "en",
	dir: "ltr",
	dataThemeMode: "light",
	dataMenuStyles: "dark",
	dataNavLayout: "vertical",
	dataHeaderStyles: "gradient",
	defaultHeaderStyles: "",
	dataVerticalStyle: "overlay",
	StylebodyBg: "107 64 64",
	StyleDarkBg: "93 50 50",
	toggled: "",
	dataNavStyle: "",
	horStyle: "",
	dataPageStyle: "regular",
	dataWidth: "fullwidth",
	dataMenuPosition: "fixed",
	dataHeaderPosition: "fixed",
	loader: "disable",
	iconOverlay: "",
	colorPrimaryRgb: "",
	bodyBg: "",
	Light: "",
	darkBg: "",
	inputBorder: "",
	bgImg: "",
	iconText: "",
	body: {
		class: ""
	},
	ecommercedata: [
		{
			id: "1",
			preview: png1,
			title: "Ugaoo self water plants",
			description: "Ugaoo mini plant with self watring",
			oldpr: "$1,799",
			newpr: "$1,229",
			offerprice: "72% off",
			quantity: "12,456",
			color: "danger",
			images: [
				{ "img": png1 },
				{ "img": png1 },
				{ "img": png1 }],
			// size :'Large'
		},
		{
			id: "2",
			preview: png10,
			title: "Light color lilly flowers",
			description: "Light color lilly flowers with pots",
			oldpr: "$2,799",
			newpr: "$6,900",
			offerprice: "Offer Price $599",
			quantity: "(13,456)",
			color: "success",
			images: [
				{ "img": png10 },
				{ "img": png10 },
				{ "img": png10 }],

			// size :'Medium'
		},
		{
			id: "3",
			preview: png4,
			title: "Ugoa big leaf",
			description: "Ugoa green color big leaf with pot",
			oldpr: "$4,799",
			newpr: "$4,900",
			offerprice: "Offer Price $599",
			quantity: "3,456",
			color: "success",
			images: [
				{ "img": png4 },
				{ "img": png4 },
				{ "img": png4 }],
			// ribbon: '',
			// size :'Small'
		},
		{
			id: "4",
			preview: png3,
			title: "Money plant",
			description: "Money plant with haning pot",
			oldpr: "$2,799",
			newpr: "$6,900",
			offerprice: "Offer Price $599",
			quantity: "10,456",
			color: "success",
			images: [
				{ "img": png3 },
				{ "img": png3 },
				{ "img": png3 },],
			// ribbon: '',
			// size :'Large'
		},
		{
			id: "5",
			preview: png6,
			title: "Cactus plants",
			description: "Cambo Cactus plants with diffrent color pots",
			oldpr: "$2,799",
			newpr: "$12,900",
			offerprice: "$1,899",
			quantity: "6,456",
			color: "",
			images: [
				{ "img": png6 },
				{ "img": png6 },
				{ "img": png6 }],
			// size :'Large'
		},
		{
			id: "6",
			preview: png7,
			title: "Cactus plants",
			description: "Cambo Cactus plants with diffrent color pots",
			oldpr: "$1,799",
			newpr: "$15,900",
			offerprice: "25% Off",
			quantity: "6,456",
			color: "danger",
			images: [
				{ "img": png7 },
				{ "img": png7 },
				{ "img": png7 }],
			// size :'Medium'
		},
		{
			id: "7",
			preview: png3,
			title: "Ugaoo self water plants",
			description: "Ugaoo mini plant with self watring",
			oldpr: "$1,799",
			newpr: "$1,229",
			offerprice: "72% off",
			quantity: "12,456",
			color: "danger",
			images: [
				{ "img": png3 },
				{ "img": png3 },
				{ "img": png3 }],
			// ribbon: '',
			// size :'Small'
		},
		{
			id: "8",
			preview: png8,
			title: " Red leaf plants",
			description: "Red leaf color plant with pot",
			oldpr: "$2,799",
			newpr: "$6,900",
			offerprice: "Offer Price $599",
			quantity: "13,456",
			color: "success",
			images: [
				{ "img": png8 },
				{ "img": png8 },
				{ "img": png8 }],
			// ribbon: '',
			// size :'Large'
		},
		{
			id: "9",
			preview: png9,
			title: "Ugoa big leaf",
			description: "Ugoa green color big leaf with pot",
			oldpr: "$4,799",
			newpr: "$4,900",
			offerprice: "Offer Price $599",
			quantity: "3,456",
			color: "success",
			images: [
				{ "img": png9 },
				{ "img": png9 },
				{ "img": png9 }],
			// size :'Large'
		},

		{
			id: "10",
			preview: png4,
			title: "Money plant",
			description: "Money plant with haning pot",
			oldpr: "$2,799",
			newpr: "$6,900",
			offerprice: "Offer Price $599",
			quantity: "10,456",
			color: "success",
			images: [
				{ "img": png4 },
				{ "img": png4 },
				{ "img": png4 }],
			//  size :'Medium'
		},

		{
			id: "11",
			preview: png10,
			title: "Cactus plants",
			description: "Cambo Cactus plants with diffrent color pots",
			oldpr: "$2,799",
			newpr: "$12,900",
			offerprice: "$249",
			quantity: "6,456",
			color: "",
			images: [
				{ "img": png10 },
				{ "img": png10 },
				{ "img": png10 }],
			//  size :'Large'
		},
		{
			id: "12",
			preview: png1,
			title: "Cactus plants",
			description: "Cambo Cactus plants with diffrent color pots",
			oldpr: "$1,799",
			newpr: "$15,900",
			offerprice: "25% Off",
			quantity: "6,456",
			color: "danger",
			images: [
				{ "img": png1 },
				{ "img": png1 },
				{ "img": png1 }],
			//  size :'Medium'
		},
	],

};
export default function reducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {

	case "ThemeChanger":
		state = payload;
		return state;
		break;

	case "ADD_TO_CART":
		state.ecommercedata = Maindata.filter((idx) => {
			return idx.id == payload;
		});

		return state;

	case "PRODUCT":
		state.ecommercedata = state.ecommercedata.filter((idx) => {
			return idx.id == payload;
		});
		return state;
		break;

	default:
		return state;
	}
}

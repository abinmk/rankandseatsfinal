//Icons
const icon1 = <i className="bx bxs-dashboard"></i>;//dashboard
const icon2 = <i class='bx bxs-universal-access'></i>//allotments
const icon3 = <i class='bx bxs-chart'></i>//lastRank
const icon4 = <i class='bx bx-rupee'></i>;//Fees
const icon5 = <i class='bx bxs-school'></i>;//institute
const icon6 = <i class='bx bxs-graduation' ></i>;//courses
const icon7 = <i class='bx bxs-heart' ></i>;//wishlist

export const MENUITEMS = [
	{
		menutitle: "     ",
	},
	{
		title: "Dashboards",
		icon: icon1,
		path: `${import.meta.env.BASE_URL}dashboards`,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
	{
		title: "Allotments",
		icon: icon2,
		path: `${import.meta.env.BASE_URL}allotments`,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
	{
		title: "Last Ranks",
		icon: icon3,
		path: `${import.meta.env.BASE_URL}lastrank`,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
	{
		title: "Fee, Stipend & Bonds",
		icon: icon4,
		path: `${import.meta.env.BASE_URL}fees`,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
	{
		title: "Institutes",
		icon: icon5,
		path: `${import.meta.env.BASE_URL}institutes`,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
	{
		title: "Courses",
		icon: icon6,
		path: `${import.meta.env.BASE_URL}courses`,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
	{
		title: "My Choice Wishlist",
		icon: icon7,
		path: `${import.meta.env.BASE_URL}wishlist`,
		type: "link",
		active: false,
		selected: false,
		dirchange: false,
	},
];

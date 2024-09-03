import desktoplogo from "../../../assets/images/brand-logos/desktop-logo.png";

// Icons
const icon1 = <i className="bx bxs-dashboard"></i>; // Dashboard
const icon2 = <i className='bx bxs-universal-access'></i>; // Allotments
const icon3 = <i className='bx bxs-chart'></i>; // LastRank
const icon4 = <i className='bx bx-rupee'></i>; // Fees
const icon5 = <i className='bx bxs-school'></i>; // Institute
const icon6 = <i className='bx bxs-graduation'></i>; // Courses
const icon7 = <i className='bx bxs-heart'></i>; // Wishlist

const logo = (
    <div className="side-menu-logo" style={{ width: '100%' }}>
        <img src={desktoplogo} alt="Logo" style={{ width: '180px', height: 'auto', margin: '0px 30px 0px 0px' }} />
    </div>
);

// Default Menu Items without the logo
const defaultMenuItems = [
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

// Function to determine if the screen is small
const isSmallScreen = () => window.innerWidth < 768;

// Dynamic MENUITEMS variable
export let MENUITEMS = isSmallScreen()
    ? [
        {
            title: "",
            icon: logo, // Logo for small screens
            path: `${import.meta.env.BASE_URL}dashboards`,
            type: "link",
            active: false,
            selected: false,
            dirchange: false,
        },
        ...defaultMenuItems,
    ]
    : defaultMenuItems;

// Event listener to update MENUITEMS dynamically on resize
window.addEventListener('resize', () => {
    MENUITEMS = isSmallScreen()
        ? [
            {
                title: "",
                icon: logo, // Logo for small screens
                path: `${import.meta.env.BASE_URL}dashboards`,
                type: "link",
                active: false,
                selected: false,
                dirchange: false,
            },
            ...defaultMenuItems,
        ]
        : defaultMenuItems;
});
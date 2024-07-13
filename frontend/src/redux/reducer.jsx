const savedState = JSON.parse(localStorage.getItem('themeState'));
const initialState = savedState || {
    // other state properties
    dataThemeMode: "light",
    dataMenuStyles: "light",
    dataNavLayout: "horizontal",
    dataHeaderStyles: "darkBgRGB3",
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
    colorPrimaryRgb: "0, 123, 255", // Blue color in RGB
    bodyBg: "",
    Light: "",
    darkBg: "",
    inputBorder: "",
    bgImg: "",
    iconText: "",
    body: {
        class: ""
    },
    // Add other necessary properties here
};

export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "ThemeChanger":
            return {
                ...state,
                ...payload,
            };

        case "ADD_TO_CART":
            return {
                ...state,
                ecommercedata: Maindata.filter((idx) => idx.id == payload),
            };

        case "PRODUCT":
            return {
                ...state,
                ecommercedata: state.ecommercedata.filter((idx) => idx.id == payload),
            };

        default:
            return state;
    }
}

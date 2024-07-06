import React, { Fragment, useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Header from "../components/common/header/header";
import Switcher from "../components/common/switcher/switcher";
import Sidebar from "../components/common/sidebar/sidebar";
import Pageheader from "../components/pageheader/pageheader";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/common/footer/footer";
import Tabtotop from "../components/common/tab-to-tap/tabtotap";

function App() {
  const [lateLoad, setLateLoad] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLateLoad(true);
  }, []);

  // Determine if the current route should have the footer
  const showFooter = location.pathname === "/home" || location.pathname.startsWith("/dashboard");

  // Determine if the current route should have the page header
  const showPageheader = location.pathname.startsWith("/dashboard");

  return (
    <Fragment>
      <Provider store={store}>
        <div style={{ display: `${lateLoad ? "block" : "none"}` }}>
          <Switcher />
          <div className="page">
            <Header />
            <Sidebar />
            {showPageheader && <Pageheader />}
            <div className="main-content app-content">
              <div className="container-fluid">
                <Outlet />
              </div>
            </div>
            {showFooter && <Footer />}
          </div>
          <Tabtotop />
        </div>
      </Provider>
    </Fragment>
  );
}

export default App;

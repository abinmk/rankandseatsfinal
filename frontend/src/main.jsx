import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/App.jsx";
import Sales from "./container/dashboards/sales/sales.jsx";
import Signupbasic from "./container/authentication/signup/signbasic/signbasic.jsx";
import Signinbasic from "./container/authentication/signin/basic/signinbasic.jsx";
import Twostepbasic from "./container/authentication/twostepverification/twostepbasic/twostepbasic.jsx";
import Auth from "./firebase/auth.jsx";
import Login from "./firebase/login.jsx";
import Signup from "./firebase/signup.jsx";
import Authenticationlayout from "./pages/authenticationlayout.jsx";
import Landinglayout from "./pages/landinglayout.jsx";
import Landing from "./container/pages/landing/landing.jsx";
import Scrolltop from "./components/common/scrolltop/scrolltop.jsx";
import Dashboard from "./container/pages/dashboard/dashboard.jsx";
import Allotments from "./container/pages/allotments/allotments.jsx";
import Colleges from "./container/pages/allotments/Colleges";
import Courses from "./container/pages/allotments/Courses";
import GenerateResults from "./container/pages/generate-data/GenerateResults.jsx";
import Upload from "./container/pages/generate-data/Upload.jsx";
import UploadRound from "./container/pages/generate-data/UploadRound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Scrolltop />
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="upload" element={<Upload />} />
        <Route path="upload/round" element={<UploadRound />} />
        <Route path="/" element={<Auth />}>
          <Route index element={<Login />} />
          <Route path="firebase/login" element={<Login />} />
          <Route path="firebase/signup" element={<Signup />} />
        </Route>
        <Route path="/" element={<App />}>
          <Route path="dashboards" element={<Dashboard />} />
          <Route path="allotments" element={<Allotments />} />
          <Route path="lastrank" element={<Dashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="institutes" element={<Colleges />} />
          <Route path="fees" element={<Dashboard />} />
          <Route path="wishlist" element={<Dashboard />} />
        </Route>
        <Route path="/" element={<Authenticationlayout />}>
          <Route path="authentication/signup/signupbasic" element={<Signupbasic />} />
          <Route path="authentication/signin/signinbasic" element={<Signinbasic />} />
          <Route path="authentication/twostepverification/twostepbasic" element={<Twostepbasic />} />
        </Route>
        <Route path="/" element={<Landinglayout />}>
          <Route path="home" element={<Landing />} />
        </Route>
      </Routes>
    </React.Suspense>
  </BrowserRouter>
);

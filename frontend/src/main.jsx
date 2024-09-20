import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "./pages/App.jsx";
import Signupbasic from "./container/authentication/signup/signbasic/signbasic.jsx";
import Signinbasic from "./container/authentication/signin/basic/signinbasic.jsx";
import Twostepbasic from "./container/authentication/twostepverification/twostepbasic/twostepbasic.jsx";
import Auth from "./firebase/auth.jsx";
import Login from "./firebase/login.jsx";
import Authenticationlayout from "./pages/authenticationlayout.jsx";
import Landinglayout from "./pages/landinglayout.jsx";
import Landing from "./container/pages/landing/landing.jsx";
import Scrolltop from "./components/common/scrolltop/scrolltop.jsx";
import Dashboard from "./container/pages/dashboard/dashboard.jsx";
import Allotments from "./container/pages/allotments/allotments.jsx";
import Colleges from "./container/pages/colleges/colleges.jsx";
import Courses from "./container/pages/course/courses.jsx";
import Fees from "./container/pages/fees/fees.jsx";
import LastRank from "./container/pages/last-rank/LastRank.jsx";
import Upload from "./container/pages/generate-data/Upload.jsx";
import UploadRound from "./container/pages/generate-data/UploadRound";
import ChoiceList from "./container/pages/choiceList/choiceList.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";
import Register from "./firebase/register.jsx";
import ProtectedRoute from './components/ProtectedRoute.jsx';
import CollegeDetail from './container/pages/colleges/CollegeDetails.jsx';
import AboutUs from "./container/pages/Kyc/AboutUs.jsx";
import ContactUs from "./container/pages/Kyc/ContactUs.jsx";
import Pricing from "./container/pages/Kyc/Pricing.jsx";
import Features from "./container/pages/Kyc/Features.jsx";
import TermsAndConditions from "./container/pages/Kyc/TermsAndConditions.jsx";
import PrivacyPolicy from "./container/pages/Kyc/PrivacyPolicy.jsx";
import CancellationRefundPolicy from "./container/pages/Kyc/CancellationRefundPolicy.jsx";
import AdminInformationAlert from "./container/pages/admin/AdminInformationAlert.jsx";
import AdminAlertsAnnouncements from "./container/pages/admin/AdminAlertsAnnouncements.jsx";
import EventsUpdate from "./container/pages/admin/EventsUpdate.jsx";
import CardsUpdate from "./container/pages/admin/CardsUpdate.jsx";
import AdminDashboard from "./container/pages/admin/AdminMain.jsx";
import AdminRoute from "./container/pages/admin/AdminRoute.jsx";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import SeatMatrix from "./container/pages/seatMatrix/seatMatrix.jsx";
import AdmittedStudents from "./container/pages/admittedStudents/admittedStudents.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <BrowserRouter>
      <Scrolltop />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Admin routes */}
          <Route path="admin-access/superuser/secure-zone/" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          {/* <Route path="admin-info" element={<AdminRoute><AdminInformationAlert /></AdminRoute>} />
          <Route path="admin-alert" element={<AdminRoute><AdminAlertsAnnouncements /></AdminRoute>} />
          <Route path="admin-events" element={<AdminRoute><EventsUpdate /></AdminRoute>} />
          <Route path="admin-cards" element={<AdminRoute><CardsUpdate /></AdminRoute>} />
          <Route path="admin-upload" element={<AdminRoute><Upload /></AdminRoute>} /> */}

          {/* Auth routes */}
          <Route path="/" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* Protected user routes */}
          <Route path="/" element={<App />}>
            <Route path="dashboards" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="allotments" element={<ProtectedRoute><Allotments /></ProtectedRoute>} />
            <Route path="lastrank" element={<ProtectedRoute><LastRank/></ProtectedRoute>} />
            <Route path="courses" element={<ProtectedRoute><Courses/></ProtectedRoute>} />
            <Route path="institutes" element={<ProtectedRoute><Colleges /></ProtectedRoute>} />
            <Route path="seatmatrix" element={<ProtectedRoute>< SeatMatrix/></ProtectedRoute>} />
            <Route path="admittedstudents" element={<ProtectedRoute>< AdmittedStudents/></ProtectedRoute>} />
            <Route path="fees" element={<ProtectedRoute><Fees/></ProtectedRoute>} />
            <Route path="wishlist" element={<ProtectedRoute><ChoiceList/></ProtectedRoute>} />
            <Route path="college/:collegeName" element={<CollegeDetail />} />
          </Route>

          {/* Public routes */}
          <Route path="/" element={<Landinglayout />}>
            <Route index element={<Landing />} />
            <Route path="home" element={<Landing />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="features" element={<Features />} />
            <Route path="terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="cancellation-refund-policy" element={<CancellationRefundPolicy />} />
          </Route>

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  </UserProvider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import LastRank from "./container/pages/lastRank/fees.jsx";
import Upload from "./container/pages/generate-data/Upload.jsx";
import UploadRound from "./container/pages/generate-data/UploadRound";
import ChoiceList from "./container/pages/choiceList/choiceList.jsx";
import 'primereact/resources/themes/saga-blue/theme.css';  // Choose the theme you want
import 'primereact/resources/primereact.min.css';         // Core CSS
import 'primeicons/primeicons.css';                       // Icons
import { UserProvider } from "./contexts/UserContext.jsx";
import Register from "./firebase/register.jsx";
import ProtectedRoute from './components/ProtectedRoute.jsx';
import CollegeDetail from './container/pages/colleges/CollegeDetails.jsx';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
  <BrowserRouter>
    <Scrolltop />
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="upload" element={<Upload />} />
        <Route path="upload/round" element={<UploadRound />} />
        <Route path="/" element={<Auth />}>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/" element={<App />}>
          <Route path="dashboards" element={<Dashboard />} />
          <Route path="allotments" element={<ProtectedRoute><Allotments /></ProtectedRoute>} />
          <Route path="lastrank/" element={<ProtectedRoute><LastRank/></ProtectedRoute>} />
          <Route path="courses" element={<ProtectedRoute><Courses/></ProtectedRoute>} />
          <Route path="institutes" element={<ProtectedRoute><Colleges /></ProtectedRoute>} />
          <Route path="fees" element={<ProtectedRoute><Fees/></ProtectedRoute>} />
          <Route path="wishlist" element={<ProtectedRoute><ChoiceList username='dummyUser'/></ProtectedRoute>}/>
          <Route path="/college/:id" element={<CollegeDetail />} />
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
  </UserProvider>
);

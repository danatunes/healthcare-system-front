import { Navigate, Route, Routes } from "react-router-dom";
import { StartPageLayout } from "./layouts/start-page-layout";
import { MainLayout } from "./layouts/main-layout";
import { IndexLayout } from "./layouts/index-layout";
import { DoctorLayout } from "./layouts/doctor-layout";
import { lazy } from "react";

const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/signUp"));
const Confirm = lazy(() => import("./pages/confirm"));
const ResetPassword = lazy(() => import("./pages/resetPassword"));
const DoctorProfile = lazy(() => import("./pages/profile/doctorProfile"));
const DoctorPatients = lazy(() => import("./pages/doctorPatients"));
const PatientProfile = lazy(() => import("./pages/profile/patientProfile"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/main" replace />} />
      <Route exact path="/" element={<StartPageLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>
      <Route exact path="/" element={<IndexLayout />}>
        <Route path="main" element={<MainLayout />} />
        <Route path="doctor" element={<DoctorLayout />}>
          <Route path="" element={<DoctorProfile />} />
          <Route path="patients" element={<DoctorPatients />} />
        </Route>
        <Route path="patient" element={<PatientProfile />}>
          <Route path="clinic" element={<div>clinic</div>} />
        </Route>
      </Route>
      {/*<Route exact path='/main' element={token===null ? <Navigate to='/signUp'/> : <Navigate to='/main'/>}/>*/}
      <Route path="*" element={<Navigate to="/main" />} />
    </Routes>
  );
}

export default App;

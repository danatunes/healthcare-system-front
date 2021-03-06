import { Navigate, Route, Routes } from "react-router-dom";
import { StartPageLayout } from "./layouts/start-page-layout";
import { MainLayout } from "./layouts/main-layout";
import { IndexLayout } from "./layouts/index-layout";
import { DoctorLayout } from "./layouts/doctor-layout";
import { lazy } from "react";
import { ChosenClinic } from "./pages/patient/chosenClinic/chosenClinic";
import DoctorProfileCalendar from "./components/doctorProfileCalendar";

const Login = lazy(() => import("./pages/auth/login"));
const SignUp = lazy(() => import("./pages/auth/signUp"));
const Confirm = lazy(() => import("./pages/auth/confirm"));
const ResetPassword = lazy(() => import("./pages/auth/resetPassword"));
const DoctorProfile = lazy(() =>
  import("./pages/doctor/profile/doctorProfile")
);
const DoctorPatients = lazy(() => import("./pages/doctor/doctorPatients"));
const WaitingList = lazy(() => import("./pages/doctor/waitingList"));
const PatientProfile = lazy(() =>
  import("./pages/patient/profile/patientProfile")
);
const PatientProfileForDoctor = lazy(() =>
  import("./pages/doctor/profile/patientProfileForDoctor")
);
const PatientClinic = lazy(() => import("./pages/patient/patientClinic"));
const PatientClinics = lazy(() => import("./pages/patient/patientClinics"));
const Doctors = lazy(() => import("./pages/patient/chosenClinic/doctors"));

const DoctorProfileForPatient = lazy(() =>
  import("./pages/patient/profile/doctorProfileForPatient")
);
const Feedback = lazy(() => import("./components/feedback"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/main" replace />} />
      <Route exact path="/" element={<StartPageLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="confirm" element={<Confirm />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
      <Route exact path="/" element={<IndexLayout />}>
        <Route path="main" element={<MainLayout />} />
        <Route path="admin">
          <Route path="clinics" element={<div>Hospital</div>} />
          <Route path="clinic-admins" element={<div>Hospital</div>} />
          <Route path="add-doctor" element={<div>Hospital</div>} />
        </Route>
        <Route path="doctor" element={<Navigate to=":id" replace />} />
        <Route path="doctor" element={<DoctorLayout />}>
          <Route path=":id" element={<DoctorProfile />} />
          <Route path="patients">
            <Route path="" element={<DoctorPatients />} />
            <Route path=":id" element={<PatientProfileForDoctor />} />
            <Route path="waiting-list" element={<WaitingList />} />
          </Route>
        </Route>
        <Route exact path="patient">
          <Route path="" element={<PatientProfile />} />
          <Route path="clinic" element={<PatientClinic />} />
          <Route path="clinics">
            <Route path="" element={<PatientClinics />} />
            <Route path=":id" element={<ChosenClinic />}>
              <Route path="" element={<Doctors />} />
              <Route
                path="feedback"
                element={
                  <>
                    <Feedback />
                    <Feedback />
                    <Feedback />
                    <Feedback />
                    <Feedback />
                  </>
                }
              />
            </Route>
          </Route>
        </Route>
        <Route path="doctors">
          <Route exact path=":id" element={<DoctorProfileForPatient />}>
            <Route
              path=""
              element={
                <div className="p-7">
                  ???????????? ?????????????? ???????????? ???? ???????????? ??????????, ?????? ???????? ?? ?????????????? ??
                  ?????????????????? ???????????????? ???? 5 ?????? ???? ?????????? ??????????????????????????????????
                  ??????????????????
                </div>
              }
            />
            <Route
              path="feedback"
              element={
                <>
                  <Feedback />
                  <Feedback />
                  <Feedback />
                  <Feedback />
                  <Feedback />
                </>
              }
            />
            <Route path="calendar" element={<DoctorProfileCalendar />} />
          </Route>
        </Route>
      </Route>
      {/*<Route exact path='/main' element={token===null ? <Navigate to='/signUp'/> : <Navigate to='/main'/>}/>*/}
      <Route path="*" element={<Navigate to="/main" />} />
    </Routes>
  );
}

export default App;

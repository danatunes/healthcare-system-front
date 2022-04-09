import { SignUp } from "./pages/";
import { Navigate, Route, Routes } from "react-router-dom";
import { StartPageLayout } from "./layouts/start-page-layout";
import { Confirm } from "./pages/confirm";
import { Login } from "./pages/login";
import { ResetPassword } from "./pages/resetPassword";
import { MainLayout } from "./layouts/main-layout";
import { IndexLayout } from "./layouts/index-layout";
import { DoctorProfile } from "./pages/doctor-profile";

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
        <Route path="doctor-profile" element={<DoctorProfile />} />
      </Route>
      {/*<Route exact path='/main' element={token===null ? <Navigate to='/signUp'/> : <Navigate to='/main'/>}/>*/}
      <Route path="*" element={<Navigate to="/main" />} />
    </Routes>
  );
}

export default App;

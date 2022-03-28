import { SignUp } from "./pages/";
import { Navigate, Route, Routes } from "react-router-dom";
import { StartPageLayout } from "./layouts/start-page-layout";
import { Confirm } from "./pages/confirm";
import { Login } from "./pages/login";
import { ResetPassword } from "./pages/resetPassword";
import { MainLayout } from "./layouts/main-layout";
import { IndexLayout } from "./layouts/index-layout";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<StartPageLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>
      <Route exact path="/main" element={<IndexLayout />}>
        <Route path="" element={<MainLayout />} />
      </Route>
      {/*<Route exact path='/main' element={token===null ? <Navigate to='/signUp'/> : <Navigate to='/main'/>}/>*/}
      <Route path="*" element={<Navigate to="/main" />} />
    </Routes>
  );
}

export default App;

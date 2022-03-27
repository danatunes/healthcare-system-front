import {Main, SignUp} from "./pages/"
import {Navigate, Route, Routes} from "react-router-dom";
import {StartPageLayout} from "./layouts/start-page-layout";
import {Confirm} from "./pages/Confirm";
import {Login} from "./pages/Login";


function App() {
    return (
        <Routes>
            <Route exact path='/' element={<StartPageLayout/>}>
                <Route path="/login" element={<Login/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/confirm" element={<Confirm/>}/>
            </Route>
            <Route exact path='/main' element={<Main/>}/>
            {/*<Route exact path='/main' element={token===null ? <Navigate to='/signUp'/> : <Navigate to='/main'/>}/>*/}
            <Route path="*" element={<Navigate to='/main'/>}/>
        </Routes>
    )
}

export default App

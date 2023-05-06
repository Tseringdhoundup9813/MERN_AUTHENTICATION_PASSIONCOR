import {Routes,Route, BrowserRouter} from "react-router-dom";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
import Profilelayout from "./Layouts/ProfileLayout/Profilelayout";
import Login from "./Component/Login";
import ResetLayout from "./Layouts/ResetLayout/ResetLayout";
import ActiveLayout from "./Layouts/ActivateLayout/ActiveLayout";
function App() {
  const isloogedIn = false;
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={isloogedIn?<Profilelayout/>:<AuthLayout/>}></Route>
      <Route path="/auth/reset-password/:token" exact element={<ResetLayout></ResetLayout>}></Route>
      <Route path="api/auth/active/:active_token" exact element={<ActiveLayout></ActiveLayout>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;

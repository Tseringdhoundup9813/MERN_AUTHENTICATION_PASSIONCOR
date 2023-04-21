import {Routes,Route, BrowserRouter} from "react-router-dom";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
import Profilelayout from "./Layouts/ProfileLayout/Profilelayout";
import Login from "./Component/Login";

function App() {
  const isloogedIn = true;
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={isloogedIn?<Profilelayout/>:<AuthLayout/>}></Route>

    </Routes>
   </BrowserRouter>
  );
}

export default App;

import {
  createBrowserRouter,
  RouterProvider, createRoutesFromElements, Route
} from "react-router-dom";

import Registration from "./pages/Registration";
import Login from "./pages/Login";
// import ForgotPassword from "./pages/ForgotPassword.jsx";
import Home  from "./pages/Home";
import  RootLayout  from "./components/RootLayout";
import Message from "./components/Message";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path="/" element={<Registration />}></Route>
     <Route path="/login" element={<Login />}></Route>
     {/* <Route path="/forgotpassword" element={<ForgotPassword />}></Route> */}
     <Route path="/bachal" element={<RootLayout/>}>
      <Route path="home" element={<Home/>}></Route>
      <Route path="message" element={<Message/>}></Route>
    </Route>

    </>
    
  )
);

function App() {
 

  return (
    <RouterProvider router={router} />
  )
}

export default App

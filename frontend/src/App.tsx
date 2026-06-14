import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import MainComp from "./components/MainComp/MainComp";
import VolunteerForm from "./components/VolunteerForm/VolunteerForm";
import HelpRequests from "./components/HelpRequests/HelpRequests";
import Profile from "./components/Profile/Profile";
import Message from "./components/Message/Message";
import React from "react";

const VolunteersLazy = React.lazy(
    () => import("./components/Volunteers/Volunteers"),
  );
function App() {
  

  return (
    <>
      <Message></Message>
      <Routes>
        <Route
          path="/"
          element={
            <MainComp>
            </MainComp>
          }
        >
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="Volunteers"
            element={<VolunteersLazy></VolunteersLazy>}
          ></Route>
          
          <Route
            path="helpRequests"
            element={<HelpRequests></HelpRequests>}
          ></Route>
          <Route path="login" element={<LogIn></LogIn>}></Route>
          <Route
            path="VolunteerForm"
            element={<VolunteerForm isEdit={false}></VolunteerForm>}
          ></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
        </Route>
{/* <Route path="helpRequests/:id" element={<RequestDetails></RequestDetails>}></Route> */}
        {/* <Route path='*' element={<NotFound></NotFound>}></Route> */}
      </Routes>
    </>
  );
}

export default App;

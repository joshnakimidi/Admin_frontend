import React from "react";
import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Students from "./Pages/students";
import Companies from "./Pages/Companies";
import Jobpostings from "./Pages/jobpostings";
import Events from "./Pages/Events";
import Logout from "./Pages/logout";

const App = () =>
{
  return (
   <BrowserRouter>
   <Sidebar>
   <Routes>
    <Route path="/"element={<Dashboard/>}/>
    <Route path="/dashboard"element={<Dashboard/>}/>
    <Route path="/profile"element={<Profile/>}/>
    <Route path="/students"element={<Students/>}/>
    <Route path="/companies"element={<Companies/>}/>
    <Route path="/jobpostings"element={<Jobpostings/>}/>
    <Route path="/events"element={<Events/>}/>
    <Route path="/logout"element={<Logout/>}/>
   </Routes>
   </Sidebar>
   </BrowserRouter>
  );
};
 export default App;



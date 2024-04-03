import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/SignUp/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { AllMissions } from "./Pages/AllMissions/AllMissions";
import { AllUsers } from "./Pages/AllUsers/AllUsers";

const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/missions" element={<AllMissions />} />
        <Route path="/admin/users" element={<AllUsers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

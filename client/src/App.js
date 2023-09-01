import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./Website/Landing/page.tsx";
import Dash from "./Website/Dashboard/page.tsx";
import Login from "./Website/Login/page.tsx";
import Signup from "./Website/Signup/page.tsx";



const App = () => {
  const location = useLocation();

  // Check if the current location is "/dashboard"
  const isDashboardRoute = location.pathname === "/dashboard";

  return (
    <div>
      {!isDashboardRoute && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Create />} />
        <Route path="/dashboard" element={<Dash />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;

import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./Website/Landing/page.tsx";
import Dash from "./Website/Dashboard/page.tsx";
import Login from "./Website/Login/page.tsx";
import Signup from "./Website/Signup/page.tsx";
import Contact from "./Website/Contact/page.tsx";
import Apply from "./Website/Application/page.tsx";
import Profile from "./Website/Profile/page.tsx";
import Footer from "./components/footer";
import Auth from "./Website/Authtest1/page.tsx";
import { useEffect } from "react";







const App = () => {
function handleCallebackResponse(response){
console.log("Encoded Token" + response.credential);
}

useEffect(() => {
  /* global google */
  google.accounts.id.initialize({
    client_id : "472451755762-h639c9c5bcfp2f5arkr7ok9mbbu4vlb5.apps.googleusercontent.com",
    callback : handleCallebackResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("googleButton"),
    {theme: "outline", size: "medium", shape: "pill"}
  );
}, []);

  const location = useLocation();

  const isDashboardRoute = location.pathname === "/dashboard";

  return (
    <div>
      {!isDashboardRoute && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Create />} />
        /*<Route path="/dashboard" element={<Dash />} />*/
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/application" element={<Apply />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer/>

    </div>
  );
};

export default App;

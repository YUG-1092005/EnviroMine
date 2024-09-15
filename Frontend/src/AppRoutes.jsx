import React, { useState, useEffect } from "react";
import {
  Route,
  Routes,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Calculator from "./Components/EmissionCalculator/Calculator.jsx";
import Homepage from "./Components/Homepage/Homepage.jsx";
import Signup from "./Components/Authentication/Signup.jsx";
import Login from "./Components/Authentication/Login.jsx";
import About from "./Components/About/About.jsx";
import Trust from "./Components/Trust/trust.jsx"


const AppRoutes = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "PUSH" || navigationType === "POP") {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [location, navigationType]);

  return (
    <div>
      {loading ? (
        <div className="loader-wrapper">
          <ClipLoader
            color={"#80bbbb"}
            loading={loading}
            size={90}
            className="loader"
          />
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/environmine/calculation" element={<Calculator />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/enviromine/trustus" element={<Trust />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default AppRoutes;

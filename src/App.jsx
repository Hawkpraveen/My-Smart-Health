import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SplashScreen from "./Components/SplashScreen";
import Login from "./Components/Login";
import MainLayout from "./Pages/MainLayout";
import CreateAppointment from "./Components/CreateAppointment";
import OnlineConsultation from "./Components/OnlineConsultation";
import DoctorProfile from "./Components/DoctorProfile";
import BookAppointment from "./Components/BookAppointment";
import PatientDetails from "./Components/PatientDetails";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleFinishSplash = () => {
    setShowSplash(false); 
  };

  return (
    <BrowserRouter>
      <Routes>
        {showSplash ? (
          <Route
            path="/"
            element={<SplashScreen onFinish={handleFinishSplash} />}
          />
        ) : (
          <Route path="/" element={<Navigate to="/login" />} />
        )}

        <Route path="/login" element={<Login />} />
        <Route path="/layout" element={<MainLayout />} />
        <Route path="/create-appointment" element={<CreateAppointment />} />
        <Route path="/online-consultation" element={<OnlineConsultation />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/book-appointment/:id" element={<BookAppointment />} />
        <Route path="/patient-details/:id" element={<PatientDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

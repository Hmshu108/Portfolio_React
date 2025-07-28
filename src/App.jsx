import React from "react";
import Home from "./Pages/Home";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router";
import AboutPage from "./Pages/AboutPage";
import ServicePage from "./Pages/ServicePage";
import ContactUsPage from "./Pages/ContactUsPage";

const App = () => {
  return (
    <div className="bg-[#131313] text-white ">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactUsPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

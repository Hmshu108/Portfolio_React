import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Resume from "../components/Resume";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Mywork from "../components/Mywork";
import Pricing from "../components/Pricing";
import GetInTouch from "../components/GetInTouch";
import Blogs from "../components/Blogs";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="overflow-x-hidden  ">
        {/* Hero Section */}
        <Hero />

        {/* about me */}
        <About />

        {/* Resume */}

        <Resume />
        {/* Services */}
        <Services />

        {/* Skills */}
        <Skills />

        {/* My Work */}
        <Mywork />

        {/* Pricing Package */}

        <Pricing />
        {/* Get in Touch */}
        <GetInTouch />

        {/* News and Blogs */}
        <Blogs />

        {/* Clients */}
        <Clients />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;

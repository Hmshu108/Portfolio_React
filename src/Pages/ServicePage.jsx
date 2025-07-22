import React from "react";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import PageDescriptionHeader from "../components/PageDescriptionHeader";
import do1 from "../assets/what-i-do1.jpg";
import do2 from "../assets/what-i-do2.jpg";
import "./ServicePage.css";

const ServicePage = () => {
  return (
    <div className="px-[0.75rem] ">
      <PageDescriptionHeader pageName={"Popular Services"} />
      <div className="service-page-hero flex flex-col mb-20 ">
        <div className="service-page-hero-left mt-20 relative px-[0.75rem]">
          <img className="w-[80%]" src={do1} alt="" />
          <img
            className="service-page-hero-image w-[70%] relative bottom-10 left-20"
            src={do2}
            alt=""
          />
        </div>

        <div className="service-page-hero-right flex flex-col gap-4 mt-10">
          <p className="service-page-hero-title text-xl opacity-70 font-semibold ">
            What I Do
          </p>
          <p className="service-page-hero-heading text-3xl font-semibold">
            Real <span className="text-[#c9f31d]">Problem Solutions</span>{" "}
            Experience
          </p>
          <p className="text-lg opacity-70 mt-2 leading-9">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
            facere! Ea eum minus beatae commodi.
          </p>
          <ul className="flex flex-col gap-3 mt-5 text-xl opacity-70">
            <li>5+ Years of Experience</li>
            <li>Professional Web Designer</li>
            <li>Mobile App Design</li>
          </ul>
          <button className="bg-[#c9f31d] font-bold text-lg px-6 py-2 rounded-lg w-[40%] text-black mt-4">
            Learn More
          </button>
        </div>
      </div>
      <Services />
      <Pricing />
      <Footer />
    </div>
  );
};

export default ServicePage;

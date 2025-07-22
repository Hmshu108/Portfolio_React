import React from "react";
import PageDescriptionHeader from "../components/PageDescriptionHeader";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
const ContactUsPage = () => {
  return (
    <div>
      <PageDescriptionHeader pageName={"Contact Us"} />
      <GetInTouch/>
      <Footer/>
    </div>
  );
};

export default ContactUsPage;

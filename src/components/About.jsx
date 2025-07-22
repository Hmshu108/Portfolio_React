import React from "react";
import envelopeIcon from "../assets/envelope.png";
import telephone from "../assets/telephone.png";
import about from "../assets/aboutImg.jpg";
import btnImg1 from "../assets/btn-image1.png";
import btnImg2 from "../assets/btn-image2.png";
const About = () => {
  return (
    <section className="pt-24 px-[0.75rem] pb-24">
      <div className="about-me">
        <div className="about-me-left mb-14">
          <div className="about-me-left-top mb-9">
            <h1 className="font-bold opacity-70 text-lg pb-4">About Me</h1>
            <p className="text-3xl leading-10 mb-6 font-medium">
              Professional
              <span className="text-[#C9F31D]"> Problem Solutions</span> For
              Digital Products
            </p>
            <p className="mb-[1rem] opacity-70 font-medium text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ut
              doloremque facere odio quae, nam debitis velit. Incidunt quisquam
              in id tenetur sequi nam neque eligendi sint quo, iure odio.
            </p>
          </div>
          <div className="about-me-left-middle">
            <ul className="about-me-left-middle-list flex flex-col gap-5 text-xl font-semibold">
              <li>Branding & Design</li>
              <li>Digital Marketing</li>
              <li>Web Development</li>
              <li>Product Design</li>
            </ul>
          </div>

          <div className="about-me-left-bottom mt-6 py-4 px-10 bg-[#1F1F1F] rounded-xl flex flex-col gap-4">
            <div className=" flex gap-4 items-center">
              <div className="h-10 w-10  rounded-full bg-[#C9F31D] flex items-center justify-center">
                <img src={envelopeIcon} className="envelope h-6 w-6 "></img>
              </div>
              <div>
                <span className="font-medium opacity-70">Email Us</span>
                <br />
                <a
                  href="mailto:support@gmail.com"
                  className="text-lg font-medium"
                >
                  support@gmail.com
                </a>
              </div>
            </div>
            <div className=" flex gap-4 items-center">
              <div className="h-10 w-10  rounded-full bg-[#C9F31D] flex items-center justify-center">
                <img src={telephone} className="envelope h-6 w-6 "></img>
              </div>
              <div>
                <span className="font-medium opacity-70">Make a Call</span>
                <br />
                <a href="callto:+911234567890" className="text-lg font-medium">
                  +880 (123) 456 88
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="about-me-right relative">
          <div className=" flex justify-end pl-24">
            <img
              src={about}
              alt=""
              className="about-me-image w-[320px] h-[266px] object-cover object-top rounded-xl"
            ></img>
          </div>
          <div className="about-me-btn1 flex gap-2 items-center absolute bottom-24 left-4 py-2 px-4 bg-white rounded-full text-black">
            <img src={btnImg1} alt="" className="w-6 h-6"></img>
            <h1 className="text-xl font-semibold">Experience Designer</h1>
          </div>
          <div className="about-me-btn2 flex gap-2 items-center absolute bottom-6 left-2 py-2 px-4 bg-white rounded-full text-black">
            <img src={btnImg2} alt="" className="w-6 h-6"></img>
            <h1 className="text-xl font-semibold">Mark J. Collins</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

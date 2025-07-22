import React, { useState } from "react";
import { NavLink } from "react-router";
import aboutPage from "../assets/about-page.jpg";
import faq1 from "../assets/faq-one.jpg";
import faq2 from "../assets/faq-two.jpg";
import About from "../components/About";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import "./AboutPage.css";
import PageDescriptionHeader from "../components/PageDescriptionHeader";
const AboutPage = () => {
  const [show, setShow] = useState(null);

  const questions = [
    {
      title: "What Service We Provide ?",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati placeat repellendus reprehenderit eveniet dolorum atque ipsa explicabo dolorem vel soluta autem quas, quia facere est.",
    },
    {
      title: "How Many Years of Experience ?",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati placeat repellendus reprehenderit eveniet dolorum atque ipsa explicabo dolorem vel soluta autem quas, quia facere est.",
    },
    {
      title: "Have Any Professional Team Member ?",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati placeat repellendus reprehenderit eveniet dolorum atque ipsa explicabo dolorem vel soluta autem quas, quia facere est.",
    },
    {
      title: "Are You Awards Winning Agency ?",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati placeat repellendus reprehenderit eveniet dolorum atque ipsa explicabo dolorem vel soluta autem quas, quia facere est.",
    },
  ];

  const showDetails = (index) => {
    setShow((show) => (show === index ? null : index));
  };
  return (
    <div>
      <section>
        <div className=" px-[0.75rem]">
        <PageDescriptionHeader pageName={"About Me"}/>
          <div className="about-me-image mt-20">
            <img src={aboutPage} alt="" />
          </div>
          <About />

          <Services />
          {/* About Page Faqs*/}
          <section>
            <div className="faqs mt-24">
              <div className="faqs-left">
                <img className="faqImage w-[65%]" src={faq1} alt="" />
                <img
                  className="faqImage faqImage-2 w-[65%] relative bottom-20 left-32"
                  src={faq2}
                  alt=""
                />
              </div>
              <div className="faqs-right">
                <p className="faqs-heading text-3xl leading-10 mb-6 font-medium">
                  Professional
                  <span className="text-[#C9F31D]"> Problem Solutions</span> For
                  Digital Products
                </p>
                <div className="flex flex-col gap-4 ">
                  {/* {questions.map((question, idx) => {
                    return (
                      <div
                        className="p-4 rounded-xl bg-[#1F1F1F] text-white cursor-pointer"
                        key={idx}
                        onClick={() => showDetails(idx)}
                      >
                        <div className="font-semibold">{question.title}</div>
                        {show === idx && <div>{question.content}</div>}
                      </div>
                    );
                  })} */}

                  {questions.map((question, idx) => {
                    return (
                      <div
                        className="p-4 rounded-xl bg-[#1F1F1F] text-white cursor-pointer mb-3"
                        key={idx}
                        onClick={() => showDetails(idx)}
                      >
                        <div className="font-semibold">{question.title}</div>

                        <div
                          className={`transition-all duration-500 ease-in-out overflow-hidden ${
                            show === idx
                              ? "max-h-[200px] mt-2 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <p>{question.content}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div></div>
            </div>
          </section>
          <Clients />
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

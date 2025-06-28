import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal"; // Adjust the import based on where your StickyScroll component is located
import './about.css';
const About = () => {
  const content = [
    {
      title: "JNTU-GV (Bachelor's Degree)",
      description:
        "Currently pursuing my Bachelor's degree at JNTU-GV, expected to graduate in 2026. Gaining expertise in full-stack development, focusing on both frontend and backend technologies.",
      content: (
        <div className="study-logo-space">
          {/* Logo for your Bachelor's Degree */}
          <div className="logo-placeholder">
            <img src='/jntu.png' alt="JNTU-GV Logo" />
          </div>
        </div>
      ),
    },
    {
      title: "Govt Polytechnic Anakapalli (Diploma)",
      description:
        "Completed my Diploma in Computer Engineering from Govt Polytechnic Anakapalli with a remarkable 89.64%.",
      content: (
        <div className="study-logo-space">
          {/* Logo for your Diploma */}
          <div className="logo-placeholder">
            <img src='/sbtet.png' alt="Govt Polytechnic Anakapalli Logo" />
          </div>
        </div>
      ),
    },
    {
      title: "St. Anne's High School (Schooling)",
      description:
        "Completed my schooling at St. Anne's High School, Chinthapalli with 93% in the year 2020.",
      content: (
        <div className="study-logo-space">
          {/* Logo for your Schooling */}
          <div className="logo-placeholder">
            <img src="/school.png" alt="St. Anne's High School Logo" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="about-section relative py-20 bg-gray-800 text-white ">
      <div className="container mx-auto px-6 ">
        <h1 className="text-4xl text-secondary font-bold text-center pt-10  mb-10">Education</h1>
        <StickyScroll content={content} contentClassName="custom-scroll-effect" />
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import './about.css';

const About = () => {
  const content = [
    {
      title: "JNTU-GV (Bachelor's Degree)",
      description:
        "Currently pursuing my Bachelor's degree at JNTU-GV, expected to graduate in 2026. Gaining expertise in full-stack development, focusing on both frontend and backend technologies.",
      content: (
        <div className="study-logo-space flex items-center justify-center h-full">
          <img src='/jntu.png' alt="JNTU-GV Logo" className="h-28 object-contain" />
        </div>
      ),
    },
    {
      title: "Govt Polytechnic Anakapalli (Diploma)",
      description:
        "Completed my Diploma in Computer Engineering from Govt Polytechnic Anakapalli with a remarkable 89.64%.",
      content: (
        <div className="study-logo-space flex items-center justify-center h-full">
          <img src='/sbtet.png' alt="Govt Polytechnic Anakapalli Logo" className="h-28 object-contain" />
        </div>
      ),
    },
    {
      title: "St. Anne's High School (Schooling)",
      description:
        "Completed my schooling at St. Anne's High School, Chinthapalli with 93% in the year 2020.",
      content: (
        <div className="study-logo-space flex items-center justify-center h-full">
          <img src="/school.png" alt="St. Anne's High School Logo" className="h-24 object-contain" />
        </div>
      ),
    },
  ];

  return (
    <section className="about-section relative py-20 bg-[#13182b] text-[#d8d5db]">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-[#ffd166] mb-16">Education</h1>
        <StickyScroll content={content} contentClassName="custom-scroll-effect" />
      </div>
    </section>
  );
};

export default About;

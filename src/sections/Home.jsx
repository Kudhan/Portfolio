'use client';
import React from "react";
import './Home.css';
import InfiniteMovingCards from "@/components/ui/InfiniteMovingCards";

const skills = [
  { quote: "JavaScript", name: "Frontend", level: 95 },
  { quote: "React", name: "Frontend", level: 92 },
  { quote: "Node.js", name: "Backend", level: 90 },
  { quote: "Express.js", name: "Backend", level: 88 },
  { quote: "MongoDB", name: "Database", level: 87 },
  { quote: "Tailwind CSS", name: "Styling", level: 91 },
  { quote: "Git", name: "VCS", level: 90 },
  { quote: "GitHub", name: "Hosting", level: 89 },
  { quote: "Firebase", name: "BAAS", level: 85 },
  { quote: "Python", name: "Programming", level: 88 },
  { quote: "SQL", name: "Database", level: 85 },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-screen pt-28 flex flex-col items-center justify-center px-6 text-center text-white z-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-secondary mb-6">
          Hey, I'm <span className="highlighted-text">Kudhan</span>
        </h1>
        <p className="max-w-3xl text-lg sm:text-xl leading-relaxed">
          I'm a <span className="text-cyan-400 font-semibold">Full Stack Developer</span> specialized in the{" "}
          <span className="highlight-backend">MERN stack</span> with strong proficiency in building robust, scalable web applications.
          I also bring solid experience in <span className="text-yellow-300 font-medium">Python</span> and{" "}
          <span className="text-yellow-300 font-medium">Data Analysis</span>. My passion lies in crafting seamless user experiences
          backed by powerful backend logic, ensuring clean, modern, and maintainable code across the stack.
        </p>
      </section>

      {/* Skills Section */}
      <section className="relative mt-24 w-full px-6 sm:px-12 text-white z-10">
        <h2 className="text-3xl font-semibold text-center mb-8">Technologies I Work With</h2>
        <p className="max-w-3xl mx-auto text-center text-lg mb-10">
          Here's a glimpse of my tech stack — combining design, logic, and performance to build seamless web experiences.
        </p>

        {/* Infinite Cards */}
        <div className="mt-4">
          <InfiniteMovingCards items={skills} speed="normal" />
        </div>
      </section>
    </>
  );
};

export default Home;

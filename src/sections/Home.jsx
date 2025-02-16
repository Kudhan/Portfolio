import React from "react";
import './Home.css';
import { Spotlight } from "../components/ui/spotlight-new"; // Ensure correct path
import { BackgroundLines } from "../components/ui/Background-lines";
import { IconCloud } from "../components/ui/IconCloud"; // Ensure correct path

const slugs = [
  "javascript",
  "python",
  "postman",
  "wordpress",
  "lightroom",
  "photoshop",
  "snapseed",
  "canva",
  "npm",
  "java",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "mongoDB",
  "php",
  "oracle",
  "amazonaws",
  "postgresql",
  "firebase",
  "docker",
  "git",
  "github",
  "tailwind",
  "visualstudiocode",
  "figma",
];

const Home = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <>
      {/* First section */}
      <section className="min-h-120 flex justify-center  mt-10 lg:mt-40 relative px-4 sm:px-12 mb-44">
        <div className="text-center text-white relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary mb-4 ">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg sm:text-xl max-w-xl mx-auto">
            Hi, <span className="shine-text text-2xl">I'm <span className="highlighted-text">Kudhan</span></span>.
            I'm a passionate Full Stack Web Developer with a focus on <span className="highlight-backend text-2xl">Backend Development.</span>
            I specialize in building scalable and efficient backend solutions that power modern web applications. Let's work together to create seamless, powerful experiences for users, combining front-end design with robust backend logic.
          </p>
        </div>
      </section>

      {/* Second section */}
      <section className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-12 space-y-8 lg:space-y-0 mx-0 sm:mx-10">
        <div className="text-left text-white max-w-xl mb-8 lg:mb-0">
          <h2 className="text-3xl font-semibold text-primary mb-4">Technologies I Know</h2>
          <p className="text-lg sm:text-xl">
            I have experience working with a wide variety of technologies in the web development space.
            From backend frameworks to modern frontend tools, I'm always expanding my skillset.
          </p>
          <ul className="mt-4 text-lg list-disc pl-6">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>React</li>
            <li>Check Icon Cloud</li>
            {/* Add more technologies here */}
          </ul>
        </div>

        {/* Right Section: Rotating Icons */}
        <div className="flex align-center justify-center items-center max-w-xs mx-auto">
          <IconCloud images={images} />
        </div>
      </section>
    </>
  );
};

export default Home;

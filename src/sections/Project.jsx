import React from "react";
import { FocusCards } from "../components/ui/FocusCard"; // Import FocusCards component

// Sample project data
const projects = [
  {
    title: "Honour In Cyber Security",
    src: "/honour.jpg", // Placeholder image URL
    description: "A React-based Todo List app that allows users to easily add, edit, and delete tasks.",
    githubLink: "https://github.com/Kudhan/Certifications/blob/main/honour.jpg", // GitHub link for this project
  },
  {
    title: "Career Essentials in Gen Ai",
    src: "/linked1.jpg", // Placeholder image URL
    description: "A weather application built with React.",
    githubLink: "https://github.com/Kudhan/Certifications/blob/main/linked1.jpg", // GitHub link for this project
  },
  {
    title: "Machine Learning in Python",
    src: "/dip.jpg", // Placeholder image URL
    description: "A travel tracker app that helps users track their trips.",
    githubLink: "https://github.com/Kudhan/Certifications/blob/main/dip.jpg", // GitHub link for this project
  },
  // Add more projects as needed
];

export default function Project() {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-secondary dark:text-neutral-100 mb-8">
          My Certifications
        </h2>
        <FocusCards cards={projects} />
      </div>
    </section>
  );
}

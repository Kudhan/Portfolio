

import { FocusCards } from "../components/ui/FocusCard"; // Import FocusCards component

// Sample project data
const projects = [

  {
    title: "Python Essentials By Cisco",
    src: "/pe-1.jpg", // Placeholder image URL
    description: "A React-based Todo List app that allows users to easily add, edit, and delete tasks.",
    githubLink: "https://github.com/Kudhan/Certifications/blob/main/pe-1.jpg", // GitHub link for this project
  },
  {
    title: "AWS Solution Architecture",
    src: "/aws.jpg", // Placeholder image URL
    description: "A travel tracker app that helps users track their trips.",
    githubLink: "https://github.com/Kudhan/Certifications/blob/main/aws.jpg", // GitHub link for this project
  },
  {
    title: "Career Essentials in Gen Ai",
    src: "/linked1.jpg", // Placeholder image URL
    description: "A weather application built with React.",
    githubLink: "https://github.com/Kudhan/Certifications/blob/main/linked1.jpg", // GitHub link for this project
  },
  {
    title: "Ibm Cloud Comouting Fundamentals",
    src: "data:image/png;base64,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",
    description: "A travel tracker app that helps users track their trips.",
    githubLink: "https://www.credly.com/earner/earned/badge/098df8ca-584e-4c5a-9b09-ad825649e437", // GitHub link for this project
  },
  {
    title: "Machine Learning in Python",
    src: "/dip.jpg", // Placeholder image URL
    description: "A travel tracker app that helps users track their trips.",
    githubLink: "https://github.com/Kudhan/Certifications/blob/main/dip.jpg", // GitHub link for this project
  },
  {
    title: "Honour in Cyber Security",
    src: "/honour.jpg", // Placeholder image URL
    description: "A travel tracker app that helps users track their trips.",
    githubLink: "https://github.com/Kudhan/Certifications/blob/main/honour.jpg", // GitHub link for this project
  },

  // Add more projects as needed
];

export default function Certification() {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-secondary dark:text-neutral-100 mb-10">
          My Certifications
        </h2>
        <FocusCards cards={projects} />
      </div>
    </section>
  );
}

import React from "react";
import { FocusCards } from "../components/ui/FocusCard"; // Import FocusCards component

// Sample project data
const projects = [
  {
    title: "Nike Landing Page",
    src: "https://wallpapersok.com/images/thumbnail/nike-brand-just-do-it-6xd77ibze0olg1y6.webp", // Placeholder image URL
    description: "A React-based Todo List app that allows users to easily add, edit, and delete tasks. It features a clean, interactive interface with real-time updates using React's state management. The app is designed to help users stay organized and manage their daily tasks efficiently in a user-friendly environment.",
  },
  {
    title: "Weather Application",
    src: "https://cdn.jim-nielsen.com/ios/1024/weather-2019-02-07.png", // Placeholder image URL
    description: "A description of Project 2",
  },
  {
    title: "Travel Tracker",
    src: "https://yt3.googleusercontent.com/HJpPNHjYK-op1pfoG-fHplEsWYtZiO96Mm4F_cJRDJ1fN68NZAmoWDmUk3SnCw8uJ7i5bjdIQdk=s900-c-k-c0x00ffffff-no-rj", // Placeholder image URL
    description: "A description of Project 3",
  },
  // Add more projects as needed
];

export default function Project() {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-secondary dark:text-neutral-100 mb-8">
          My Projects
        </h2>
        <FocusCards cards={projects} />
      </div>
    </section>
  );
}

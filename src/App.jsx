import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { Home, About, Project, Resume, Contact, Footer } from "./sections";
import { Dock, DockIcon } from "./components/ui/Dock";
import { HomeIcon } from "lucide-react";
import { Phone, LinkedIn, GitHub, Mail } from "@mui/icons-material";

export default function App() {
  const [showDock, setShowDock] = useState(true); // State to control Dock visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Store last scroll position

  // Smooth hide/show dock based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If the user is scrolling down, hide the dock
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowDock(false); // Hide dock when scrolling down
      } else if (currentScrollY < lastScrollY) {
        setShowDock(true); // Show dock when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Handlers for dock button clicks
  const handleHomeClick = () => {
    window.location.href = '/'; // Navigate to home
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+916304400979'; // Trigger phone call
  };

  const handleMailClick = () => {
    window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=kudhanshaik03@gmail.com'; // Open email client
  };

  const handleLinkedInClick = () => {
    window.location.href = 'https://www.linkedin.com/in/shaik-kudhan-751412281'; // Navigate to LinkedIn profile
  };

  const handleGithubClick = () => {
    window.location.href = 'https://github.com/Kudhan'; // Navigate to GitHub profile
  };

  return (
    <main className="relative bg-slate-900">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Home />
      </section>
      <section className="padding">
        <About />
      </section>
      <section className="padding">
        <Project />
      </section>
      <section className="padding">
        <Contact />
      </section>
      <section className="padding" id="resume-section">
        <Resume />
      </section>
      

      {/* Conditionally render the Dock with smooth transition */}
      <Dock
        direction="middle"
        className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-500 ease-in-out ${showDock ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <DockIcon onClick={handleHomeClick}>
          <HomeIcon className="text-white" />
        </DockIcon>
        <DockIcon onClick={handlePhoneClick}>
          <Phone className="text-white" />
        </DockIcon>
        <DockIcon onClick={handleMailClick}>
          <Mail className="text-white" />
        </DockIcon>
        <DockIcon onClick={handleLinkedInClick}>
          <LinkedIn className="text-white" />
        </DockIcon>
        <DockIcon onClick={handleGithubClick}>
          <GitHub className="text-white" />
        </DockIcon>
      </Dock>
    </main>
  );
}

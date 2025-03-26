import { LinkedIn, GitHub, Mail, Phone } from "@mui/icons-material"; // MUI icons
import { Dock, DockIcon } from "../components/ui/Dock";
import { HomeIcon } from "lucide-react"; // lucide-react icons

const Contact = () => {
  const handleHomeCLick = () => {
    window.location.href = '/';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+916304400979';
  };

  const handleMailClick = () => {
    window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=kudhanshaik03@gmail.com';
  };

  const handleLinkedInClick = () => {
    window.location.href = 'https://www.linkedin.com/in/shaik-kudhan-751412281';
  };

  const handleGithubClick = () => {
    window.location.href = 'https://github.com/Kudhan';
  };

  return (
    <>
      <section className="bg-slate-800 h-80 flex flex-col justify-between px-8 py-10">
        {/* Title Section */}
        <h1 className="text-4xl text-secondary font-bold text-center mb-6 ">Contact Me</h1>

        {/* Button with gradient effect */}
        <button className="relative w-40 max-w-xs mx-auto mb-5 mt-5" onClick={() => {const link = document.createElement('a');link.href = '/resume.pdf'; link.download = 'resume.pdf'; link.click();}}>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2 bg-black rounded-lg relative group transition duration-200 text-white text-center hover:bg-transparent hover:text-white border-2 border-transparent group-hover:border-indigo-500">
            Resume
          </div>
        </button>

        {/* Dock with icons at the bottom (No changes here) */}
        <Dock direction="middle" className="justify-center mb-10">
          <DockIcon onClick={handleHomeCLick}>
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
      </section>
    </>
  );
};

export default Contact;

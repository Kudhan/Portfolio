import { LinkedIn, GitHub, Mail, Phone } from "@mui/icons-material"; // MUI icons
import { Dock, DockIcon } from "../components/ui/Dock";
import { HomeIcon } from "lucide-react"; // lucide-react icons

const Contact = () => {
  const handleHomeClick = () => {
    window.location.href = '/';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+916304400979';
  };

  const handleMailClick = () => {
    const mailtoURL = 'mailto:kudhanshaik03@gmail.com';
    const gmailComposeURL = 'https://mail.google.com/mail/?view=cm&fs=1&to=kudhanshaik03@gmail.com';

    // If user is logged into Gmail in browser
    window.open(gmailComposeURL, '_blank');

    // Fallback in case Gmail doesn't open
    setTimeout(() => {
      window.location.href = mailtoURL;
    }, 1000);
  };


  const handleLinkedInClick = () => {
    window.location.href = 'https://www.linkedin.com/in/shaik-kudhan-751412281';
  };

  const handleGithubClick = () => {
    window.location.href = 'https://github.com/Kudhan';
  };

  return (
    <>
      <section
        className="h-80 flex flex-col justify-between px-8 py-10"
        style={{
          background: "linear-gradient(135deg, #cbf3f0 0%, #2ec4b6 50%, #ff9f1c 100%)",
        }}
      >
        {/* Title */}
        <h1 className="text-4xl text-white font-bold text-center mb-6">Contact Me</h1>

        {/* Resume Button */}
        <button
          className="relative w-40 max-w-xs mx-auto mb-5 mt-5"
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/resume.pdf';
            link.download = 'resume.pdf';
            link.click();
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2 bg-black rounded-lg relative group transition duration-200 text-white text-center hover:bg-transparent hover:text-white border-2 border-transparent group-hover:border-indigo-500">
            Resume
          </div>
        </button>

        {/* Dock Icons */}
        <Dock direction="middle" className="justify-center mb-10">
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
      </section>
    </>
  );
};

export default Contact;

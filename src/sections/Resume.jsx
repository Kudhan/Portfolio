import { LinkedIn, GitHub,Mail,Phone } from "@mui/icons-material"; // Correct GitHub import
import { Dock, DockIcon } from "../components/ui/Dock";
import { HomeIcon, PencilIcon, MailIcon } from "lucide-react"; // lucide-react icons

const Resume = () => {
  return (
    <>
      <section className="bg-slate-800 ">
        <h1 className="text-secondary text-4xl text-bold justify-center align-top">Contact Me</h1>
        {/* Adding the Dock and DockIcon to your component */}
        <Dock direction="middle">
          <DockIcon>
            <HomeIcon className="text-white" />
          </DockIcon>
          <DockIcon>
            <Phone className="text-white" />
          </DockIcon>
          <DockIcon>
            <Mail className="text-white" />
          </DockIcon>
          <DockIcon>
            <LinkedIn className="text-white" /> {/* LinkedIn from MUI */}
          </DockIcon>
          <DockIcon>
            <GitHub className="text-white" /> {/* GitHub from MUI */}
          </DockIcon>
        </Dock>
      </section>
    </>
  );
};

export default Resume;

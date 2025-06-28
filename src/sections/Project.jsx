import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/BentoGridDemo";
import {
  IconClipboardCopy,
  IconSnowflake,
  IconCompass,
  IconBrandHipchat,
  IconBuildingWarehouse,
  IconSignature,
  IconShoppingCart,
  IconShoe,
} from "@tabler/icons-react";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />
);

const items = [
  {
    title: "CollabSphere",
    description: "Manage teams, tasks & projects in one place.",
    image: "https://www.constructionplacements.com/wp-content/uploads/2019/03/project-management.jpg.webp",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    gitLink: "https://project-management-eight-puce.vercel.app/sign-in",
  },
  {
    title: "FinanceGlance",
    description: "Track expenses & analyze financial trends.",
    image: "https://spreadsheetsph.com/cdn/shop/products/PersonalFinanceTrackerPost.png?v=1706669716",
    icon: <IconSnowflake className="h-4 w-4 text-neutral-500" />,
    gitLink: "https://finance-tracker-ashen-two.vercel.app/signin",
  },
  {
    title: "Reddit Clone",
    description: "A clone with posts, votes, and discussions.",
    image: "https://play-lh.googleusercontent.com/MDRjKWEIHO9cGiWt-tlvOGpAP3x14_89jwAT-nQTS6Fra-gxfakizwJ3NHBTClNGYK4",
    icon: <IconCompass className="h-4 w-4 text-neutral-500" />,
    gitLink: "https://github.com/Kudhan/reddit_clone",
  },
  {
    title: "Melo - Chat App",
    description: "Real-time chat with socket-based messaging.",
    image: "/melo.png",
    icon: <IconBrandHipchat className="h-4 w-4 text-neutral-500" />,
    gitLink: "https://chat-app-uf8m.onrender.com/login",
  },
  {
    title: "Web Traffic Analyzer",
    description: "Analyze and visualize website visits.",
    image: "https://www.allaboutai.com/wp-content/uploads/2025/03/AAAI-AI-Keyword-Research-for-Pets-Team-Usage-3-2.webp",
    icon: <IconBuildingWarehouse className="h-4 w-4 text-neutral-500" />,
    gitLink: "https://github.com/Kudhan/",
  },
  {
    title: "DocSigner",
    description: "Add digital signatures to PDFs easily.",
    image: "https://notarypublicunderwriters.com/images/blogs/multiple-document-signers-blog.png",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    gitLink: "https://github.com/Kudhan/DocSigner",
  },
  {
    title: "Nike Landing Page",
    description: "Responsive Nike brand product showcase.",
    image: "https://i.pinimg.com/736x/7d/3e/42/7d3e429827adc99ac37ca0bd7fc1653f.jpg",
    icon: <IconShoe className="h-4 w-4 text-neutral-500" />,
    gitLink: "https://nike-landing-page1.vercel.app/",
  },
];

export default function Certification() {
  return (
    <div className="bg-black mb-10 mt-10">
      <h1 className="text-4xl text-secondary font-bold text-center pt-10 mb-10">My Projects</h1>
      <BentoGrid className="max-w-4xl mx-auto px-10 py-10">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            image={item.image}
            icon={item.icon}
            gitLink={item.gitLink}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

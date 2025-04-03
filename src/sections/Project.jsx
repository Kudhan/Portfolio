import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/BentoGridDemo"; // Make sure this is the correct path
import {
  IconArrowWaveRightUp,
  IconCompass,
  IconBuildingWarehouse,
  IconBrandHipchat,
  IconClipboardCopy,
  IconFileBroken,
  IconSnowflake,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

// Define items first to be used in BentoGrid
const Skeleton = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
  >
  </div>
);

const items = [
  {
    title: "The Nike Landing Page",
    description: "The Nike landing page features bold visuals, high-quality product images",
    image: "https://i.pinimg.com/736x/7d/3e/42/7d3e429827adc99ac37ca0bd7fc1653f.jpg", // Replace with your image path
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    gitLink: "https://nike-landing-page-snowy.vercel.app/",
  },
  {
    title: "The Weather Application",
    description: "The weather app landing page displays current weather conditions with dynamic visuals",
    image: "https://c4.wallpaperflare.com/wallpaper/405/400/980/winter-snow-sun-light-forest-trees-sunset-wallpaper-preview.jpg", // Replace with your image path
    icon: <IconSnowflake className="h-4 w-4 text-neutral-500" />,
    gitLink: "https://github.com/Kudhan/Weather_App",
  },
  {
    title: "Travel Tracker",
    description: "Landing page showcases an interactive map and visited places",
    image: "https://w0.peakpx.com/wallpaper/636/414/HD-wallpaper-travel-agency.jpg", // Replace with your image path
    icon: <IconCompass className="h-4 w-4 text-neutral-500" />,
    gitLink: "https://github.com/Kudhan/Travel_Tracker",
  },
  {
    title: "Melo",
    description: "Chatting Application. Smooth-Simple-Connected",
    image: "/melo.png", // Make sure the image path is correct
    icon: <IconBrandHipchat className="h-4 w-4 text-neutral-500" />,
    gitLink: "https://chat-app-uf8m.onrender.com/", // Corrected typo here from `gtiLink` to `gitLink`
  },
  {
    title: "The Book Inventory Tracker",
    description: "It’s simple, Inventory Manager",
    image: "/bit.jpeg", // Replace with your image path
    icon: <IconBuildingWarehouse className="h-4 w-4 text-neutral-500" />,
    gitLink: "https://github.com/Kudhan/BookInventoryTracker",
  },
];

export default function Certification() {
  return (
    <div className="bg-black mb-10 mt-10"> {/* Added mt-10 here */}
      <h1 className="text-4xl text-secondary font-bold text-center pt-10  mb-10">My Projects</h1>
      <BentoGrid className="max-w-4xl mx-auto px-10 py-10">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            image={item.image} // Pass image instead of header
            icon={item.icon}
            gitLink={item.gitLink}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""} // Ensure this logic is as you expect
          />
        ))}
      </BentoGrid>
    </div>
  );
}

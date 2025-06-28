// BentoGridDemo.js
import { cn } from "../../lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[96rem] mx-auto px-4 md:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  image,
  icon,
  gitLink,
}) => {
  const openLinkInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={cn(
        "rounded-xl group hover:scale-[1.05] transition-transform duration-300 overflow-hidden shadow-md border border-[#ffd166]/20 bg-gradient-to-br from-[#210b2c] via-[#311946] to-[#3b235a] text-white backdrop-blur-md",
        className
      )}
    >
      <img
        src={image}
        alt={title}
        className="h-44 md:h-52 w-full object-cover object-center rounded-t-xl"
      />

      <div className="p-4 flex flex-col gap-2 flex-grow">
        <div className="flex items-center gap-2 text-[#ffd166]">
          <div className="h-5 w-5">{icon}</div>
          <button
            onClick={() => openLinkInNewTab(gitLink)}
            className="text-lg font-semibold hover:underline text-left text-[#03b5aa]"
          >
            {title}
          </button>
        </div>
        <p className="text-sm text-white/80 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

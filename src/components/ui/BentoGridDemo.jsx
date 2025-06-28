// BentoGridDemo.js
import { cn } from "../../lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[90rem] mx-auto px-4 md:px-8",
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
        "rounded-xl group hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300 overflow-hidden shadow-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col",
        className
      )}
    >
      <img
        src={image}
        alt={title}
        className="h-44 md:h-52 w-full object-cover object-center rounded-t-xl"
      />

      <div className="p-4 flex flex-col gap-2 flex-grow">
        <div className="flex items-center gap-2 text-secondary dark:text-primary">
          <div className="h-5 w-5">{icon}</div>
          <button
            onClick={() => openLinkInNewTab(gitLink)}
            className="text-lg font-semibold hover:underline text-left"
          >
            {title}
          </button>
        </div>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

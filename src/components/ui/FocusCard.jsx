import React, { useState } from "react";
import clsx from "clsx"; // For conditional class names

// Card Component
export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={clsx(
      "rounded-lg relative bg-white dark:bg-neutral-900 overflow-hidden h-80 md:h-96 w-full transition-all duration-300 ease-out shadow-lg hover:shadow-xl",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    {/* Image */}
    {card.src ? (
      <img
        src={card.src}
        alt={card.title || "Card Image"}
        className="object-cover absolute inset-0 w-full h-full "
      />
    ) : (
      <div className="bg-gray-300 flex items-center justify-center text-primary font-bold text-xl">
        No Image
      </div>
    )}

    <div
      className={clsx(
        "absolute inset-0 bg-black/50 flex flex-col justify-end p-6 transition-opacity duration-300 ",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="text-2xl font-medium text-white mb-4">{card.title || "Untitled"}</div>

      {/* Add GitHub Button */}
      {card.githubLink && (
        <a
          href={card.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg transition duration-200"
        >
          View on GitHub
        </a>
      )}
    </div>
  </div>
));

Card.displayName = "Card";

// FocusCards Component
export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

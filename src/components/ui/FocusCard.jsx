"use client";

import React, { useState } from "react";
import clsx from "clsx"; // Assuming you're using clsx for conditional class names

// Card Component
export const Card = React.memo(({
  card,
  index,
  hovered,
  setHovered
}) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={clsx(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    {/* Use a standard <img> tag for images */}
    {card.src ? (
      <img
        src={card.src}
        alt={card.title || "Card Image"}  // Fallback title if missing
        className="object-cover absolute inset-0 w-full h-full"
      />
    ) : (
      <div className="bg-gray-300 flex items-center justify-center text-primary font-bold text-xl">
        No Image
      </div> // Placeholder if no image is available
    )}

    <div
      className={clsx(
        "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300 ",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <div
        className="text-xl md:text-2xl font-medium bg-clip-text text-primary ;"
      >
        {card.title || "Untitled"} {/* Fallback if no title */}
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

// FocusCards Component
export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title || index} // Use a fallback key if no title is provided
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

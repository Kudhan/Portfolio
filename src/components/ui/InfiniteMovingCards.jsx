import React, { useEffect, useRef, useState } from "react";

const gradientCombos = [
  "from-cyan-500 to-emerald-500",
  "from-pink-500 to-indigo-500",
  "from-orange-500 to-yellow-500",
  "from-purple-600 to-pink-400",
  "from-blue-500 to-teal-400",
  "from-red-500 to-orange-400",
  "from-green-400 to-lime-500",
  "from-fuchsia-500 to-purple-500",
];

const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className = "",
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  const getDuration = () => {
    return speed === "fast" ? 20 : speed === "slow" ? 80 : 40;
  };

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const container = containerRef.current;
    const scroller = scrollerRef.current;

    const clones = Array.from(scroller.children).map((child) => {
      const clone = child.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      scroller.appendChild(clone);
      return clone;
    });

    const directionValue = direction === "left" ? "forwards" : "reverse";
    const durationSec = getDuration() + "s";

    container.style.setProperty("--animation-direction", directionValue);
    container.style.setProperty("--animation-duration", durationSec);
    setStart(true);

    return () => {
      clones.forEach((clone) => scroller.removeChild(clone));
    };
  }, []);

  return (
    <div className={`relative z-10 w-full overflow-hidden ${className}`} ref={containerRef}>
      <ul
        ref={scrollerRef}
        className={`flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-6 animate-scroll ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
        style={{
          animation: `scroll var(--animation-duration) linear infinite var(--animation-direction)`,
        }}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className={`relative w-60 shrink-0 rounded-xl px-6 py-4 text-white shadow-xl transform hover:scale-105 transition-transform duration-300 bg-gradient-to-br ${
              gradientCombos[idx % gradientCombos.length]
            }`}
          >
            <div className="text-xl font-bold">{item.quote}</div>
            <div className="mt-1 text-sm opacity-90">{item.name}</div>

            {/* Progress Bar */}
            <div className="mt-4 w-full bg-white bg-opacity-20 h-2 rounded-full">
              <div
                className="h-full rounded-full bg-white transition-all duration-500"
                style={{ width: `${item.level}%` }}
              />
            </div>

            {/* Optional label for percentage */}
            <div className="text-right text-xs mt-1 opacity-70">{item.level}% proficient</div>
          </li>
        ))}
      </ul>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default InfiniteMovingCards;

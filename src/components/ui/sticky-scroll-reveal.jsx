"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = content.map((_, i) => i / cardLength);
    const closest = breakpoints.reduce((acc, val, i) => {
      const dist = Math.abs(latest - val);
      return dist < Math.abs(latest - breakpoints[acc]) ? i : acc;
    }, 0);
    setActiveCard(closest);
  });

  const gradients = [
    "linear-gradient(135deg, #adacb5, #d8d5db)",
    "linear-gradient(135deg, #d8d5db, #adacb5)",
    "linear-gradient(135deg, #adacb5, #ffffff)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(gradients[0]);

  useEffect(() => {
    setBackgroundGradient(gradients[activeCard % gradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: "#2d3142",
      }}
      className="relative flex h-[25rem] justify-center overflow-y-auto rounded-md p-10 transition-colors duration-700"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-[#ffd166] transition-opacity duration-500"
              >
                {item.title}
              </motion.h2>
              <motion.p
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-md mt-4 max-w-md text-[#d8d5db] transition-opacity duration-500"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-40 w-80 overflow-hidden rounded-lg border-2 border-[#ffd166]/30 shadow-lg lg:block",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};

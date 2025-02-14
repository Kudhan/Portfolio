import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Correct function to accept class values
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}

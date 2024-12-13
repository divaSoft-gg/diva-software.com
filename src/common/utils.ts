import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { IClient } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function scrollToTop() {
  window.scroll(0, 0);
}

export function shuffleArray(array: IClient[]) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
export function formatDate(date) {
  const dateObj = new Date(date);

  const formattedDate = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short", // 'short' gives abbreviated month name
    day: "numeric",
  });
  return formattedDate;
}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { TProduct } from "../../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertDocToObj(doc: TProduct) {
  doc._id = doc._id.toString();
  return doc;
}

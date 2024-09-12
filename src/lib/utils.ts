import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { TProduct } from "../../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertDocToObj(doc: any) {
  doc._id = doc._id.toString();
  return doc;
}

export const round2 = (num: number) =>
  Math.round((num + Number.EPSILON) * 100) / 100;

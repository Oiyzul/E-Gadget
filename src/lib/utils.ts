import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertDocToObj(doc: any) {
  doc._id = doc._id.toString();
  return doc;
}

export const round2 = (num: number) =>
  Math.round((num + Number.EPSILON) * 100) / 100;

export function hasEmptyValue(obj:any) {
  return Object.values(obj).some(
    (value) => value === "" || value === null || value === undefined
  );
}
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Приводим любое значение к безопасному числу
export const num = (value: unknown): number =>
  typeof value === "number" && Number.isFinite(value) ? value : 0;

export function calcOperation(
  operation: { rows?: number; quantity?: number } | undefined,
  payPerRow: number,
  payPerQuantity: number,
) {
  return (
    num(operation?.rows) * payPerRow + num(operation?.quantity) * payPerQuantity
  );
}

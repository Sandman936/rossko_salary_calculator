import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Приводим любое значение к безопасному числу
export const n = (value: unknown): number =>
  Number.isFinite(value) ? (value as number) : 0;

export function calcOperation(
  operation: { rows?: number; quantity?: number } | undefined,
  payPerRow: number,
  payPerQuantity: number,
) {
  return (
    n(operation?.rows) * payPerRow + n(operation?.quantity) * payPerQuantity
  );
}

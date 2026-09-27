import {
  ACCEPTANCE_PAY_PER_QUANTITY,
  ACCEPTANCE_PAY_PER_ROW,
  PLACEMENT_PAY_PER_QUANTITY,
  PLACEMENT_PAY_PER_ROW,
} from "./constants";

// Приводим любое значение к безопасному числу
const n = (value: unknown): number =>
  Number.isFinite(value) ? (value as number) : 0;

// Принимаем частичные данные — функция всё равно всё нормализует
type PartialSalaryData = {
  acceptance?: { rows?: number; quantity?: number };
  placement?: { rows?: number; quantity?: number };
};

export function calculateDaySalary(data: PartialSalaryData): number {
  const acceptanceTotal =
    n(data.acceptance?.rows) * ACCEPTANCE_PAY_PER_ROW +
    n(data.acceptance?.quantity) * ACCEPTANCE_PAY_PER_QUANTITY;

  const placementTotal =
    n(data.placement?.rows) * PLACEMENT_PAY_PER_ROW +
    n(data.placement?.quantity) * PLACEMENT_PAY_PER_QUANTITY;

  return acceptanceTotal + placementTotal;
}

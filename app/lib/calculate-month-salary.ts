import {
  ACCEPTANCE_PAY_PER_QUANTITY,
  ACCEPTANCE_PAY_PER_ROW,
  PLACEMENT_PAY_PER_QUANTITY,
  PLACEMENT_PAY_PER_ROW,
  SPLIT_RATE,
} from "./constants";

// Приводим любое значение к безопасному числу
const n = (value: unknown): number =>
  Number.isFinite(value) ? (value as number) : 0;

// Принимаем частичные данные — функция всё равно всё нормализует
type PartialSalaryData = {
  totalAcceptance?: { rows?: number; quantity?: number };
  totalPlacement?: { rows?: number; quantity?: number };
  yourAcceptance?: { rows?: number; quantity?: number };
  yourPlacement?: { rows?: number; quantity?: number };
  totalPeople?: { total?: number };
};

export function calculateMonthSalary(data: PartialSalaryData): number {
  const acceptanceTotalPerMonth =
    n(data.totalAcceptance?.rows) * ACCEPTANCE_PAY_PER_ROW +
    n(data.totalAcceptance?.quantity) * ACCEPTANCE_PAY_PER_QUANTITY;

  const placementTotalPerMonth =
    n(data.totalPlacement?.rows) * PLACEMENT_PAY_PER_ROW +
    n(data.totalPlacement?.quantity) * PLACEMENT_PAY_PER_QUANTITY;

  const totalOperationsPerMonth =
    acceptanceTotalPerMonth + placementTotalPerMonth;

  const acceptanceYoursPerMonth =
    n(data.yourAcceptance?.rows) * ACCEPTANCE_PAY_PER_ROW +
    n(data.yourAcceptance?.quantity) * ACCEPTANCE_PAY_PER_QUANTITY;

  const placementYoursPerMonth =
    n(data.yourPlacement?.rows) * PLACEMENT_PAY_PER_ROW +
    n(data.yourPlacement?.quantity) * PLACEMENT_PAY_PER_QUANTITY;

  const totalYoursOperationsPerMonth =
    (acceptanceYoursPerMonth + placementYoursPerMonth) * (1 - SPLIT_RATE);

  return (
    (totalOperationsPerMonth * SPLIT_RATE) / (data.totalPeople?.total || 1) +
    totalYoursOperationsPerMonth
  );
}

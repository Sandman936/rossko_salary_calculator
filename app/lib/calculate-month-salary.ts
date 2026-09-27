import {
  ACCEPTANCE_PAY_PER_QUANTITY,
  ACCEPTANCE_PAY_PER_ROW,
  PLACEMENT_PAY_PER_QUANTITY,
  PLACEMENT_PAY_PER_ROW,
  POOL_SHARE_RATE,
} from "./constants";
import { calcOperation, n } from "./utils";

// Принимаем частичные данные — функция всё равно всё нормализует
type PartialSalaryData = {
  totalAcceptance?: { rows?: number; quantity?: number };
  totalPlacement?: { rows?: number; quantity?: number };
  yourAcceptance?: { rows?: number; quantity?: number };
  yourPlacement?: { rows?: number; quantity?: number };
  totalPeople?: { total?: number };
};

export function calculateMonthSalary(data: PartialSalaryData): number {
  const acceptanceTotalPerMonth = calcOperation(
    data.totalAcceptance,
    ACCEPTANCE_PAY_PER_ROW,
    ACCEPTANCE_PAY_PER_QUANTITY,
  );

  const placementTotalPerMonth = calcOperation(
    data.totalPlacement,
    PLACEMENT_PAY_PER_ROW,
    PLACEMENT_PAY_PER_QUANTITY,
  );

  const totalOperationsPerMonth =
    acceptanceTotalPerMonth + placementTotalPerMonth;

  const acceptanceYoursPerMonth = calcOperation(
    data.yourAcceptance,
    ACCEPTANCE_PAY_PER_ROW,
    ACCEPTANCE_PAY_PER_QUANTITY,
  );

  const placementYoursPerMonth = calcOperation(
    data.yourPlacement,
    PLACEMENT_PAY_PER_ROW,
    PLACEMENT_PAY_PER_QUANTITY,
  );

  const totalYoursOperationsPerMonth =
    (acceptanceYoursPerMonth + placementYoursPerMonth) * (1 - POOL_SHARE_RATE);

  return (
    (totalOperationsPerMonth * POOL_SHARE_RATE) /
      Math.max(1, n(data.totalPeople?.total)) +
    totalYoursOperationsPerMonth
  );
}

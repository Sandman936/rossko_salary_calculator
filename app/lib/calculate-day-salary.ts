import {
  ACCEPTANCE_PAY_PER_QUANTITY,
  ACCEPTANCE_PAY_PER_ROW,
  PLACEMENT_PAY_PER_QUANTITY,
  PLACEMENT_PAY_PER_ROW,
} from "./constants";
import { calcOperation } from "./utils";

// Принимаем частичные данные — функция всё равно всё нормализует
type PartialSalaryData = {
  acceptance?: { rows?: number; quantity?: number };
  placement?: { rows?: number; quantity?: number };
};

export function calculateDaySalary(data: PartialSalaryData): number {
  const acceptanceTotal = calcOperation(
    data.acceptance,
    ACCEPTANCE_PAY_PER_ROW,
    ACCEPTANCE_PAY_PER_QUANTITY,
  );

  const placementTotal = calcOperation(
    data.placement,
    PLACEMENT_PAY_PER_ROW,
    PLACEMENT_PAY_PER_QUANTITY,
  );

  return acceptanceTotal + placementTotal;
}

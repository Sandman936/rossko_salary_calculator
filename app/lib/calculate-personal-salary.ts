import {
  ACCEPTANCE_PAY_PER_QUANTITY,
  ACCEPTANCE_PAY_PER_ROW,
  PLACEMENT_PAY_PER_QUANTITY,
  PLACEMENT_PAY_PER_ROW,
} from "./constants";
import { calcOperation } from "./utils";

type SalaryInput = {
  acceptance?: { rows?: number; quantity?: number };
  placement?: { rows?: number; quantity?: number };
};

/** Считает полную зарплату: 100% от личных операций (без пула). */

export function calculatePersonalSalary(data: SalaryInput): number {
  const acceptanceAmount = calcOperation(
    data.acceptance,
    ACCEPTANCE_PAY_PER_ROW,
    ACCEPTANCE_PAY_PER_QUANTITY,
  );

  const placementAmount = calcOperation(
    data.placement,
    PLACEMENT_PAY_PER_ROW,
    PLACEMENT_PAY_PER_QUANTITY,
  );

  const total = acceptanceAmount + placementAmount;
  return Math.round(total * 100) / 100;
}

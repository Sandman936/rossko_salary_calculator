import {
  ACCEPTANCE_PAY_PER_QUANTITY,
  ACCEPTANCE_PAY_PER_ROW,
  PLACEMENT_PAY_PER_QUANTITY,
  PLACEMENT_PAY_PER_ROW,
  POOL_SHARE_RATE,
} from "./constants";
import { calcOperation, num } from "./utils";

type SalaryInput = {
  totalAcceptance?: { rows?: number; quantity?: number };
  totalPlacement?: { rows?: number; quantity?: number };
  yourAcceptance?: { rows?: number; quantity?: number };
  yourPlacement?: { rows?: number; quantity?: number };
  totalPeople?: { total?: number };
};

 /** Считает зарплату в соотношении 70% от личных операций и 30% от общих операций */

export function calculatePoolSalary(data: SalaryInput): number {
  const acceptanceAll = calcOperation(
    data.totalAcceptance,
    ACCEPTANCE_PAY_PER_ROW,
    ACCEPTANCE_PAY_PER_QUANTITY,
  );

  const placementAll = calcOperation(
    data.totalPlacement,
    PLACEMENT_PAY_PER_ROW,
    PLACEMENT_PAY_PER_QUANTITY,
  );

  const totalPoolAmount = acceptanceAll + placementAll;

  const acceptancePersonal = calcOperation(
    data.yourAcceptance,
    ACCEPTANCE_PAY_PER_ROW,
    ACCEPTANCE_PAY_PER_QUANTITY,
  );

  const placementPersonal = calcOperation(
    data.yourPlacement,
    PLACEMENT_PAY_PER_ROW,
    PLACEMENT_PAY_PER_QUANTITY,
  );

  const yourPersonalShare =
    (acceptancePersonal + placementPersonal) * (1 - POOL_SHARE_RATE);

  const poolShare =
    (totalPoolAmount * POOL_SHARE_RATE) /
    Math.max(1, num(data.totalPeople?.total));

  const total = poolShare + yourPersonalShare;

  return Math.round(total * 100) / 100;
}

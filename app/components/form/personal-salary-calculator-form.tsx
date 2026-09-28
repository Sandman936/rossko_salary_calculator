"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import useAnimatedNumber from "@/app/hooks/useAnimateNumber";
import { calculatePersonalSalary } from "@/app/lib/calculate-personal-salary";
import {
  type SalaryDayFormData,
  salaryDaySchema,
} from "../../lib/operations-schema";
import { NumberInput } from "../input/number-input";

export default function PersonalSalaryCalculatorForm() {
  const {
    register,
    control,
    formState: { errors },
  } = useForm<SalaryDayFormData>({
    resolver: zodResolver(salaryDaySchema),
    defaultValues: {
      acceptance: { rows: 0, quantity: 0 },
      placement: { rows: 0, quantity: 0 },
    },
    mode: "onChange",
  });

  const values = useWatch({
    control,
    defaultValue: {
      acceptance: { rows: 0, quantity: 0 },
      placement: { rows: 0, quantity: 0 },
    },
  });

  const salaryValue = useMemo(() => calculatePersonalSalary(values), [values]);
  const animatedValue = useAnimatedNumber(salaryValue);

  const currencyFormatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
  });

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full px-4 py-8 md:p-6 lg:p-10 gap-6 md:gap-4 flex flex-col"
    >
      {/* Блок "Приемка" */}
      <fieldset className="flex flex-col gap-2">
        <legend className="mb-6 font-semibold text-center text-xl md:text-2xl lg:text-3xl">
          Приемка:
        </legend>
        <div className="flex gap-4 flex-col items-center md:flex-row md:justify-evenly">
          <NumberInput
            label="Строки"
            registration={register("acceptance.rows", { valueAsNumber: true })}
            error={errors.acceptance?.rows}
          />

          <NumberInput
            label="Количество"
            registration={register("acceptance.quantity", {
              valueAsNumber: true,
            })}
            error={errors.acceptance?.quantity}
          />
        </div>
      </fieldset>

      {/* Блок "Размещение" */}
      <fieldset className="flex flex-col gap-4">
        <legend className="mb-6 font-semibold text-center text-xl md:text-2xl lg:text-3xl">
          Размещение:
        </legend>
        <div className="flex gap-4 flex-col items-center md:flex-row md:justify-evenly">
          <NumberInput
            label="Строки"
            registration={register("placement.rows", { valueAsNumber: true })}
            error={errors.placement?.rows}
          />

          <NumberInput
            label="Количество"
            registration={register("placement.quantity", {
              valueAsNumber: true,
            })}
            error={errors.placement?.quantity}
          />
        </div>
      </fieldset>

      <h2 className="text-center text-xl md:text-2xl lg:text-3xl py-4">
        Результаты расчета:{" "}
        <span className="bg-(--accent-color) rounded-2xl px-2 py-1 text-white">
          {currencyFormatter.format(animatedValue)}
        </span>
      </h2>
    </form>
  );
}

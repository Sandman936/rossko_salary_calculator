"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import useAnimatedNumber from "@/app/hooks/useAnimateNumber";
import { calculateMonthSalary } from "@/app/lib/calculate-month-salary";
import {
  type SalaryMonthFormData,
  salaryMonthSchema,
} from "@/app/lib/operations-schema";
import { NumberInput } from "../input/number-input";

export default function MonthSalaryCalculatorForm() {
  const {
    register,
    control,
    formState: { errors },
  } = useForm<SalaryMonthFormData>({
    resolver: zodResolver(salaryMonthSchema),
    defaultValues: {
      totalAcceptance: { rows: 0, quantity: 0 },
      totalPlacement: { rows: 0, quantity: 0 },
      yourAcceptance: { rows: 0, quantity: 0 },
      yourPlacement: { rows: 0, quantity: 0 },
      totalPeople: { total: 1 },
    },
    mode: "onChange",
  });

  const values = useWatch({
    control,
    defaultValue: {
      totalAcceptance: { rows: 0, quantity: 0 },
      totalPlacement: { rows: 0, quantity: 0 },
      yourAcceptance: { rows: 0, quantity: 0 },
      yourPlacement: { rows: 0, quantity: 0 },
      totalPeople: { total: 1 },
    },
  });

  const salaryValue = useMemo(() => calculateMonthSalary(values), [values]);
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
      {/* Блок "Общая приемка" */}
      <fieldset className="flex flex-col gap-2">
        <legend className="mb-6 font-semibold text-center text-xl md:text-2xl lg:text-3xl">
          Общая приемка:
        </legend>
        <div className="flex gap-4 flex-col items-center md:flex-row md:justify-evenly">
          <NumberInput
            label="Всего строк"
            registration={register("totalAcceptance.rows", {
              valueAsNumber: true,
            })}
            error={errors.totalAcceptance?.rows}
          />

          <NumberInput
            label="Общее количество"
            registration={register("totalAcceptance.quantity", {
              valueAsNumber: true,
            })}
            error={errors.totalAcceptance?.quantity}
          />
        </div>
      </fieldset>

      {/* Блок "Общее размещение" */}
      <fieldset className="flex flex-col gap-4">
        <legend className="mb-6 font-semibold text-center text-xl md:text-2xl lg:text-3xl">
          Общее размещение:
        </legend>
        <div className="flex gap-4 flex-col items-center md:flex-row md:justify-evenly">
          <NumberInput
            label="Всего строк"
            registration={register("totalPlacement.rows", {
              valueAsNumber: true,
            })}
            error={errors.yourAcceptance?.rows}
          />

          <NumberInput
            label="Общее количество"
            registration={register("totalPlacement.quantity", {
              valueAsNumber: true,
            })}
            error={errors.yourAcceptance?.quantity}
          />
        </div>
      </fieldset>

      {/* Блок "Ваша приемка" */}
      <fieldset className="flex flex-col gap-4">
        <legend className="mb-6 font-semibold text-center text-xl md:text-2xl lg:text-3xl">
          Ваша приемка:
        </legend>
        <div className="flex gap-4 flex-col items-center md:flex-row md:justify-evenly">
          <NumberInput
            label="Ваши строки"
            registration={register("yourAcceptance.rows", {
              valueAsNumber: true,
          })}
            error={errors.yourAcceptance?.rows}
          />

          <NumberInput
            label="Ваше количество"
            registration={register("yourAcceptance.quantity", {
              valueAsNumber: true,
            })}
            error={errors.yourAcceptance?.quantity}
          />
        </div>
      </fieldset>

      {/* Блок "Ваше размещение" */}
      <fieldset className="flex flex-col gap-4">
        <legend className="mb-6 font-semibold text-center text-xl md:text-2xl lg:text-3xl">
          Ваше размещение:
        </legend>
        <div className="flex gap-4 flex-col items-center md:flex-row md:justify-evenly">
          <NumberInput
            label="Ваши строки"
            registration={register("yourPlacement.rows", {
              valueAsNumber: true,
            })}
            error={errors.yourPlacement?.rows}
          />

          <NumberInput
            label="Ваше количество"
            registration={register("yourPlacement.quantity", {
              valueAsNumber: true,
            })}
            error={errors.yourPlacement?.quantity}
          />
        </div>
      </fieldset>

      {/* Блок "Общее количество людей" */}
      <fieldset className="flex flex-col gap-4">
        <legend className="mb-6 font-semibold text-center text-xl md:text-2xl lg:text-3xl">
          Общее количество людей:
        </legend>
        <div className="flex gap-4 flex-col items-center md:flex-row md:justify-evenly">
          <NumberInput
            label="Количество:"
            registration={register("totalPeople.total", {
              valueAsNumber: true,
            })}
            error={errors.totalPeople?.total}
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

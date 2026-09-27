import { z } from "zod";
import { MAX_VALUE } from "./constants";

const operationSchema = z.object({
  rows: z
    .number({ message: "Введите число строк" })
    .int({ message: "Значение должно быть целым числом" })
    .min(0, { message: "Значение не может быть отрицательным" })
    .max(MAX_VALUE, { message: "Значение превышает максимально допустимое" }),
  quantity: z
    .number({ message: "Введите количество" })
    .int({ message: "Значение должно быть целым числом" })
    .min(0, { message: "Значение не может быть отрицательным" })
    .max(MAX_VALUE, { message: "Значение превышает максимально допустимое" }),
});

const peopleCountSchema = z.object({
  total: z
    .number({ message: "Введите общее количество людей" })
    .int({ message: "Значение должно быть целым числом" })
    .min(1, { message: "Значение не может быть меньше 1" })
    .max(MAX_VALUE, { message: "Значение превышает максимально допустимое" }),
});

export const salaryDaySchema = z.object({
  acceptance: operationSchema, // Приемка
  placement: operationSchema, // Размещение
});

export const salaryMonthSchema = z.object({
  totalAcceptance: operationSchema, // Общая приемка
  totalPlacement: operationSchema, // Общее размещение
  yourAcceptance: operationSchema, // Ваша приемка
  yourPlacement: operationSchema, // Ваше размещение
  totalPeople: peopleCountSchema, // Общее количество людей
});

export type SalaryDayFormData = z.infer<typeof salaryDaySchema>;
export type SalaryMonthFormData = z.infer<typeof salaryMonthSchema>;

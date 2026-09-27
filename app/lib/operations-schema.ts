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

export const salarySchema = z.object({
  acceptance: operationSchema, // Приемка
  placement: operationSchema, // Размещение
});

export type SalaryFormData = z.infer<typeof salarySchema>;

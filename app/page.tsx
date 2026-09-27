"use client";

import Image from "next/image";
import { useState } from "react";
import DaySalaryCalculatorForm from "./components/form/day-salary-calculator-form";
import MonthSalaryCalculatorForm from "./components/form/month-salary-calculator-form";
import ModeSelector from "./components/selector/mode-selector";

export type modeType = "day" | "month";

export default function Home() {
  const [activeMode, setActiveMode] = useState<modeType>("day");

  return (
    <div className="flex flex-col min-h-screen items-center">
      <main className="my-0 flex w-full max-w-3xl flex-col bg-white md:my-8 lg:my-16 md:mx-4 lg:mx-8 rounded-2xl">
        <div className="p-4 md:p-6 lg:p-10 w-full flex flex-col items-center gap-4 text-center bg-(--accent-color) rounded-t-2xl">
          <Image
            src="/logo-full.svg"
            alt="Rossko Logo"
            width={150}
            height={40}
            style={{ width: "auto", height: "auto" }}
          />
          <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-bold">
            Калькулятор стоимости выполнения операций на складе Rǒssko
            г.Подольск
          </h1>
        </div>
        <ModeSelector activeMode={activeMode} setActiveMode={setActiveMode} />
        {activeMode === "day" ? (
          <DaySalaryCalculatorForm />
        ) : (
          <MonthSalaryCalculatorForm />
        )}
      </main>
    </div>
  );
}

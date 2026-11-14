"use client";

import Image from "next/image";
import { useState } from "react";
import PersonalSalaryCalculatorForm from "./components/form/personal-salary-calculator-form";
import ParticipantsTable from "./components/participants-table/participants-table";
import ModeSelector from "./components/ui/selector/mode-selector";

export default function Home() {
  const [isModeSelectorActive, setIsModeSelectorActive] = useState(true);

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
        </div>
        <ModeSelector
          activeMode={isModeSelectorActive}
          setActiveMode={setIsModeSelectorActive}
          modeOneName={"Калькулятор"}
          modeTwoName={"Таблица лидеров"}
          modeOneTittle={"Калькулятор личной зарплаты"}
          modeTwoTittle={"Таблица выполненых сменой операций на складе Rǒssko г.Подольск"}
        />
        {isModeSelectorActive ? (
          <PersonalSalaryCalculatorForm />
        ) : (
          <ParticipantsTable />
        )}
      </main>
    </div>
  );
}

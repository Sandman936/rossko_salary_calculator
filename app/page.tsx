"use client";

import Image from "next/image";
import SalaryCalculatorForm from "./components/form/salary-calculator-form";

export default function Home() {
  return (
    <div className="flex flex-col h-full items-center justify-start bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center m-0 md:mt-8 lg:mt-16 md:mx-4 lg:mx-8 bg-white rounded-2xl">
        <div className="p-4 md:p-6 lg:p-10 w-full flex flex-col items-center gap-4 text-center bg-(--accent-color) rounded-t-2xl">
          <Image
            src="/logo-full.svg"
            alt="Rossko Logo"
            width={150}
            height={40}
            style={{ width: "auto", height: "auto" }}
          />
          <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-bold">
            Калькулятор стоимости выполнения операций на складе Rossko
            г.Подольск
          </h1>
        </div>
        <SalaryCalculatorForm />
      </main>
    </div>
  );
}

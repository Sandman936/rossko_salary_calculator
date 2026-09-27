import clsx from "clsx";
import type { modeType } from "@/app/page";

export default function ModeSelector({
  activeMode,
  setActiveMode,
}: {
  activeMode: modeType;
  setActiveMode: (mode: modeType) => void;
}) {
  return (
    <div className="flex justify-center p-4 w-full">
      <div className="relative inline-grid grid-cols-2 rounded-full bg-gray-100 p-2">
        <div
          className="absolute top-2 bottom-2 rounded-full bg-(--accent-color) shadow transition-transform duration-300 ease-out"
          style={{
            left: "0.5rem",
            width: "calc(50% - 0.5rem)",
            transform: `translateX(${activeMode === "day" ? "0%" : "100%"})`,
          }}
        />

        <button
          type="button"
          onClick={() => setActiveMode("day")}
          className={clsx(
            "relative z-10 cursor-pointer whitespace-nowrap rounded-full px-3 py-1.5 text-sm sm:px-5 sm:py-2 sm:text-base  font-medium transition-colors",
            activeMode === "day" ? "text-white" : "text-gray-500",
          )}
        >
          Дневной расчет
        </button>

        <button
          type="button"
          onClick={() => setActiveMode("month")}
          className={clsx(
            "relative z-10 cursor-pointer whitespace-nowrap rounded-full px-3 py-1.5 text-sm sm:px-5 sm:py-2 sm:text-base font-medium transition-colors",
            activeMode === "month" ? "text-white" : "text-gray-500",
          )}
        >
          Месячный расчет
        </button>
      </div>
    </div>
  );
}

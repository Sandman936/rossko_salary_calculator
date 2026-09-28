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
    <div className="flex justify-center items-center p-4 w-full flex-col gap-2">
      <h2 className="text-base md:text-xl lg:text-2xl">
        Режим расчёта премии:
      </h2>
      <div className="relative inline-grid grid-cols-2 rounded-full bg-gray-100 p-2">
        <div
          className="absolute top-2 bottom-2 rounded-full bg-(--accent-color) shadow transition-transform duration-300 ease-out"
          style={{
            left: "0.5rem",
            width: "calc(50% - 0.5rem)",
            transform: `translateX(${activeMode === "100" ? "0%" : "100%"})`,
          }}
        />

        <button
          type="button"
          onClick={() => setActiveMode("100")}
          className={clsx(
            "relative z-10 cursor-pointer whitespace-nowrap rounded-full px-5 py-2 text-base font-medium transition-colors",
            activeMode === "100" ? "text-white" : "text-gray-500",
          )}
        >
          100%
        </button>

        <button
          type="button"
          onClick={() => setActiveMode("70/30")}
          className={clsx(
            "relative z-10 cursor-pointer whitespace-nowrap rounded-full px-5 py-2 text-base font-medium transition-colors",
            activeMode === "70/30" ? "text-white" : "text-gray-500",
          )}
        >
          70/30%
        </button>
      </div>
    </div>
  );
}

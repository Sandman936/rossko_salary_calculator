import clsx from "clsx";

export default function ModeSelector({
  activeMode,
  setActiveMode,
  modeOneTittle,
  modeTwoTittle,
  modeOneName,
  modeTwoName,
}: {
  activeMode: boolean;
  setActiveMode: (mode: boolean) => void;
  modeOneTittle: string;
  modeTwoTittle: string;
  modeOneName: string;
  modeTwoName: string;
}) {
  return (
    <div className="flex justify-center items-center p-4 w-full flex-col gap-2">
      <h2 className="text-xs md:text-2xl lg:text-3xl font-bold text-center">
        {activeMode ? modeOneTittle : modeTwoTittle}
      </h2>
      <div className="relative inline-grid grid-cols-2 rounded-full bg-gray-100 p-2">
        <div
          className="absolute top-2 bottom-2 rounded-full bg-(--accent-color) shadow transition-transform duration-300 ease-out"
          style={{
            left: "0.5rem",
            width: "calc(50% - 0.5rem)",
            transform: `translateX(${activeMode ? "0%" : "100%"})`,
          }}
        />

        <button
          type="button"
          onClick={() => setActiveMode(true)}
          className={clsx(
            "relative z-10 cursor-pointer whitespace-nowrap rounded-full px-5 py-2 text-base font-medium transition-colors",
            activeMode ? "text-white" : "text-gray-500",
          )}
        >
          {modeOneName}
        </button>

        <button
          type="button"
          onClick={() => setActiveMode(false)}
          className={clsx(
            "relative z-10 cursor-pointer whitespace-nowrap rounded-full px-5 py-2 text-base font-medium transition-colors",
            !activeMode ? "text-white" : "text-gray-500",
          )}
        >
          {modeTwoName}
        </button>
      </div>
    </div>
  );
}

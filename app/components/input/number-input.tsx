import clsx from "clsx";
import type { UseFormRegisterReturn } from "react-hook-form";

export function NumberInput({
  label,
  registration,
  error,
}: {
  label: string;
  registration: UseFormRegisterReturn;
  error?: { message?: string };
}) {
  const inputId = registration.name || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col w-full max-w-60">
      <label
        className="font-medium uppercase tracking-wide text-gray-500"
        htmlFor={inputId}
      >
        {label}
      </label>
      <input
        className={clsx(
          "text-xl text-gray-900 outline-none p-1.5 border-b",
          error
            ? "border-(--accent-color) bg-(--accent-color-light)"
            : "border-gray-300 bg-transparent",
        )}
        id={inputId}
        autoComplete="off"
        type="number"
        onFocus={(e) => e.target.select()}
        {...registration}
      />
      {error && (
        <p className="text-(--accent-color) text-sm">{error.message}</p>
      )}
    </div>
  );
}

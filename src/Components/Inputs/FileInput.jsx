import React from "react";

// FileInputButton component with customizable props
export default function FileInput({
  label,
  buttonColor = "bg-black",
  hoverColor = "hover:bg-[#000]",
  focusColor = "focus:bg-[#000]",
  onChange,
}) {
  return (
    <>
      <div className="relative inline-flex w-full items-center gap-2 rounded border border-slate-200 text-sm text-slate-500">
        <input
          id="file-upload"
          name="file-upload"
          type="file"
          onChange={onChange}
          className="peer order-2 [&::file-selector-button]:hidden"
        />
        <label
          htmlFor="file-upload"
          className={`inline-flex h-12 cursor-pointer font-mont items-center justify-center gap-2 whitespace-nowrap rounded ${buttonColor} px-6 text-sm font-medium tracking-wide text-white transition duration-300 ${hoverColor} ${focusColor} focus-visible:outline-none peer-disabled:cursor-not-allowed peer-disabled:border-emerald-300 peer-disabled:bg-emerald-300`}
        >
          {label}
        </label>
      </div>
      {/*<!-- End Reusable Button for file input --> */}
    </>
  );
}

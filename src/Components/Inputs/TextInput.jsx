import React from "react";

const TextInput = ({ type = "text", label, name, id, eventinput, value }) => {
  return (
    <div className="w-[100%] flex flex-col">
      <label
        className="text-[#000] pb-1 text-[14px] font-semibold font-mont"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder="your name"
        className="relative w-full h-10 px-3 border-2 text-[16px] font-normal font-mont placeholder-transparent transition-all rounded outline-none bg-white/80 focus-visible:outline-none peer border-[#3C3D37] text-[#000] autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-[#3C3D37] focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
      />
    </div>
  );
};

export default TextInput;

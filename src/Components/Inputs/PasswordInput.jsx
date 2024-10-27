import React, { useState } from "react";

const PasswordInput = ({ label, name, id, eventinput, value }) => {
  const [passwordStatus, setpasswordStatus] = useState(true);
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
        value={value}
        onChange={eventinput}
        type={passwordStatus ? "password" : "text"}
        placeholder="your name"
        class="relative w-full h-10 px-3 border-2 text-[16px] bg-white/80 font-normal font-mont placeholder-transparent transition-all rounded outline-none focus-visible:outline-none peer border-[#3C3D37] text-[#000] autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-[#3C3D37] focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
      />
      <div className="w-full flex justify-end">
        <div className="w-[10%] flex justify-end pr-3 relative z-10 -mt-7">
          {!passwordStatus ? (
            <i
              class="fa-regular fa-eye-slash cursor-pointer text-[#000]"
              onClick={() => {
                setpasswordStatus(true);
              }}
            ></i>
          ) : (
            <i
              class="fa-regular fa-eye cursor-pointer text-[#000]"
              onClick={() => {
                setpasswordStatus(false);
              }}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;

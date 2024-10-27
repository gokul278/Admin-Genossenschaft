import React from "react";
import logo from "../../assets/IMG/LOGO/LOGO.jpg";
import TextInput from "../../Components/Inputs/TextInput";
import PasswordInput from "../../Components/Inputs/PasswordInput";
import bg from "../../assets/IMG/LOGIN/01-BG.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-[100%] h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="w-[40%] h-[70vh] shadow-lg border-3 flex justify-center border-[#000] rounded"
        style={{
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="w-[80%] py-10 flex flex-col justify-center items-center">
          <img className="w-[100%] mb-10" src={logo} alt="logo" />
          <div className="w-[100%] pb-5">
            <TextInput
              label={"Username"}
              name={"username"}
              id={"usename"}
              type={"text"}
            />
          </div>
          <div className="w-[100%]">
            <PasswordInput
              label={"Password"}
              name={"password"}
              id={"password"}
            />
          </div>

          <div className="w-full mt-2 flex justify-end">
            <p className="font-mont font-semibold text-[14px] cursor-pointer">
              Forget Pasword ?
            </p>
          </div>

          <div className="mt-8 w-full">
            <button
              className="w-full bg-black rounded border-2 text-[#fff] border-black py-2 font-bold font-mont hover:border-[#000] hover:bg-white/80 hover:text-[#000] transition-all"
              onClick={() => {
                navigate("/home");
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

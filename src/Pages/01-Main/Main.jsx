import React from "react";
import logo from "../../assets/IMG/LOGO/FAV.png";
import Tooltip from "../../Components/ToolTip/Tooltip";
import home from "../../assets/IMG/NAVBAR/home.svg";
import about from "../../assets/IMG/NAVBAR/about.svg";
import board from "../../assets/IMG/NAVBAR/board.svg";
import chart from "../../assets/IMG/NAVBAR/chart.svg";
import membership from "../../assets/IMG/NAVBAR/membership.svg";
import documents from "../../assets/IMG/NAVBAR/documents.svg";
import report from "../../assets/IMG/NAVBAR/report.svg";
import form from "../../assets/IMG/NAVBAR/form.svg";
import units from "../../assets/IMG/NAVBAR/units.svg";
import gallery from "../../assets/IMG/NAVBAR/gallery.svg";
import logout from "../../assets/IMG/NAVBAR/logout.svg";
import settlement from "../../assets/IMG/NAVBAR/settlement.svg";
import archive from "../../assets/IMG/NAVBAR/archive.svg";
import { useLocation, useNavigate } from "react-router-dom";
import Home from "../03-Home/01-Home";
import About from "../04-About/About";

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="w-[100%] h-screen flex">
      <div className="w-[5%] bg-gray-800 border-r-2">
        <div className="w-full h-screen">
          <div className="w-full h-[10vh] flex justify-center border-b border-[#acacac]">
            <img className="w-[60%] my-4 rounded" src={logo} alt="logo" />
          </div>

          <div className="w-[100%] h-[80vh] overflow-y-auto">
            <div className="w-[100%] flex justify-center my-5">
              <Tooltip text="Home">
                <button
                  type="button"
                  className={`${
                    location.pathname === "/home" ? "bg-[#ffffff4d]" : null
                  } text-[#fff] p-2 rounded-full transition-all duration-150`}
                  onClick={() => {
                    navigate("/home");
                  }}
                >
                  <img src={home} className="w-[25px]" alt="home" />
                </button>
              </Tooltip>
            </div>

            <div className="w-[100%] flex justify-center my-5">
              <Tooltip text="About">
                <button
                  type="button"
                  className={`${
                    location.pathname === "/about" ? "bg-[#ffffff4d]" : null
                  } text-[#fff] p-2 rounded-full transition-all duration-150`}
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  <img src={about} className="w-[25px]" alt="about" />
                </button>
              </Tooltip>
            </div>

            <div className="w-[100%] flex justify-center my-5">
              <Tooltip text="Board">
                <button
                  type="button"
                  className="hover:bg-[#ffffff4d] text-[#fff] p-2 rounded-full transition-all duration-150"
                  onClick={() => {
                    navigate("/board");
                  }}
                >
                  <img src={board} className="w-[25px]" alt="board" />
                </button>
              </Tooltip>
            </div>

            <div className="w-[100%] flex justify-center my-5">
              <Tooltip text="Organization chart">
                <button
                  type="button"
                  className="hover:bg-[#ffffff4d] text-[#fff] p-2 rounded-full transition-all duration-150"
                  onClick={() => {
                    navigate("/chart");
                  }}
                >
                  <img src={chart} className="w-[25px]" alt="chart" />
                </button>
              </Tooltip>
            </div>

            <div className="w-[100%] flex justify-center my-5">
              <Tooltip text="Membership">
                <button
                  type="button"
                  className="hover:bg-[#ffffff4d] text-[#fff] p-2 rounded-full transition-all duration-150"
                  onClick={() => {
                    navigate("/membership");
                  }}
                >
                  <img src={membership} className="w-[25px]" alt="membership" />
                </button>
              </Tooltip>
            </div>

            <div className="w-[100%] flex justify-center my-5">
              <Tooltip text="Regulations & Documents">
                <button
                  type="button"
                  className="hover:bg-[#ffffff4d] text-[#fff] p-2 rounded-full transition-all duration-150"
                  onClick={() => {
                    navigate("/documents");
                  }}
                >
                  <img src={documents} className="w-[25px]" alt="membership" />
                </button>
              </Tooltip>
            </div>

            <div className="w-[100%] flex justify-center my-5">
              <Tooltip text="Annual Report">
                <button
                  type="button"
                  className="hover:bg-[#ffffff4d] text-[#fff] p-2 rounded-full transition-all duration-150"
                  onClick={() => {
                    navigate("/report");
                  }}
                >
                  <img src={report} className="w-[25px]" alt="membership" />
                </button>
              </Tooltip>
            </div>

            <div className="w-[100%] flex justify-center my-5">
              <Tooltip text="Application Form">
                <button
                  type="button"
                  className="hover:bg-[#ffffff4d] text-[#fff] p-2 rounded-full transition-all duration-150"
                  onClick={() => {
                    navigate("/form");
                  }}
                >
                  <img src={form} className="w-[25px]" alt="membership" />
                </button>
              </Tooltip>
            </div>

            <div className="w-[100%] flex justify-center my-5">
              <Tooltip text="Units">
                <button
                  type="button"
                  className="hover:bg-[#ffffff4d] text-[#fff] p-2 rounded-full transition-all duration-150"
                  onClick={() => {
                    navigate("/units");
                  }}
                >
                  <img src={units} className="w-[25px]" alt="membership" />
                </button>
              </Tooltip>
            </div>

            <div className="w-[100%] flex justify-center my-5">
              <Tooltip text="Picture gallery">
                <button
                  type="button"
                  className="hover:bg-[#ffffff4d] text-[#fff] p-2 rounded-full transition-all duration-150"
                  onClick={() => {
                    navigate("/gallery");
                  }}
                >
                  <img src={gallery} className="w-[25px]" alt="membership" />
                </button>
              </Tooltip>
            </div>

            <div className="w-[100%] flex justify-center my-5">
              <Tooltip text="Settlement">
                <button
                  type="button"
                  className="hover:bg-[#ffffff4d] text-[#fff] p-2 rounded-full transition-all duration-150"
                  onClick={() => {
                    navigate("/settlement");
                  }}
                >
                  <img src={settlement} className="w-[25px]" alt="membership" />
                </button>
              </Tooltip>
            </div>

            <div className="w-[100%] flex justify-center my-5">
              <Tooltip text="Archive">
                <button
                  type="button"
                  className="hover:bg-[#ffffff4d] text-[#fff] p-2 rounded-full transition-all duration-150"
                  onClick={() => {
                    navigate("/archive");
                  }}
                >
                  <img src={archive} className="w-[25px]" alt="membership" />
                </button>
              </Tooltip>
            </div>
          </div>

          <div className="w-full h-[10vh] flex justify-center border-t border-[#acacac]">
            <img
              className="w-[50%] my-4 rounded cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
              src={logout}
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div className="w-[95%] bg-[#eff3f8] flex justify-center items-center">
        {location.pathname === "/home" ? (
          <Home />
        ) : location.pathname === "/about" ? (
          <About />
        ) : null}
      </div>
    </div>
  );
};

export default Main;

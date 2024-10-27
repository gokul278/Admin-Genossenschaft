import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/00-Login/Login";
import Main from "./Pages/01-Main/Main";
import { useEffect, useState } from "react";

function App() {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setShowPage(screenWidth > 1000);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty
  return (
    <>
      {showPage ? (
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Login />} />
            <Route path="/home" element={<Main />} />
            <Route path="/about" element={<Main />} />
            <Route path="/board" element={<Main />} />
            <Route path="/chart" element={<Main />} />
            <Route path="/membership" element={<Main />} />
            <Route path="/documents" element={<Main />} />
            <Route path="/report" element={<Main />} />
            <Route path="/form" element={<Main />} />
            <Route path="/units" element={<Main />} />
            <Route path="/gallery" element={<Main />} />
            <Route path="/settlement" element={<Main />} />
            <Route path="/archive" element={<Main />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <>
          <div className="w-[100%] h-[100vh] flex justify-center items-center">
            <h1 className="w-[90%] text-center font-bold text-[20px] font-mont">
              Admin access is currently unavailable on mobile devices. Could you
              please switch to a desktop to access the Admin Page?{" "}
            </h1>
          </div>
        </>
      )}
    </>
  );
}

export default App;

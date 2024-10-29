import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/00-Login/Login";
import Main from "./Pages/01-Main/Main";
import { useEffect, useState } from "react";

function App() {
  const [showPage, setShowPage] = useState(true);

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
  }, []);

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
        <div className="w-full h-screen flex justify-center items-center">
          <h1 className="w-4/5 text-center font-bold text-lg font-mont">
            Admin access is currently unavailable on mobile devices. Please switch to a desktop to access the Admin Page.
          </h1>
        </div>
      )}
    </>
  );
}

export default App;

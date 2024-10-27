import React, { useState } from "react";
import { createPortal } from "react-dom";

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({});

  const handleMouseEnter = (event) => {
    setShowTooltip(true);
    const rect = event.target.getBoundingClientRect();
    setTooltipPosition({
      top: rect.top + window.scrollY + rect.height / 2,
      left: rect.left + window.scrollX + rect.width,
    });
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip &&
        createPortal(
          <div
            className="absolute w-max p-2 text-sm text-white bg-gray-800 rounded-md shadow-lg z-50"
            style={{
              position: "absolute",
              top: `${tooltipPosition.top}px`,
              left: `${tooltipPosition.left + 20}px`, // Adjust as needed for positioning
              transform: "translateY(-50%)",
            }}
          >
            {text}
            <div
              className="absolute w-0 h-0 border-t-6 border-b-6 border-r-6"
              style={{
                top: "50%",
                left: "-6px",
                transform: "translateY(-50%)",
                borderTopColor: "transparent",
                borderBottomColor: "transparent",
                borderRightColor: "gray",
              }}
            ></div>
          </div>,
          document.body // render the tooltip at the body level
        )}
    </div>
  );
};

export default Tooltip;

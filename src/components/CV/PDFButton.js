// components/PDFButton.js
import React from "react";
import { FaDownload } from "react-icons/fa";

const PDFButton = () => {
  const handleClick = () => {
    alert(
      'To save as PDF: 1. Open in browser 2. Press Ctrl+P (Cmd+P on Mac) 3. Choose "Save as PDF" as destination'
    );
  };

  return (
    <button className="pdf-button" onClick={handleClick}>
      <FaDownload /> Download as PDF
    </button>
  );
};

export default PDFButton;

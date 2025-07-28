// components/PDFButton.js
import React from "react";
import { FaDownload } from "react-icons/fa";

const PDFButton = () => {
  const handleClick = (e) => {
    e.preventDefault();
    alert(
      'To save as PDF: 1. Open in browser 2. Press Ctrl+P (Cmd+P on Mac) 3. Choose "Save as PDF" as destination'
    );
  };

  return (
    <a href="#" className="pdf-button" onClick={handleClick}>
      <FaDownload /> Download as PDF
    </a>
  );
};

export default PDFButton;

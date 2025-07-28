// components/Declaration.js
import React from "react";

const Declaration = () => {
  return (
    <div className="declaration">
      <p>
        I hereby declare that all the information furnished in this curriculum
        vitae is true and accurate to the best of my knowledge. I understand
        that any misrepresentation may result in termination of employment or
        internship.
      </p>
      <div className="signature">
        <div>
          <div className="signature-line"></div>
          <div>Ashwin Gautam</div>
          <div style={{ fontSize: "14px", color: "#555" }}>Signature</div>
        </div>
      </div>
    </div>
  );
};

export default Declaration;

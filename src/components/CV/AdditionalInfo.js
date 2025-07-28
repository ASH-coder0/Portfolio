// components/AdditionalInfo.js
import React from "react";
import InfoCard from "./InfoCard";

const AdditionalInfo = () => {
  return (
    <div className="additional-info">
      <InfoCard
        title="Languages"
        icon="fas fa-language"
        items={[
          "English (Professional Proficiency)",
          "Nepali (Native)",
          "Hindi (Conversational)",
        ]}
      />
      <InfoCard
        title="Personal Details"
        icon="fas fa-user"
        items={[
          "Date of Birth:OCT 08, 2001",
          "Nationality: Nepalese",
          "Availability: 20+ hours/week",
        ]}
      />
    </div>
  );
};

export default AdditionalInfo;

import React from "react";
import CurriculumTabs from "./components/CurriculumTabs";
import PricingPlans from "./components/PricingPlans";
import PartnershipModels from "./components/PartnershipModels";
import ContactCTA from "./components/ContactCTA";
import "./school.css";

const SchoolPartnership = () => {
  return (
    <div className="school-container">
      <CurriculumTabs />
      <PartnershipModels />
      <PricingPlans />
      <ContactCTA />
    </div>
  );
};

export default SchoolPartnership;

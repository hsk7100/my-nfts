import React from "react";
import "./brandIntegration.css";

const BrandIntegration = () => {
  return (
    <div className="brands-integration absolute-center">
      <img
        src={require("../../assets/01.jpg")}
        alt="brand-logos"
        className="bi-logos"
      />
      <img
        src="https://cdn.logojoy.com/wp-content/uploads/2018/08/23161110/124.png"
        alt="brand-logos"
        className="bi-logos"
      />
      <img
        src={require("../../assets/04.jpg")}
        alt="brand-logos"
        className="bi-logos"
      />
      <img
        src="https://cdn.dribbble.com/users/1076456/screenshots/6366571/personal_logo_dribbble.png?compress=1&resize=400x300"
        alt="brand-logos"
        className="bi-logos"
      />
    </div>
  );
};

export default BrandIntegration;

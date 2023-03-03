import React from "react";
import { INFO_ITEMS } from "../../data/infoitems";
import "./infoSection.css";
import InfoItem from "./InfoItem";

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="is-heading absolute-center">
        <span className="heading-gradient">Create and sell you NFTs</span>
      </div>
      <div className="is-items-container">
        {INFO_ITEMS.map((_infoItem) => (
          <InfoItem item={_infoItem} />
        ))}
      </div>
    </div>
  );
};

export default InfoSection;

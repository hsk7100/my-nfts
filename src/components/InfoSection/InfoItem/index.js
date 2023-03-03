import React from "react";
import "./infoItem.css";
// as a object props mai aaya hai values.
// id: 1,
//     icon: require("../assets/wallet.png"),
//     section_title: "Set up your wallet",
//     description:

const InfoItem = (props) => {
  const { item } = props;
  return (
    <div className="info-item absolute-center">
      <img alt={item.section_title} src={item.icon} className="ii-icon" />
      <div className="ii-title">{item.section_title}</div>
      <div className="ii-description">{item.description}</div>
    </div>
  );
};

export default InfoItem;

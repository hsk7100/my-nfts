import React from "react";
import "./trendingCard.css";
// jis naam ka function hai uska pehle div bnaoya kro
// jo puure element ka parent jayse behave krega also we can give properties to that div in future.
// inner-wrapper mera gradient background hai
// tc-content black background hai
// classname do fhir uske ander waale div ko  parentClass ke naame ko chota krke info do.

const TrendingCard = (props) => {
  const { nft } = props;
  return (
    <div className="trending-card absolute-center">
      <div className="tc-inner-wrapper">
        <div className="tc-content">
          <img alt={nft.user_name} src={nft.banner} className="tc-banner " />
          <div className="tc-user-info">
            <div className="tc-ui-left">
              <img
                alt={nft.user_name}
                className="tc-user-logo"
                src={nft.user_photo}
              />
              <div>
                <div className="tc-ui-username">{nft.user_name}</div>
                <div className="tc-ui-userhandle">{nft.userhandle}</div>
              </div>
            </div>
            <img
              alt="ETH ON SOLANA"
              className="tc-solana-logo"
              src="https://i.seadn.io/gae/MO1d2-RDgVf4NSdfjlqBBHSCZkMD0mfvGG_H_l_U_u75I384TkmkpnjMq1IjMV9NgChZ8LMwidRkKIZNB71ArYPuQvWUY1O-S5OrLg?auto=format&w=256"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;

import React from "react";
import Button from "../../button";
import "./topFold.css";

const TopFold = () => {
  return (
    <div className="topfold absolute-center">
      <div className="tf-left">
        <div className="tf-heading">
          Discover collect, & sell
          <span className="heading-gradient">Extraordinary</span> NFTs
        </div>
        <div className="tf-description">
          Please make sure that you are buying and selling the most trending
          NFTs out there. Welcome to my project -
          <strong>Developer Himanshu </strong>
        </div>
        <div className="tf-left-btns">
          <Button btnType="PRIMARY" btnText="EXPLORE" />
          <Button
            btnType="SECONDARY"
            btnText="CREATE"
            customClass="tf-left-secondary-btn"
          />
        </div>
        <div className="tf-left-infoStats">
          <div className="tf-is-infoItem absolute-center">
            <div className="tf-infoItem-count">200K+</div>
            <div className="tf-infoItem-label">Collections</div>
          </div>
          <div className="tf-is-infoItem absolute-center">
            <div className="tf-infoItem-count">10K+</div>
            <div className="tf-infoItem-label">Artists</div>
          </div>
          <div className="tf-is-infoItem absolute-center">
            <div className="tf-infoItem-count">423K+</div>
            <div className="tf-infoItem-label">Community</div>
          </div>
        </div>
      </div>
      <div className="tf-right">
        <div className="tf-r-bg-bob"></div>
        <div className="tf-right-diamonds">
          <div className="tf-r-diamond-items absolute-center">
            <img
              className="tf-r-diamond-imgss"
              alt="diamond-banner"
              src="https://i.seadn.io/gcs/files/22284fa002c7612a875381ab66b22abf.gif?auto=format&w=256"
            />
          </div>
          <div className="tf-r-diamond-items absolute-center">
            <img
              className="tf-r-diamond-imgss "
              alt="diamond-banner"
              src="https://i.seadn.io/gcs/files/5a54bdcdf30ed087c5ab530e37de6031.gif?auto=format&w=128"
            />
          </div>
          <div className="tf-r-diamond-items absolute-center">
            <img
              className="tf-r-diamond-imgss "
              alt="diamond-banner"
              src="https://i.seadn.io/gae/SygdTBiSbzKa1bwb6zW-1v_4PwqFvUP1p9mT66DrBIwXMyYXP9g8iFGgR06aJQdnPBHZKTa3dAvqK5Jeb7CHxMpk4-VWa_c-JPcmTA?auto=format&w=384"
            />
          </div>
          <div className="tf-r-diamond-items absolute-center">
            <img
              className="tf-r-diamond-imgss "
              alt="diamond-banner"
              src="https://i.seadn.io/gcs/files/543630193cf32ac09c0356e767d2891e.gif?auto=format&w=128"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFold;

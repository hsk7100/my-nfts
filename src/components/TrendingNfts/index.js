import React from "react";
import "./trendingNfts.css";
import Slider from "react-slick";
import { TRENDING_NFTS } from "../../data/trendingNfts";
import Button from "../../button";
import TrendingCard from "./TrendingCard";

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  autoPlay: true,
  speed: 500,
  arrows: false,
};

const TrendingNfts = () => {
  return (
    <div className="trending-nfts">
      <div className="tn-title absolute-center">
        <span className="heading-gradient">TRENDING NFTs</span>
      </div>
      <div className="tn-r-bg-bob"></div>
      <Slider {...settings}>
        {/* TRENDING_NFTS wha pe array of objects hai un values ko ek ek karke _nfts mai la ke card ko dena hai. */}
        {TRENDING_NFTS.map((_nfts) => (
          <TrendingCard nft={_nfts} />
        ))}
      </Slider>
      <div className="tn-btn absolute-center">
        <Button
          btnText="SEE MORE >>"
          type="Secondary"
          customClass="seemore-btn"
        />
      </div>
    </div>
  );
};

export default TrendingNfts;

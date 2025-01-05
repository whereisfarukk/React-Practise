import React from "react";
import NextPage from "../../icons/NextPage";
import VideoIcon from "../../icons/VideoIcon";
import Icon from "../../icons/Icon";
import room_img from "/assets/room.png";
export default function SecondRow() {
  return (
    <div>
      <div className="row-2">
        <div className="image">
          <img src={room_img}></img>
          <div className="Card_overlap">
            <section className="oval">
              <VideoIcon />
            </section>
            <section className="Text">
              <h4>Virtual home tour</h4>
              <p>We provide you with virtual tour</p>
            </section>
          </div>
          <div className="Card-below-overlap">
            <h4>Find the best deal</h4>
            <p>Browse thousands of properties</p>
            <div className="circle">
              <Icon
                primaryColor="#7065F0"
                secondaryColor="white"
                strokeColor="#7065F0"
              />
            </div>
          </div>
        </div>
        <div className="text-content">
          <h2>Build Time Commitment</h2>
          <p>
            We commit to completing your single-storey home within a timeframe
            of 6 months, and double-storey homes within 10 months. Recognizing
            the potential financial strain caused by project delays, we have
            instituted a rigorous Stress Tested Building Process. In the event
            of any construction delays, we pledge to compensate you with $5000
            per month to alleviate mortgage stress.{" "}
          </p>
          <button className="make-your-maakan">
            See more
            <NextPage style={{ color: "white" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

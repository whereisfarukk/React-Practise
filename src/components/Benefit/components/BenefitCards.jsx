import React from "react";
import Icon from "../../icons/Icon";
const BenefitCards = () => {
  return (
    <div className="text">
      <div className="circle">
        <Icon />
      </div>
      <h4>A Legacy of Excellence</h4>
      <div
        style={{
          fontWeight: "400",
          lineHeight: "160%",
        }}
      >
        With over 100 completed projects and a reputation for exceptional
        craftsmanship, The Makaan Builders has become a trusted name in the
        industry. Our commitment to quality and customer satisfaction is evident
        in every home we build.
      </div>
    </div>
  );
};

export default BenefitCards;

import React from "react";
import SwipeableViews from "react-swipeable-views";
import stayUpdatedImage from "../../assets/images/stay_updated.svg";
import stayAlertImage from "../../assets/images/stay_alert.svg";
import readNewsImage from "../../assets/images/read_news.svg";

export default function OnboardingSwipableViews() {
  const [index, setIndex] = React.useState(0);

  const handleIndexChange = (index) => {
    console.log(index);
    setIndex(index);
  };

  const Item = (props) => {
    return (
      <div className="swipable-item">
        <img src={props.image} alt="" />
        <div className="gap"></div>
        <h3 className="title">{props.title}</h3>
        <p className="desc">{props.desc}</p>
      </div>
    );
  };

  return (
    <div className="onboarding-swipable-views">
      <SwipeableViews index={index} onChangeIndex={handleIndexChange}>
        <Item
          image={stayUpdatedImage}
          title="Stay Updated"
          desc="lorem cnsjgndv vbdajvhb hjvfbjas"
        ></Item>
        <Item
          image={stayAlertImage}
          title="Stay Alerted"
          desc="lorem cnsjgndv vbdajvhb hjvfbjas"
        ></Item>
        <Item
          image={readNewsImage}
          title="Read News"
          desc="lorem cnsjgndv vbdajvhb hjvfbjas"
        ></Item>
      </SwipeableViews>
      <div className="pagination">
        <div className={`dots ${index === 0 && "active"}`}></div>
        <div className={`dots ${index === 1 && "active"}`}></div>
        <div className={`dots ${index === 2 && "active"}`}></div>
      </div>
    </div>
  );
}

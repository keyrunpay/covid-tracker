import React from "react";
import SecondaryScreenHead from "../../components/SecondaryScreenHead";
import { colors } from "../../utils/color";
import newsIcon from "../../assets/images/bullhorn.svg";
import NewsItem from "./NewsItem";
import randImage from "../../assets/images/covid.jpg";
import eImage from "../../assets/images/ekantipur.jpg";

export default function NewsView() {
  return (
    <section id="news">
      <SecondaryScreenHead
        title="News"
        subtitle="Recent news"
        icon={newsIcon}
        color={colors.orange}
      />
      <div className="wrap">
        <NewsItem
          source="Kantipur"
          time="3 hours ago"
          title="nbds sdbvsj nbsd bvsd vbsdj hbsdvdh hbsv hjvdsb"
          sourceImage={eImage}
          newsImage={randImage}
        />

        <NewsItem
          source="Kantipur"
          time="3 hours ago"
          title="nbds sdbvsj nbsd bvsd vbsdj hbsdvdh hbsv hjvdsb"
          sourceImage={eImage}
          newsImage={randImage}
        />
      </div>
    </section>
  );
}

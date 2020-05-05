import React from "react";
import phoneIcon from "../../assets/images/phone-call.svg";
import newsIcon from "../../assets/images/bullhorn.svg";
import chatIcon from "../../assets/images/message.svg";
import moreIcon from "../../assets/images/Group.svg";
import knowMoreImage from "../../assets/images/know_more.png";
import flagImage from "../../assets/images/nepalFlag.png";
import worldImage from "../../assets/images/world.png";
import arrowBtn from "../../assets/images/arrow_btn.svg";
import calendarIcon from "../../assets/images/calendar.svg";
import surveyIcon from "../../assets/images/survey.svg";
import bellIcon from "../../assets/images/bell.svg";
import reportIcon from "../../assets/images/report.svg";
import { colors } from "../../utils/color";
import { AppBar, StaySafeText } from "./components";
import StatsProgressBar from "../../components/StatsProgressBar";
import ButtonSheet, {
  ButtonSheetIconButton,
} from "../../components/ButtonSheet";
import IconButton from "../../components/IconButton";

export default function HomeScreenView({ history }) {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <section id="home-screen">
      <ButtonSheet visible={showMore} onClose={() => setShowMore(false)}>
        <ButtonSheetIconButton
          text="Events"
          onClick={() => history.push("/event")}
          color={colors.blue}
          icon={calendarIcon}
        />
        <ButtonSheetIconButton
          text="Survey"
          onClick={() => history.push("/survey")}
          color={colors.purple}
          icon={surveyIcon}
        />
        <ButtonSheetIconButton
          text="Reports"
          onClick={() => history.push("/report")}
          color={colors.orange}
          icon={reportIcon}
        />
        <ButtonSheetIconButton
          text="Notice"
          onClick={() => history.push("/notice")}
          color={colors.blue}
          icon={bellIcon}
        />
      </ButtonSheet>
      <div className="wrap">
        <AppBar name="Guest" />
        <StaySafeText />
        <div className="gap x2"></div>
        <div className="flex jcsb">
          <IconButton icon={phoneIcon} text="Contacts" color={colors.blue} />
          <IconButton
            icon={newsIcon}
            onClick={() => history.push("/news")}
            text="News"
            color={colors.orange}
          />
          <IconButton icon={chatIcon} text="Chat" color={colors.purple} />
          <IconButton
            icon={moreIcon}
            onClick={() => setShowMore(true)}
            text="More"
            color={colors.yellow}
          />
        </div>
        <div className="gap x2"></div>
        <KnowMore />
        <div className="gap x2"></div>
        <NepalStats />
        <div className="gap x2"></div>
        <GlobalStats />
        <div className="gap x2"></div>
      </div>
    </section>
  );
}

const GlobalStats = () => {
  return (
    <div className="homescreen-stats-card">
      <header className="flex jcsb">
        <div className="left flex ci">
          <img src={worldImage} alt="" />
          <div className="content">
            <div className="stats-of">Global</div>
            <div className="updated">Updated 6m ago</div>
          </div>
        </div>
        <div className="right">
          <img src={arrowBtn} alt="" />
        </div>
      </header>
      <div className="content">
        <StatsProgressBar
          keyz="Cases"
          value="3,106,700"
          color={colors.blue}
          width="100%"
        />
        <StatsProgressBar
          keyz="Recovered"
          value="944,593"
          color={colors.green}
          width="15%"
        />
        <StatsProgressBar
          keyz="Active"
          value="1,947,462"
          color={colors.orange}
          width="67%"
        />
        <StatsProgressBar
          keyz="Death"
          value="214,645"
          color={colors.red}
          width="7%"
        />
      </div>
      <div className="text-btn">
        <a href="#nowhere">Stats by country ></a>
      </div>
      <footer>
        <p>Source: worldometers.info</p>
      </footer>
    </div>
  );
};

const NepalStats = () => {
  return (
    <div className="homescreen-stats-card">
      <header className="flex jcsb">
        <div className="left flex ci">
          <img src={flagImage} alt="" />
          <div className="content">
            <div className="stats-of">Nepal</div>
            <div className="updated">Updated 6m ago</div>
          </div>
        </div>
        <div className="right">
          <img src={arrowBtn} alt="" />
        </div>
      </header>
      <div className="content">
        <div className="flex jcsb">
          <StatsProgressBar
            keyz="Tested"
            value="10,807"
            color={colors.blue}
            width="100%"
          />
          <div className="hgap x2"></div>
          <StatsProgressBar
            keyz="Positive"
            value="54"
            color={colors.orange}
            width="50%"
          />
        </div>
        <div className="flex jcsb">
          <StatsProgressBar
            keyz="Recovered"
            value="16"
            color={colors.green}
            width="10%"
          />
          <div className="hgap x2"></div>
          <StatsProgressBar
            keyz="Death"
            value="0"
            color={colors.red}
            width="2%"
          />
        </div>
      </div>
      <footer>
        <p>Source: mohp.gov.np</p>
      </footer>
    </div>
  );
};

const KnowMore = () => {
  return (
    <div className="know-more">
      <div className="contents">
        <p>All you need to know about coronavirus!</p>
        <button className="btn-know-more">Know More</button>
      </div>
      <div className="ilustration">
        <img src={knowMoreImage} alt="" />
      </div>
    </div>
  );
};

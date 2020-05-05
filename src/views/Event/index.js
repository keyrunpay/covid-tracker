import React from "react";
import SecondaryScreenHead from "../../components/SecondaryScreenHead";
import EventItem from "./EventItem";
import { colors } from "../../utils/color";
import eventIcon from "../../assets/images/calendar.svg";
import sImage from "../../assets/images/covid.jpg";

export default function EventView() {
  return (
    <section id="event">
      <SecondaryScreenHead
        title="Event"
        subtitle="Upcomming events"
        icon={eventIcon}
        color={colors.blue}
      />
      <div className="wrap">
        <EventItem
          title="Musical events to heal the boredom of people by social cafe"
          time="5 minute later"
          eventImage={sImage}
          organizer="Buggged"
        />
        <EventItem
          title="Musical events to heal the boredom of people by social cafe"
          time="5 minute later"
          eventImage={sImage}
          organizer="Buggged"
        />
      </div>
    </section>
  );
}

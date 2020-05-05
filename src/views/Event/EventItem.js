import React from "react";
import { ReactComponent as CalIcon } from "../../assets/images/calendar.svg";

export default function EventItem({ eventImage, organizer, time, title }) {
  return (
    <div className="event-item">
      <header>
        <img src={eventImage} alt="" />
        <div className="organizer">
          <p>{organizer}</p>
        </div>
      </header>
      <div className="wrap">
        <div className="content flex jcsb ci">
          <div className="left">
            <div className="time">{time}</div>
            <div className="title">{title}</div>
          </div>
          <div className="right">
            <CalIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

// 333
import React, { Fragment } from "react";
import classes from "./MeetupDetail.module.css";

const MeetupDetail = ({ meetupData }) => {
  return (
    <section className={classes.detail}>
      <img src={meetupData.image} alt={meetupData.title} />
      <h1>{meetupData.title}</h1>
      <address>{meetupData.address}</address>
      <p>{meetupData.desc}</p>
    </section>
  );
};

export default MeetupDetail;

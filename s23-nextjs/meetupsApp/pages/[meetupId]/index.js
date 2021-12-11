import React, { Fragment } from "react";
import { DUMMY_MEETUPS } from "..";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  const meetupData = {
    id: "m1",
    title: "Firt meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Rome_Montage_2017.png/800px-Rome_Montage_2017.png",
    address: "some address 5, 12345 Some City",
    desc: "have fun",
  };
  return <MeetupDetail meetupData={meetupData} />;
};

export default MeetupDetails;

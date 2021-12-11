// 329, 334

import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

export const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Firt meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Rome_Montage_2017.png/800px-Rome_Montage_2017.png",
    address: "some address 5, 12345 Some City",
    desc: "have fun",
  },
  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Plaza_Virgen_de_los_Reyes%2C_Seville%2C_Spain_-_Sep_2009.jpg/1280px-Plaza_Virgen_de_los_Reyes%2C_Seville%2C_Spain_-_Sep_2009.jpg",
    address: "some address 5, 12345 Some City",
    desc: "have fun",
  },
];
const HomePage = () => {
  const [loadedMeetups, setloadedMeetups] = useState([]);
  useEffect(() => {
    // send a http request and fetch
    setloadedMeetups(DUMMY_MEETUPS);
  }, [DUMMY_MEETUPS]);

  return <MeetupList meetups={loadedMeetups}></MeetupList>;
};

// 335 to render static page
export const getStaticProps = () => {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
};

export default HomePage;

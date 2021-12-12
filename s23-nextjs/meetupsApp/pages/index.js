// 329, 334, 337, 343, 345

import Head from "next/head";
import { MongoClient } from "mongodb";
import React, { Fragment, useEffect, useState } from "react";
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

// 337 serversideprops
// export const getServerSideProps = (context) => {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: DUMMY_MEETUPS,
//   };
// };

// 335 to render static page
export const getStaticProps = async () => {
  // 343 fetching meetups
  const client = await MongoClient.connect(
    "mongodb+srv://user:x96YNidVG8yTKrW@cluster0.ihrvp.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  const modifiedMeetups = meetups.map((meetup) => ({
    title: meetup.title,
    address: meetup.address,
    image: meetup.image,
    id: meetup._id.toString(),
  }));

  console.log("resultaado ", modifiedMeetups);
  client.close();

  return {
    props: {
      meetups: modifiedMeetups,
    },
    // 336 revalidate
    revalidate: 3600,
  };
};

const HomePage = (props) => {
  //   const [loadedMeetups, setloadedMeetups] = useState([]);
  //   useEffect(() => {
  //     // send a http request and fetch
  //     setloadedMeetups(DUMMY_MEETUPS);
  //   }, [DUMMY_MEETUPS]);

  //   ..., 345

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active Meetups"
        ></meta>
      </Head>{" "}
      <MeetupList meetups={props.meetups}></MeetupList>
    </Fragment>
  );
};

export default HomePage;

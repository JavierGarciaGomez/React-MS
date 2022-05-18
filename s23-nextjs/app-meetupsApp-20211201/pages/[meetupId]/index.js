// ..., 338, 344
import { MongoClient, ObjectId } from "mongodb";
import React, { Fragment } from "react";
import { DUMMY_MEETUPS } from "..";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const meetupData = {
  id: "m1",
  meetupId: "m1",
  title: "Firt meetup",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Rome_Montage_2017.png/800px-Rome_Montage_2017.png",
  address: "some address 5, 12345 Some City",
  desc: "have fun",
};

const MeetupDetails = (props) => {
  return <MeetupDetail meetupData={props.meetupData} />;
};

// 339
export const getStaticPaths = async () => {
  // 344
  const client = await MongoClient.connect(
    "mongodb+srv://user:x96YNidVG8yTKrW@cluster0.ihrvp.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};
// 338 to render static page
export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://user:x96YNidVG8yTKrW@cluster0.ihrvp.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;

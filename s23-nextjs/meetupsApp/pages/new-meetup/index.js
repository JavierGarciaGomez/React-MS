import React from "react";
import { DUMMY_MEETUPS } from "..";
import Layout from "../../components/layout/Layout";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
  const addMeetupHandler = (enteredData) => {
    DUMMY_MEETUPS.push(enteredData);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>;
}

export default NewMeetup;

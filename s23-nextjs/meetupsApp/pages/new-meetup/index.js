// ..., 342, 345
import { route } from "next/dist/next-server/server/router";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { DUMMY_MEETUPS } from "..";
import Layout from "../../components/layout/Layout";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

function NewMeetup() {
  const router = useRouter();
  const addMeetupHandler = async (enteredData) => {
    // 342
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log("data", data);
    router.push("/");
  };
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active Meetups"
        ></meta>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </Fragment>
  );
}

export default NewMeetup;

import React, { Fragment } from "react";
import Link from "next/link";

const News = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-great">NextJS is Great</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default News;

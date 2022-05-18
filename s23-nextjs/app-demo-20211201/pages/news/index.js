// 322
import React, { Fragment } from "react";
import Link from "next/link";

const News = () => {
  return (
    <Fragment>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/news/nexts-is-great">Next JS is great</Link>
        </li>
        <li>Next JS is really great</li>
      </ul>
    </Fragment>
  );
};

export default News;

// 325
import React from "react";
import { useRouter } from "next/router";

const newsDetail = () => {
  const router = useRouter();
  const id = router.query.newsId;
  console.log("id", id);

  return <h2>DETAILS {id}</h2>;
};

export default newsDetail;

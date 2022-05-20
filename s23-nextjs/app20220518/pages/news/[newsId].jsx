import React from "react";
import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  const { newsId } = router.query;
  return <div>[a ver]: {newsId} </div>;
};

export default DetailPage;

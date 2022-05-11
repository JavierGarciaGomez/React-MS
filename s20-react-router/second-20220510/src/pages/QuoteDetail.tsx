import React, { useEffect } from "react";
import { useParams, Routes, Route, Link, useLocation } from "react-router-dom";
import Comments from "../components/comments/Comments";
import { getSingleQuote } from "../components/lib/api";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";

// const DUMMY_QUOTES = [
//   { id: "q1", author: "Max", text: "Learning React is fun!" },
//   { id: "q2", author: "Maximilian", text: "Learning React is great!" },
// ];

export const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = useParams();
  const location = useLocation();
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  //   const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  //   if (!quote) {
  //     return <p>No quote found!</p>;
  //   }

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  console.log({ quoteId });
  console.log({ location });
  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />

      {/* <Route path={match.path} exact>
        </Route> */}

      <Routes>
        <Route
          path="/"
          element={
            <div className="centered">
              <Link className="btn--flat" to="comments">
                Load Comments
              </Link>
            </div>
          }
        />
        <Route path="comments" element={<Comments />} />
      </Routes>
    </>
  );
};

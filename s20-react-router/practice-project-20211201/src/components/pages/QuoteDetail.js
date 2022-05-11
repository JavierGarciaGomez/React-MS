// 276
import React, { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import useHttp from "../../hooks/hooks/use-http";
import { getSingleQuote } from "../../lib/lib/api";
import Comments from "../comments/Comments";
import { DUMMY_QUOTES } from "../data/DUMMY_QUOTES";
import HighlightedQuote from "../quotes/HighlightedQuote";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteDetail = () => {
  const { quoteId } = useParams();

  // const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);

  // const 287
  const match = useRouteMatch();

  const {
    sendRequest,
    status,
    data: quote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  console.log("hey", status, quote);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!quote.text) {
    return <div>No quote found</div>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route exact path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;

import { Fragment } from "react";
import { Quote } from "../../interfaces/interfaces";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
import { useNavigate, useLocation } from "react-router-dom";

const sortQuotes = (quotes: Quote[], ascending: boolean) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

type Props = {
  quotes: Quote[];
};
const QuoteList = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get("sort") === "asc";
  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const handleSort = () => {
    navigate(`?sort=${isSortingAscending ? "desc" : "asc"}`);
  };

  console.log("QUOTE LIST", { location });
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={handleSort}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;

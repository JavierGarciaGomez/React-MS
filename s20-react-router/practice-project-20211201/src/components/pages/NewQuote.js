// 276, ..., 283
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useHttp from "../../hooks/hooks/use-http";
import { addQuote } from "../../lib/lib/api";
import QuoteForm from "../quotes/QuoteForm";

const NewQuote = () => {
  // 288
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);
  const addQuoteHandler = (data) => {
    sendRequest(data);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;

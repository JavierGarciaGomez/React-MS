import React, { useEffect, useState } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useNavigate } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addQuote } from "../components/lib/api";

export const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (status === "completed") {
      navigate("/quotes");
    }
  }, [status]);

  const handleAddQuote = (quoteData: { author: string; text: string }) => {
    sendRequest(quoteData);
  };
  return <QuoteForm onAddQuote={handleAddQuote} isLoading={isLoading} />;
};

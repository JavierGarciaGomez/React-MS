import { useRef, FormEvent, useState } from "react";
import {} from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

type Props = {
  onAddQuote: (quoteData: { author: string; text: string }) => void;
  isLoading: boolean;
};
const QuoteForm = (props: Props) => {
  const [isEntering, setIsEntering] = useState(false);
  const authorInputRef = useRef<HTMLInputElement>(null!);
  const textInputRef = useRef<HTMLTextAreaElement>(null!);

  function submitFormHandler(event: FormEvent) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const handleFormFocus = () => {
    setIsEntering(true);
  };

  return (
    <Card>
      <form
        onFocus={handleFormFocus}
        className={classes.form}
        onSubmit={submitFormHandler}
      >
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea id="text" rows={5} ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className="btn">Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;

import classes from "./QuoteItem.module.css";
import { Quote } from "../../interfaces/interfaces";
import { Link } from "react-router-dom";

type Props = Quote;

const QuoteItem = (props: Props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link to={props.id} className="btn">
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;

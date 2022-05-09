import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

type Props = { id: string; name: string; price: number; description: string };
const ProductItem = (props: Props) => {
  const dispatch = useDispatch();
  const { name, price, description, id } = props;

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{name}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button
            onClick={() => {
              dispatch(cartActions.addItemToCart({ id, name, price }));
            }}
          >
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

import { CartItem as CartItemType } from "../../interfaces/interfaces";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

type Props = {
  item: CartItemType;
};
const CartItem = (props: Props) => {
  const dispatch = useDispatch();
  const { name, qty, totalPrice, price, id } = props.item;

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{qty}</span>
        </div>
        <div className={classes.actions}>
          <button
            onClick={() => {
              dispatch(cartActions.removeItemFromCart(id));
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              dispatch(cartActions.addItemToCart(props.item));
            }}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

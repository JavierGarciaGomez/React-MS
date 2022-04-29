import { useContext } from "react";
import { cartItem } from "../../interfaces/Interfaces";
import CartContext from "../../store/CartContext";
import Modal from "../UI/Modal";

// import Modal from '../UI/Modal';
// import CartItem from './CartItem';
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
// import CartContext from '../../store/cart-context';

type Props = {
  onClose: () => void;
};
const Cart = (props: Props) => {
  const { removeItem, addItem, cartState } = useContext(CartContext);
  const { items } = cartState;

  const totalAmount = `$${cartState.totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    removeItem!(id);
  };

  const cartItemAddHandler = (item: cartItem) => {
    addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

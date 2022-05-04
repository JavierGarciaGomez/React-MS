import { Fragment, useContext, useState } from "react";
import { cartItem, User } from "../../interfaces/Interfaces";
import CartContext from "../../store/CartContext";
import Modal from "../UI/Modal";

// import Modal from '../UI/Modal';
// import CartItem from './CartItem';
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { Checkout } from "./Checkout";
// import CartContext from '../../store/cart-context';

type Props = {
  onClose: () => void;
};

const Cart = (props: Props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const { removeItem, addItem, cartState, clearCart } = useContext(CartContext);
  const { items } = cartState;

  const totalAmount = `$${cartState.totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    removeItem!(id);
  };

  const cartItemAddHandler = (item: cartItem) => {
    addItem({ ...item, amount: 1 });
  };

  const handleOrder = () => {
    setIsCheckout(true);
  };

  const handleSubmitOrder = async (user: User) => {
    setIsSubmitting(true);
    await fetch(
      "https://tests-project-8925d-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user,
          orderedItems: items,
        }),
      }
    );

    setIsSubmitting(false);
    setDidSubmit(true);
    clearCart();
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

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={handleOrder}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={handleSubmitOrder} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      <>
        {!isSubmitting && !didSubmit && cartModalContent}
        {isSubmitting && isSubmittingModalContent}
        {!isSubmitting && didSubmit && didSubmitModalContent}
      </>
    </Modal>
  );
};

export default Cart;

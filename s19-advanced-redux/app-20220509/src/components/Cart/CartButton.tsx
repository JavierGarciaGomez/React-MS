import { UIActions } from "../../store/uiSlice";
import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

const CartButton = () => {
  const dispatch = useDispatch();
  const { totalQuantity } = useSelector((state: RootState) => state.cart);

  return (
    <button
      className={classes.button}
      onClick={() => {
        dispatch(UIActions.toggle());
      }}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;

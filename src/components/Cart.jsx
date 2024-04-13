import styles from "./Cart.module.css";
import { useContext } from "react";
import { AppContext } from "./AppContextProvider";

function Cart() {
  const { shoppingCart, clearCart } = useContext(AppContext);
  const totalCost = shoppingCart.reduce(
    (prev, item) => prev + item.cost * item.quantity,
    0
  );

  function checkout() {
    clearCart();
    alert("Thank you for shopping!");
  }

  return (
    <div>
      <div className={styles.cart}>
        <h2>My cart</h2>
        {shoppingCart.map((item) => (
          <div className={styles.item} key={item.id}>
            <span style={{ flexGrow: 1 }}>
              <strong>{item.name}</strong>
            </span>
            <span>x {item.quantity}</span>
          </div>
        ))}
        <p className={styles.total}>
          <strong>Total cost: {totalCost}</strong>
        </p>
        {totalCost > 0 && <button onClick={checkout}>CHECKOUT</button>}
      </div>
    </div>
  );
}

export default Cart;

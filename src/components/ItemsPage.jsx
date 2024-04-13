import styles from "./ItemsPage.module.css";
import { AppContext } from "./AppContextProvider";
import { useContext } from "react";

function ItemsPage({ pokemonData }) {
  const { shoppingCart, addToCart, removeFromCart } = useContext(AppContext);
  function hasPokemon(pokemon) {
    return (
      shoppingCart.reduce((total, item) => {
        return item.id === pokemon.id ? total + item.quantity : total;
      }, 0) > 0
    );
  }

  return (
    <div>
      <div className={styles["items-container"]}>
        {pokemonData.map((pokemon) => (
          <div key={pokemon.id} className={styles["item-card"]}>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.imageUrl} alt={pokemon.name} />
            <p>Type : {pokemon.type}</p>
            <p>
              <strong>Cost : {pokemon.cost}</strong>
            </p>
            <div className={styles["buttons-container"]}>
              <button
                className={styles["add"]}
                onClick={() => addToCart(pokemon)}
              >
                Add to cart
              </button>
              {hasPokemon(pokemon) && (
                <button
                  className={styles["remove"]}
                  onClick={() => removeFromCart(pokemon)}
                >
                  Remove from cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemsPage;

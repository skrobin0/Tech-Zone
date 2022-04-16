import { useEffect, useState } from "react";
import { getStoredCart } from "../Pages/Local-Storage/LocalStorage";

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getStoredCart();
    const keys = Object.keys(savedCart);

    fetch("https://desolate-plains-94007.herokuapp.com/products/byKeys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        console.log(products);

        if (products.length) {
          const storedCart = [];
          for (const key in savedCart) {
            const addedProduct = products.find(
              (product) => product.key === key
            );
            if (addedProduct) {
              const quantity = savedCart[key];
              addedProduct.quantity = quantity;
              storedCart.push(addedProduct);
            }
          }
          setCart(storedCart);
        }
      });
  }, []);

  return [cart, setCart];
};

export default useCart;

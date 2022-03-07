//local storage part..........

const addToLocalStorage = (id) => {
  const exists = getLocalStorage();
  let shopping_cart = {};
  if (!exists) {
    shopping_cart[id] = 1;
  } else {
    shopping_cart = JSON.parse(exists);
    if (shopping_cart[id]) {
      const newCount = shopping_cart[id] + 1;
      shopping_cart[id] = newCount;
    } else {
      shopping_cart[id] = 1;
    }
  }
  updateLocalStorage(shopping_cart);
};

const getLocalStorage = () => localStorage.getItem("shopping_cart");
const updateLocalStorage = (cart) => {
  localStorage.setItem("shopping_cart", JSON.stringify(cart));
};

const removeFromLocalStorage = (id) => {
  const exists = getLocalStorage();
  if (!exists) {
  } else {
    const shopping_cart = JSON.parse(exists);
    delete shopping_cart[id];
    updateLocalStorage(shopping_cart);
  }
};

const getStoredCart = () => {
  const exists = getLocalStorage();
  return exists ? JSON.parse(exists) : {};
};

const clearFromTheCart = () => {
  localStorage.removeItem("shopping_cart");
};

export {
  addToLocalStorage,
  removeFromLocalStorage,
  clearFromTheCart,
  getStoredCart,
};

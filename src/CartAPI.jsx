let cart = [];

export async function addToCart(product, quantity) {
  if (cart.some((item) => item.product.id === product.id)) {
    cart = cart.map((item) =>
      item.product.id === product.id
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  } else {
    cart.push({ product: product, quantity: quantity });
  }
}

export async function getTotalPayment() {
  let sum = 0;

  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].product.price * cart[i].quantity;
  }

  return sum;
}

export async function getCart() {
  return cart;
}

export async function getTotalNumberOfCart() {
  return cart.length;
}

const cart = [];

export async function addToCart(product, quantity) {
  cart.push({ product: product, quantity: quantity });
}

export async function getCart() {
  return cart;
}

export async function getTotalNumberOfCart() {
  return cart.length;
}

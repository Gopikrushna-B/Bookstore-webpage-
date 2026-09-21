// Cart is stored per browser in localStorage as [{ id, qty }, ...]
const CART_KEY = "bookstore_cart";

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function addToCart(id, qty = 1) {
  const cart = getCart();
  const line = cart.find((l) => l.id === Number(id));
  if (line) {
    line.qty += qty;
  } else {
    cart.push({ id: Number(id), qty });
  }
  saveCart(cart);
}

function setQty(id, qty) {
  let cart = getCart();
  if (qty <= 0) {
    cart = cart.filter((l) => l.id !== Number(id));
  } else {
    const line = cart.find((l) => l.id === Number(id));
    if (line) line.qty = qty;
  }
  saveCart(cart);
}

function removeFromCart(id) {
  const cart = getCart().filter((l) => l.id !== Number(id));
  saveCart(cart);
}

function clearCart() {
  saveCart([]);
}

function cartCount() {
  return getCart().reduce((sum, l) => sum + l.qty, 0);
}

function cartTotal() {
  return getCart().reduce((sum, l) => {
    const book = findBook(l.id);
    return book ? sum + book.price * l.qty : sum;
  }, 0);
}

// Updates the little badge in the header, on any page that has it.
function updateCartCount() {
  const el = document.getElementById("cart-count");
  if (!el) return;
  const count = cartCount();
  el.textContent = count;
  el.style.display = count > 0 ? "inline-flex" : "none";
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 1800);
}

// cartStore.js
import { ref, computed, watch } from 'vue';

// Reactive state for the cart items
const cartItems = ref(JSON.parse(localStorage.getItem('cart')) || []);

// Computed property for cart item count
const cartItemCount = ref(cartItems.value.length);

// Watch `cartItems` to sync with localStorage whenever it changes
watch(cartItems, (newItems) => {
  localStorage.setItem('cart', JSON.stringify(newItems));
}, { deep: true });

// Add item function
const addItemToCart = (item) => {
  const existingItem = cartItems.value.find(i => i.id === item.id);
  if (existingItem) {
    existingItem.quantity += item.quantity;
  } else {
    cartItems.value.push(item);
  }
};
// Remove item function
const removeItemFromCart = (id) => {
  cartItems.value = cartItems.value.filter(item => item.id !== id);
};

// Export everything needed in other components
export { cartItems, cartItemCount, addItemToCart, removeItemFromCart };

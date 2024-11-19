<template>
  <div class="cart-container">
    <div class="cart-items">
      <h2>Shopping Cart</h2>
      <p>{{ cartItems.length }} Items</p>
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          <div class="item-details">
            <img :src="item.img" alt="Product Image" />
            <div>
              <h3>{{ item.name }}</h3>
              <p>{{ item.category }}</p>
              <button @click="removeItem(item.id)">Remove</button>
            </div>
          </div>
          <div class="item-quantity">
            <button @click="decreaseQuantity(item)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(item)">+</button>
          </div>
          <div class="item-price">{{ formatPrice(item.price) }}</div>
          <div class="item-total">{{ formatPrice(item.price * item.quantity) }}</div>
        </li>
      </ul>
      <router-link to="/">← Continue Shopping</router-link>
    </div>

    <div class="order-summary">
      <h2>Order Summary</h2>
      <p>Items: {{ cartItems.length }}</p>
      <p>Total Price: {{ formatPrice(totalPrice) }}</p>
      <label for="shipping">Shipping:</label>
      <select v-model="shipping" id="shipping">
        <option value="5">Standard Delivery - $5.00</option>
        <option value="10">Express Delivery - $10.00</option>
      </select>
      <input v-model="promoCode" type="text" placeholder="Enter your code" />
      <button @click="applyPromoCode">Apply</button>
      <p>Total Cost: {{ formatPrice(totalPrice + parseFloat(shipping)) }}</p>
      <button @click="handleCheckout">Checkout</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import {removeItemFromCart} from './cartstore';

//  // This can be 'Home', 'Man', or 'Woman'
// const routerLink = computed(() => {
//   if (category.value === 'Home') {
//     return '/';
//   } else if (category.value === 'Man') {
//     return '/Man';
//   } else if (category.value === 'Woman') {
//     return '/Woman';
//   } else {
//     return '/';
//   }
// });




const cartItems = ref(JSON.parse(localStorage.getItem('cart')) || []);

const shipping = ref(5);
const promoCode = ref('');
const discount = ref(0);

const formatPrice = (value) => {
  return `$${value.toFixed(2)}`;
};

const totalPrice = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0) - discount.value;
});

const removeItem = (id) => {
  cartItems.value = cartItems.value.filter(item => item.id !== id);
  removeItemFromCart(id);
  
};

const increaseQuantity = (item) => {
  item.quantity++;
  localStorage.setItem('cart', JSON.stringify(cartItems.value));
};

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--;
    localStorage.setItem('cart', JSON.stringify(cartItems.value));
  }
};

const applyPromoCode = () => {
  if (promoCode.value === 'DISCOUNT10') {
    discount.value = 10;
  } else {
    discount.value = 0;
  }
};

const handleCheckout = () => {
  alert('Proceeding to checkout...');
  cartItems.value = [];
  localStorage.removeItem('cart');
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  background-color: #f4f7f9;
  margin: 0;
  padding: 0;
}

.cart-container {
  display: flex;
  justify-content:center;
  padding: 40px 20px;
  background-color: #f4f7f9;
  min-height: 100vh;
  box-sizing: border-box;
  flex-wrap: wrap;
  gap: 20px;
}

.cart-items,
.order-summary {
  width: 100%;
  max-width: 48%;
  background: #fff;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin-bottom: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

@media (max-width: 768px) {
  .cart-items,
  .order-summary {
    max-width: 100%;
  }
}

.cart-items:hover,
.order-summary:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

h2 {
  font-size: 28px;
  margin-bottom: 25px;
  color: #333;
  font-weight: 700;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.item-details {
  display: flex;
  align-items: center;
  gap: 15px;
}

.item-details img {
  width: 70px;
  height: 70px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.item-details img:hover {
  transform: scale(1.05);
}

.item-details div h3 {
  font-size: 20px;
  margin: 0;
  color: #333;
  font-weight: 600;
}

.item-details div p {
  font-size: 14px;
  margin: 5px 0;
  color: #666;
}

.item-details button {
  background: none;
  border: none;
  color: #ff6b6b;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  margin-top: 5px;
  transition: color 0.3s ease;
}

.item-details button:hover {
  color: #ff4b4b;
  text-decoration: underline;
}

.item-quantity,
.item-price,
.item-total {
  display: flex;
  align-items: center;
  font-size: 16px;
}

.item-quantity button {
  background-color: #f0f0f0;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  margin: 0 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.item-quantity button:hover {
  background-color: #e0e0e0;
  transform: scale(1.1);
}

.item-quantity span {
  width: 35px;
  text-align: center;
  font-size: 16px;
  color: #333;
}

.router-link {
  display: block;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
  font-size: 16px;
  text-align: center;
}

.router-link:hover {
  text-decoration: underline;
}

.order-summary h2 {
  margin-top: 0;
  font-size: 28px;
  color: #333;
  font-weight: 700;
  text-align: center;
}

.order-summary p {
  font-size: 16px;
  margin: 10px 0;
  color: #333;
  display: flex;
  justify-content: space-between;
}

label {
  font-size: 16px;
  margin: 10px 0 5px;
  display: block;
  color: #555;
}

select,
input[type="text"],
button {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

select:focus,
input[type="text"]:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

button[disabled] {
  background-color: #cccccc;
  cursor: not-allowed;
}

.cart-summary {
  margin-top: 20px;
  font-size: 18px;
  color: #333;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
}

.cart-actions {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.checkout-btn,
.clear-btn {
  width: 48%;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.checkout-btn {
  background-color: #28a745;
  color: white;
}

.checkout-btn:hover {
  background-color: #218838;
  transform: scale(1.05);
}

.clear-btn {
  background-color: #dc3545;
  color: white;
}

.clear-btn:hover {
  background-color: #c82333;
  transform: scale(1.05);
}
</style>

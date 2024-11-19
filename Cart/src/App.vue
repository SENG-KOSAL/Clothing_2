<template>
  <!-- Cart Toggle Button -->
  <button class="cart-toggle" @click="isCartOpen = !isCartOpen">
    {{ isCartOpen ? "Close" : "Open" }} Shopping Cart
  </button>

  <!-- Shopping Cart Modal -->
  <div class="shopping-cart" v-if="isCartOpen">
    <button class="close-cart" @click="isCartOpen = false">✕</button>
    <h2>Shopping Cart</h2>
    
    <!-- Cart Item List -->
     <ul class="listCard">
      <li v-for="(item, index) in cartItems" :key="item.id">
        <div><img :src="'image/' + item.image" alt="Product Image" /></div>
        <div>{{ item.name }}</div>
        <div>{{ formatPrice(item.totalPrice) }}</div>
        <div class="quantity-controls">
          <button @click="changeQuantity(index, item.quantity - 1)">−</button>
          <span class="count">{{ item.quantity }}</span>
          <button @click="changeQuantity(index, item.quantity + 1)">+</button>
        </div>
      </li>
    </ul>

      <!-- Cart Summary   -->
    <div class="cart-summary">
      <p>Total Price: <strong>{{ formatPrice(totalPrice) }}</strong></p>
      <p>Items in Cart: <strong>{{ totalQuantity }}</strong></p>
    </div>
    
    <!-- Checkout and Clear Cart Buttons -->
    <div class="checkout-buttons">
      <button class="checkout">Checkout</button>
      <button class="clear-cart" @click="clearCart">Clear Cart</button>
    </div>
  </div>

  <!-- Product List -->
  <div class="list">
    <div class="item" v-for="product in products" :key="product.id">
      <img :src="'image/' + product.image" alt="Product Image" />
      <div class="title">{{ product.name }}</div>
      <div class="price">{{ formatPrice(product.price) }}</div>
      <button @click="addToCart(product)">Add To Cart</button>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';

const isCartOpen = ref(false);

const products = ref([
  { id: 1, name: 'PRODUCT NAME 1', image: '1.PNG', price: 120000 },
  { id: 2, name: 'PRODUCT NAME 2', image: '2.PNG', price: 120000 },
  { id: 3, name: 'PRODUCT NAME 3', image: '3.PNG', price: 220000 },
  { id: 4, name: 'PRODUCT NAME 4', image: '4.PNG', price: 123000 },
  { id: 5, name: 'PRODUCT NAME 5', image: '5.PNG', price: 320000 },
  { id: 6, name: 'PRODUCT NAME 6', image: '6.PNG', price: 120000 }
]);

const cartItems = ref([]);

const totalPrice = computed(() => 
  cartItems.value.reduce((total, item) => total + item.totalPrice, 0)
);

const totalQuantity = computed(() => 
  cartItems.value.reduce((total, item) => total + item.quantity, 0)
);

function addToCart(product) {
  const itemIndex = cartItems.value.findIndex(item => item.id === product.id);
  if (itemIndex !== -1) {
    cartItems.value[itemIndex].quantity++;
    cartItems.value[itemIndex].totalPrice = cartItems.value[itemIndex].quantity * product.price;
  } else {
    cartItems.value.push({ ...product, quantity: 1, totalPrice: product.price });
  }
}

function changeQuantity(index, quantity) {
  if (quantity <= 0) {
    cartItems.value.splice(index, 1);
  } else {
    cartItems.value[index].quantity = quantity;
    cartItems.value[index].totalPrice = quantity * cartItems.value[index].price;
  }
}

function clearCart() {
  cartItems.value = [];
}

function formatPrice(value) {
  return value.toLocaleString();
}
</script>

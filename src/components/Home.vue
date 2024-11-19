<script setup>
import { ref,onMounted, watch } from 'vue';
import Navbar from './Navbar.vue';
import Banner from './Banner.vue';
import Props from './propsH.vue';
import Cart from './Cart.vue';

import shirt from './assets/07200410916-e1.jpg';
import shirt1 from './assets/basic sliim fit 2.jpg';
import shirt2 from './assets/seersucker printed shirt.jpg';
import shirt3 from './assets/streak print shirt 1.jpg';

const posts = [
  { id: 1, img: shirt, Name: 'Levi', price: 15 },
  { id: 2, img: shirt1, Name: 'Nike Air Jordan 1 ', price: 20 },
  { id: 3, img: shirt2, Name: 'Burberry Kensington', price: 10 },
  { id: 4, img: shirt3, Name: 'Ralph Lauren Polo Shirt', price: 15 },
];

//Add item
//=========================================================================================
// Cart data (this line is really importace)
const cart = ref(JSON.parse(localStorage.getItem('cart')) || []);

// const cart = ref([]);






//add the item
const handleAddToCart = (item) => {
  const existingItem = cart.value.find(cartItem => cartItem.id === item.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.value.push({ ...item, quantity: 1 });
  }
};

// Watch for changes in cart and update localStorage
watch(cart, (newCart) => {
  localStorage.setItem('cart', JSON.stringify(newCart));
}, { deep: true });


//checkout the item
const handleCheckout = () => {
  // Checkout logic
  alert("Proceeding to checkout...");
  cart.value = []; // Clear cart after checkout
  localStorage.removeItem('cart'); // Clear localStorage
};
//clear the item
const handleClearItems = () => {
  cart.value = []; // Clear cart
  localStorage.removeItem('cart'); // Clear localStorage
};


//=========================================================================================
</script>

<template>
  <div id="app">
    <Navbar />
    <Banner />
    <div class="container">
      <Props
        v-for="post in posts"
        :key="post.id"
        :Name="post.Name"
        :img="post.img"
        :price="post.price"
        @add-to-cart="handleAddToCart(post)"
        class="component-item"
      />
    </div>
    <!-- //import from other file -->
    <!-- <Cart :cartItems="cart" 
    @checkout="handleCheckout" 
    @clear-items="handleClearItems"  
    /> -->
    
  </div>
</template>


<style>
.container {
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  padding: 20px;
  border-radius: 1px;
  box-shadow: 0 4px 8px rgba(251, 249, 249, 0.928)}
.component-item {
  margin: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 305px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 1px;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.912);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.component-item img {
  width: 100%;
  border-radius: 33px;
}

.component-item h3 {
  margin: 1px 0 5px;
  font-size: 1.2em;
  color: #000000;
}

.component-item p {
  font-size: 0.9em;
  color: #4d4949;
}

.component-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: white;
}

#app {
  text-align: center;
  background-color: white; 
}
.cart-actions {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.checkout-btn, .clear-btn {
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.checkout-btn {
  background-color: #28a745; /* Green for checkout */
}

.clear-btn {
  background-color: #dc3545; /* Red for clear items */
}

.checkout-btn:hover {
  background-color: #218838;
}

.clear-btn:hover {
  background-color: #c82333;
}

/* Additional styles */
</style>

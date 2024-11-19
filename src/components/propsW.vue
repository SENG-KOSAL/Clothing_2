<!-- propsH.vue -->
<template>
  <div class="product">
    <img :src="img" alt="Product Image" />
    <h3>{{ Name }}</h3>
    <p>{{ formatPrice(price) }}</p>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  Name: String,
  img: String,
  price: Number,
});

const emit = defineEmits(['add-to-cart']);

function addToCart() {
  emit('add-to-cart');
}

function formatPrice(value) {
  return `$${value.toFixed(2)}`;
}
</script>

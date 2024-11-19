<script setup lang="ts">
import router from '@/routers';
import { toRefs } from 'vue';
import { cartItemCount, cartItems } from './cartstore';

const { cartItemCount: itemCount } = toRefs({ cartItemCount });
</script>

<template>
  
    <nav class="navbar">
      <div class="logo">TradeofB</div>
      <ul class="nav-links">
        
        <router-link to="/"> Home </router-link>
        <router-link to="/Man"> Man </router-link>
        <router-link to="/Woman"> Woman </router-link>
        <router-link to="/"> Promotion </router-link>   
      </ul>

      <div class="search-login">
        <div>
          <router-link to="/Cart"> 
            <svg  
              xmlns="http://www.w3.org/2000/svg" height="2em"viewBox="0 0 576 512"> 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
              
            </svg>  
            <span v-if="cartItemCount > 0" class="cart-count">{{ cartItemCount }}</span>
          </router-link>   
          
        </div>
        <div class="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div class="signup">
          <router-link to="/SignUpForm"> Sign up  </router-link>
        </div>
        
      </div>
    </nav>
    
      
    
  </template>
  
  <style scoped>
  .signup {
    font-size: 16px;
    font-weight: bold;
    color: #62626f;
    padding: 8px 16px;
    border: 1px solid #3e464f;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.signup a {
    color: inherit;
    text-decoration: none;
}

.signup:hover {
    background-color: #646e79;
    color: #ffffff;
}

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  .nav-links a {
    text-decoration: none;
    color: #000;
    font-size: 18px;
    padding: 5px 10px;
    transition: background-color 0.3s;
  }
  
  .nav-links a:hover {
    background-color: #f0f0f0;
  }
  
  .search-login {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  
  .search-bar input {
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .login {
    text-decoration: none;
    color: #000;
    font-size: 16px;
  }
  .cart-count {
  background-color: #ff4b4b;
  color: white;
  border-radius: 50%;
  padding: 3px 8px;
  font-size: 0.75em;
  font-weight: bold;
  position: absolute;
  top: 49px;
  right: px;
  min-width: 3px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
}

.cart-count:hover {
  transform: scale(1.1);
}

  </style>


<script setup>
  import props from "./propsM.vue";

  import { ref,onMounted, watch } from 'vue';
  import { toRefs } from 'vue';
  import { cartItemCount, cartItems } from './cartstore';
  const { cartItemCount: itemCount } = toRefs({ cartItemCount });


  import shirt10 from "./assets/Skirt/51gVqA510PL._AC_SY879_.jpg"
  // import shirt11 from "./assets/Skirt/51XvwhvN0wL._AC_SY879_.jpg"
  import shirt12 from "./assets/Skirt/BS-11741-DOUBLE-PLEATS-A-LINE-FLARE-SKIRT-LIGHT-DENIM.webp"
  import shirt13 from "./assets/Skirt/BSK-9529-PLEATED-SKIRT-BEIGE.webp"
  import shirt14 from "./assets/Skirt/D001_1_ae212fd7-bfe0-4610-a769-6716e43d8166_1001x1360.webp"
  import shirt15 from "./assets/Skirt/d001_1a29c863-0b9b-492d-a3bb-d4d6b7f6724c_1001x1360.webp"
  import shirt16 from "./assets/Skirt/D002_Beige_8299c874-be9c-4031-b621-d3aaf61a1269_1001x1360 (1).webp"
  import shirt17 from "./assets/Skirt/d002_Black_b291fb46-ce4c-4412-95a0-c91bc24e1fa7_1001x1360.webp"
  import shirt18 from "./assets/Skirt/d002_Dark_20gray_ab11a5f6-54a7-406c-95ab-81dec5d07e7a_1001x1360.webp"
  import shirt19 from "./assets/Skirt/d004_Black_a389d850-6676-4493-adc3-19e265e1cde0_1001x1360.webp"
  import shirt20 from "./assets/Skirt/D006_Black_55432f02-8e89-4805-8271-3d582759e522_1001x1360.webp"
  import shirt21 from "./assets/Skirt/Screenshot 2024-06-05 210623.png"
  import shirt22 from "./assets/Skirt/Screenshot 2024-06-05 210712.png"

  

  const posts = [
  { id: 1, img: shirt10, Name: "Puma Training Top", price: 27 },
  { id: 2, img: shirt12, Name: "Supreme Box Logo Tee", price: 90 },
  { id: 3, img: shirt13, Name: "Champion Crewneck", price: 32 },
  { id: 4, img: shirt14, Name: "Vans Graphic Tee", price: 20 },
  { id: 5, img: shirt15, Name: "Fila Logo Shirt", price: 22 },
  { id: 6, img: shirt16, Name: "New Balance Essentials", price: 25 },
  { id: 7, img: shirt17, Name: "Patagonia Organic Tee", price: 35 },
  { id: 8, img: shirt18, Name: "The North Face Tee", price: 28 },
  { id: 9, img: shirt19, Name: "Carhartt Workwear Tee", price: 30 },
  { id: 10, img: shirt20, Name: "Columbia Casual Tee", price: 25 },
  { id: 11, img: shirt21, Name: "Abercrombie & Fitch V-Neck", price: 27 },
  { id: 12, img: shirt22, Name: "Gap Relaxed Tee", price: 20 },
  
];

const cart = ref(JSON.parse(localStorage.getItem('cart')) || []);


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


</script>


<template>
    
    <nav class="navbar">
      <div class="logo">TradeofB</div>
      <ul class="nav-links">
        <router-link to="/"> Home </router-link>
        <router-link to="/Man"> Man </router-link>
        <router-link to="/Woman"> Woman </router-link>
        <router-link to="/Man"> Promotion </router-link>
      </ul>
      <div class="search-login">
        <router-link to="/"> 
            <svg  
              xmlns="http://www.w3.org/2000/svg" height="2em"viewBox="0 0 576 512"> 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
            </svg>  
            <span v-if="cartItemCount > 0" class="cart-count">{{ cartItemCount }}</span>
          </router-link>   
        <div class="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div class="signup">
          <router-link to="/SignUpForm"> Sign up  </router-link>
          
        </div>
      </div>
    </nav>
    <!-- <h2 class="title">Woman clothing</h2> -->
    <details>
      <summary class="title" > Woman Clothing</summary>
     <ul class="son_title">
      <router-link to="/Woman"><ul>All clothing</ul></router-link>
      <router-link to="/T_Shirt_Woman"><ul>T-Shirt</ul></router-link>
      <router-link to="/Dress"><ul>Dress</ul></router-link>
      <router-link to="/Skirt"><ul>Skirt</ul></router-link>
      <router-link to="/jean"><ul>Jean</ul></router-link>
       
      
       
     </ul>
    </details>
    <div id="app">
    
    <div class="container">
      <props
       v-for="post in posts"
        :key="post.id"
        :Name="post.Name"
        :img="post.img"
        :price="post.price"
        @add-to-cart="() => handleAddToCart(post)"
        class="component-item"
      />
    
    </div>
  </div>
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
  .navbar {
    display: flex;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #c0bbbb;
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
    
    /* text-decoration: none;
    color: rgb(84, 84, 84);
    font-size: 18px;
    padding: 8px 15px;
    transition: background-color 0.3s; */
    text-decoration: none;
    color: rgb(60, 60, 60); /* Slightly darker, modern text color */
    font-size: 18px;
    padding: 8px 15px;
    border-radius: 4px;
    transition: color 0.2s, background-color 0.2s, box-shadow 0.2s;
    background-color: transparent; /* No background initially */
  }
  
  .nav-links a:hover {
    color: #050404;
    background-color: rgba(0, 0, 0, 0.05); /* Very light background on hover */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for clean elevation effect */

    
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
    /* edit===== */
    .title {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 24px; /* Make the font large, but not overly big */
    padding: 10px 15px;
    font-weight: bold;
    cursor: pointer;
    color:  rgb(130, 125, 125); /* Clean, dark color */
    border-bottom: 1px solid rgba(0, 0, 0, 0.1); /* Soft border for a refined look */
    transition: color 0.3s ease ;
}

.title:hover {
    color: #292626; /* Subtle hover color */
    
    
    
}

.son_title {
    font-family: 'Lucida Sans', Geneva, Verdana, sans-serif;
    font-size: 18px;
    color: #333; /* Consistent with title color */
    list-style: none; /* Remove bullets for a cleaner look */
    padding: 10px 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px; /* Vertical gap between items */
}

.son_title li {
    padding: 5px 10px;
    border-radius: 4px; /* Rounded corners */
    transition: background-color 0.3s, color 0.3s ease;
}

.son_title li:hover {
    background-color: rgba(0, 0, 0, 0.05); /* Subtle hover background */
    color: #005f5f; /* Hover color matches title */
}

.son_title a {
    text-decoration: none;
    color: inherit; /* Inherits the li's color for a clean look */
}

details[open] .title {
    border-bottom: none; /* Remove border when expanded */
}


/* edit  */

.son_title a:hover {
    text-decoration: none;
    background-color: #cbc8c8;
}

  </style>
import Home from './components/Home.vue';
//Man
import clothing_Man from './components/clothing_Man.vue';
import Sweater_hoodie from './components/Sweater_hoodie.vue';
import TShirtMan from './components/T-shirtMan.vue';
import pant from './components/pant.vue';
import short from './components/short.vue';

//Woman===========
import clothing_Woman from './components/clothing_Woman.vue';
import TShirtWoman from './components/T-shirtWoman.vue';
import Dress from './components/Dress.vue';
import Skirt from './components/Skirt.vue';
import jean from './components/jean.vue';

import Cart from './components/Cart.vue';

////===================================================================================noteic
import SignUpForm from './Login\\signup/SignUpForm.vue';

import Login from './Login/signup/Login.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name: 'Home',
    component: Home,  // Ensure correct spelling
    path: '/'
  },
  //For clothing man
  {
    name: 'clothing_Man',
    component: clothing_Man,  // Ensure correct spelling
    path: '/Man'
  },
 
  {
    name: 'Sweater_hoodie',
    component: Sweater_hoodie,  // Ensure correct spelling
    path: '/Sweater_hoodie'
  },
  {
    name: 'T-shirtMan',
    component: TShirtMan,  // Ensure correct spelling
    path: '/T_Shirt'
  },
  {
    name: 'short',
    component: short,  // Ensure correct spelling
    path: '/Short'
  },
  {
    name: 'pant',
    component: pant,  // Ensure correct spelling
    path: '/Pant'
  },

  //Clothing for Woman
  {
    name: 'clothing_Woman',
    component: clothing_Woman,  // Ensure correct spelling
    path: '/Woman'
  },
  {
    name: 'T-shirtWoman',
    component: TShirtWoman,  // Ensure correct spelling
    path: '/T_Shirt_Woman'
  },
  {
    name: 'Dress',
    component: Dress,  // Ensure correct spelling
    path: '/Dress'
  },
  {
    name: 'Skirt',
    component: Skirt,  // Ensure correct spelling
    path: '/Skirt'
  },
  {
    name: 'jean',
    component: jean,  // Ensure correct spelling
    path: '/jean'
  },

  //
  {
    name: 'SignUpForm',
    component: SignUpForm,  // Ensure correct spelling
    path: '/SignUpForm'
  },
  {
    name: 'Login',
    component: Login,  // Ensure correct spelling
    path: '/Loginn'
  },
  {
    name: 'Cart',
    component: Cart,  // Ensure correct spelling
    path: '/Cart'
  },
];

const router = createRouter({
  history: createWebHistory(),  // Ensure correct spelling
  routes,
});

export default router;

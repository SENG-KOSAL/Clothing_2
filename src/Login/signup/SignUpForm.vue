<template>
  <div class="signup-wrapper">
    <div class="signup-container">
      <!-- Tabs for Sign up / Log in -->
      <div class="tab-container">
        <button class="tab" :class="{ active: !isLogin }" @click="isLogin = false">Sign up</button>
        <button class="tab" :class="{ active: isLogin }" @click="isLogin = true">Log in</button>
        <div class="tab-indicator" :class="{ 'login-tab': isLogin }"></div>
      </div>

      <!-- Conditional Content for Sign up or Log in -->
      <h2>{{ isLogin ? 'Log in' : 'Sign up' }}</h2>

      <!-- Social buttons (shown for both sign up and log in) -->
      <div class="social-buttons">
        <button class="social-button fb-button">
          <i class="fab fa-facebook"></i> {{ isLogin ? 'Log in with Facebook' : 'Sign up with Facebook' }}
        </button>
        <button class="social-button google-button">
          <i class="fab fa-google"></i> {{ isLogin ? 'Log in with Google' : 'Sign up with Google' }}
        </button>
      </div>

      <!-- Divider -->
      <div class="divider">
        <hr /> <span>OR</span> <hr />
      </div>

      <!-- Form Inputs: Sign up / Log in -->
      <form @submit.prevent="handleSubmit" :class="{ 'fade-in': true }">
        <div v-if="!isLogin" class="fade-in">
          <!-- Sign up form fields -->
          <div class="input-row">
            <input type="text" placeholder="First name" v-model="firstName" />
            <input type="text" placeholder="Last name" v-model="lastName" />
          </div>
        </div>

        <!-- Common input fields -->
        <input type="email" placeholder="Email address" v-model="email" class="fade-in" />
        
        <!-- Password field for both forms -->
        <input type="password" :placeholder="isLogin ? 'Password' : 'Create password'" v-model="password" class="fade-in" />

        <button type="submit" class="signup-button fade-in">{{ isLogin ? 'Log in' : 'Sign up' }}</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false, // Track the active tab
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      if (this.isLogin) {
        console.log('Logging in with:', this.email, this.password);
        // Implement login logic here
      } else {
        console.log('Signing up with:', this.firstName, this.lastName, this.email, this.password);
        // Implement signup logic here
      }
    },
  },
};
</script>

<style scoped>
/* Wrapper to center the form */
.signup-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(120deg, rgba(255, 153, 240, 0.3), rgba(204, 204, 255, 0.3));
}

/* Container for the signup form */
.signup-container {
  background: white;
  border-radius: 15px;
  padding: 20px;
  width: 400px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: fadeIn 0.8s ease;
}

/* Tab buttons */
.tab-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
}
.tab {
  width: 50%;
  padding: 10px;
  border: none;
  background: none;
  cursor: pointer;
}
.tab.active {
  font-weight: bold;
}

/* Tab Indicator */
.tab-indicator {
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 50%;
  height: 3px;
  background-color: black;
  transition: transform 0.3s ease;
}
.tab-indicator.login-tab {
  transform: translateX(100%);
}

/* Fade-in effect */
.fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Title */
h2 {
  margin: 20px 0;
  font-size: 24px;
}

/* Social buttons */
.social-buttons {
  margin-bottom: 20px;
}
.social-button {
  width: 100%;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}
.fb-button {
  background-color: #3b5998;
  color: white;
}
.google-button {
  background-color: white;
  color: black;
  border: 1px solid gray;
}
.social-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

/* Divider */
.divider {
  display: flex;
  align-items: center;
  margin: 20px 0;
}
.divider hr {
  flex: 1;
  border: none;
  border-top: 1px solid lightgray;
}
.divider span {
  padding: 0 10px;
  font-size: 12px;
  color: gray;
}

/* Form */
form {
  display: flex;
  flex-direction: column;
}
.input-row {
  display: flex;
  gap: 10px;
}
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
  transition: border-color 0.3s ease;
}
input:focus {
  border-color: #a3a3a3;
}

/* Sign up button */
.signup-button {
  padding: 10px;
  background-color: lightgray;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}
.signup-button:hover {
  background-color: gray;
}

</style>

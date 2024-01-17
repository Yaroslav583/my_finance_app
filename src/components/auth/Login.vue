<template>
  <div class="auth-box">
    <div class="container">
      <div class="brand-box">
        <div class="logo"></div>
        <div class="title">Kitty</div>

      </div>
      <div class="form-box">

        <div class="login-form">

          <h3>Login</h3>

          <div class="mb-3">
            <input type="email" placeholder="Email" class="form-control" id="email" v-model.trim="loginData.email"
                   :class="{ 'is-invalid': errorMessages.email.length > 0 }" required>
            <div class="invalid-feedback">
              <div v-for="error in errorMessages.email" :key="error">{{ error }}</div>
            </div>
          </div>

          <div class="mb-3">
            <input type="password" placeholder="Password" class="form-control" id="password"
                   v-model.trim="loginData.password" :class="{ 'is-invalid': errorMessages.password.length > 0 }"
                   required>
            <div class="invalid-feedback">
              <div v-for="error in errorMessages.password" :key="error">{{ error }}</div>
            </div>
          </div>

          <button @click="login">Sign Up</button>
        </div>

        <div class="description-box">
          <div>Don’t have an account?</div>
          <button class="btn btn-outline-secondary " @click="goToRegister">Sign Up</button>
        </div>
      </div>

    </div>

  </div>

</template>


<script>

import {mapStores} from "pinia";
import {useAccountStore} from "@/stores/account.js";

export default {
  data() {
    return {
      loginData: {
        email: null,
        password: null,
      },
      errorMessages: {
        email: [],
        password: [],
      },
    }
  },
  computed: {
    ...mapStores(useAccountStore),
  },
  methods: {
    login() {
      axios.post('/login', this.loginData).then(() => {
        this.accountStore.fetchMyAccount();
      }).catch((error) => {
        if (error.response && error.response.data && error.response.data.errors) {
          this.errorMessages.email = error.response.data.errors.email || [];
          this.errorMessages.password = error.response.data.errors.password || [];
        } else {
          console.error(error);
        }
      });
    },
    goToRegister() {
      this.$emit('goToRegister');
    }
  }

}
</script>
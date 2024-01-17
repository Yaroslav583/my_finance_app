<template>
  <div class="auth-box">
    <div class="container">
      <div class="brand-box">
        <div class="logo"></div>
        <div class="title">Kitty</div>
      </div>

      <div class="form-box">
        <div class="login-form">

          <h3>Create an account</h3>

          <input type="text" placeholder="Nickname" v-model.trim="registerData.name"/>

          <div>
            <input type="email" placeholder="Email"  id="email" v-model.trim="registerData.email"
                   :class="{ 'is-invalid': errorMessages.email.length > 0 }" required>
            <div class="invalid-feedback">
              <div v-for="error in errorMessages.email" :key="error">{{ error }}</div>
            </div>
          </div>

          <div >
            <input type="password" placeholder="Password"  id="password"
                   v-model.trim="registerData.password" :class="{ 'is-invalid': errorMessages.password.length > 0 }"
                   required>
            <div class="invalid-feedback">
              <div v-for="error in errorMessages.password" :key="error">{{ error }}</div>
            </div>
          </div>

          <input type="password" placeholder="Password confirmation" v-model.trim="registerData.password_confirmation"/>

          <button type="button" @click="register">Sign Up</button>
        </div>

        <div class="description-box">
          <div>Have an account?</div>
          <button class=" sing btn btn-outline-secondary " @click="goToLogin">Sign In</button>
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
      registerData: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
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
    register() {
      axios.post('/register', this.registerData).then(() => {
        this.accountStore.fetchMyAccount();
      }).catch((error) => {
        if (error.response && error.response.data && error.response.data.errors) {
          this.errorMessages.email = error.response.data.errors.email || [];
          this.errorMessages.password = error.response.data.errors.password || [];
        }
      });
    },
    goToLogin() {
      this.$emit('goToLogin');
    }
  }

}
</script>



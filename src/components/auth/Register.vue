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
          <input type="text" placeholder="Nickname" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Password confirmation" />
          <button>Sign In</button>
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
export default {
  methods: {
    goToLogin() {
      this.$emit('goToLogin');
    }
  }

}
</script>



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

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button>Sign Up</button>
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
export default {
  methods:{
    goToRegister(){
      this.$emit('goToRegister');
    }
  }

}
</script>
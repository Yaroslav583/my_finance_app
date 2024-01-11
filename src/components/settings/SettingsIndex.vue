<template>
  <div class="container">
    <div class="info">
      <h3>Settings</h3>
      <div class="user-info">
        <div class="avatar">H</div>
        <div class="user-details">
          <p>John Doe</p>
          <p>john.doe@gmail.com</p>
        </div>
      </div>
    </div>
    <div class="action">
      <div class="full">
        <div>
          <font-awesome-icon class="icon" icon="user"/>
          Manage account
        </div>
        <font-awesome-icon class="icon-right" icon="chevron-right"/>
        <div>
          <font-awesome-icon class="icon" icon="layer-group"/>Manage categories
        </div>
        <font-awesome-icon class="icon-right" icon="chevron-right"/>
      </div>
      <div>
        <font-awesome-icon class="icon" icon="right-from-bracket"/>
        Logout
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>


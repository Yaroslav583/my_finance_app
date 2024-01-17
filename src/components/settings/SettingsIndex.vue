<template>
  <div class="container">
    <div class="info">
      <h3>Settings</h3>
      <div class="user-info">
        <div class="avatar">{{ accountStore.account.name.slice(0,1) }}</div>
        <div class="user-details">
          <div>{{ accountStore.account.name }}</div>
          <div>{{ accountStore.account.email }}</div>
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
          <font-awesome-icon class="icon" icon="layer-group"/>
          Manage categories
        </div>
        <font-awesome-icon class="icon-right" icon="chevron-right"/>
      </div>
      <div @click="logout">
        <font-awesome-icon class="icon" icon="right-from-bracket"/>
        Logout
      </div>
    </div>
  </div>
</template>

<script>
import {mapStores} from "pinia";
import {useAccountStore} from "@/stores/account.js";

export default {
  data() {
    return {}
  },
  computed: {
    ...mapStores(useAccountStore),
  },
  methods: {
    logout() {
      axios.post(`/logout`).then(() => {
        this.accountStore.fetchMyAccount();
      })
    }
  }
}
</script>


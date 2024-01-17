<template>
  <div class="header">
    <div class="brand-box">
      <div class="logo"></div>
      <div class="title">Kitty</div>
    </div>
    <div class="avatar-icon-container">
      <font-awesome-icon icon="magnifying-glass"/>
      <div class="avatar">{{ accountStore.account.name.slice(0, 1) }}</div>
    </div>
  </div>


</template>


<script >
import {useAccountStore} from "@/stores/account.js";
import {mapStores} from "pinia";

export default {
  data() {
    return {}
  },

  computed: {
    ...mapStores(useAccountStore),
  },
}
</script>
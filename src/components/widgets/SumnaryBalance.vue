<template>

  <div class="content">
    <div class="balance-info">
      <div @click="coreStore.state = 'expenses'">
        <font-awesome-icon icon="money-bill"/>
        <p class="exp">-12,000</p>
        <p>Expenses </p>
      </div>
      <div>
        <font-awesome-icon icon="wallet"/>
        <p class="bal">58,000</p>
        <p>Balance </p>
      </div>
      <div @click="coreStore.state = 'incomes'">
        <font-awesome-icon icon="landmark"/>
        <p class="bal">70,000</p>
        <p>Income</p>
      </div>
    </div>
  </div>

</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
import {mapStores} from "pinia";
import {useCoreStore} from "@/stores/core.js";

export default {
  components: {FontAwesomeIcon},
  data() {
    return {}
  },
  computed: {
    ...mapStores(useCoreStore)
  },
}
</script>
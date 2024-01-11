<template>
<div class="home-page">
  <toolbar/>
  <month-toggler/>
  <sumnary-balance/>
  <div class="category">
    <div>
      <p>Salary</p>
      <font-awesome-icon class="briefcase" icon="basket-shopping"/>
      <p>500</p>
    </div>

    <div>
      <p>Bonuses</p>
      <font-awesome-icon class="gift" icon="shield"/>
      <p>500</p>
    </div>

    <div>
      <p>Investing</p>
      <font-awesome-icon class="chart" icon="mug-hot"/>
      <p>500</p>
    </div>
  </div>
</div>
</template>

<script>

import MonthToggler from "@/components/widgets/MonthToggler.vue";
import Toolbar from "@/components/widgets/Toolbar.vue";
import SumnaryBalance from "@/components/widgets/SumnaryBalance.vue";

export default {
  components:{
    MonthToggler,
    Toolbar,
    SumnaryBalance,
  },
  data() {
    return {}
  },

}
</script>



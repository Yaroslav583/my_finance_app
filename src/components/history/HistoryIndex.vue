<template>
  <div class="home-page">
    <toolbar/>
    <month-toggler/>
    <sumnary-balance/>

    <div class="cont">
      <div class="day">
        <p>dec, 12th</p>
        <p>-1125</p>

      </div>

      <div>
        <div class="shopping">
          <div class="icon-and-text">
            <font-awesome-icon class="me-2  case" icon="basket-shopping"/>
            <div class="subtext"> Egg & veggies <p>Groceries</p></div>
          </div>
          <p class="amount"> -500</p>
        </div>

        <div class="shopping">
          <div class="icon-and-text">
            <font-awesome-icon class="me-2 gift" icon="shield"/>
            <div class="subtext"> Egg & veggies <p>Groceries</p></div>
          </div>
          <p class="amount"> -352</p>
        </div>
        <div class="shopping">
          <div class="icon-and-text">
            <font-awesome-icon class="me-2 chart" icon="mug-hot"/>
            <div class="subtext"> Egg & veggies <p>Groceries</p></div>
          </div>
          <p class="amount"> -352</p>
        </div>
      </div>
    </div>
    <div class="cont">
      <div class="day">
        <p>dec, 12th</p>
        <p>-1125</p>

      </div>

      <div>
        <div class="shopping">
          <div class="icon-and-text">
            <font-awesome-icon class="me-2  wrench" icon="wrench"/>
            <div class="subtext"> Egg & veggies <p>Groceries</p></div>
          </div>
          <p class="amount"> -500</p>
        </div>

        <div class="shopping">
          <div class="icon-and-text">
            <font-awesome-icon class="me-2 gift" icon="shield"/>
            <div class="subtext"> Egg & veggies <p>Groceries</p></div>
          </div>
          <p class="amount"> -352</p>
        </div>
        <div class="shopping">
          <div class="icon-and-text">
            <font-awesome-icon class="me-2 jug" icon="jug-detergent"/>
            <div class="subtext"> Egg & veggies <p>Groceries</p></div>
          </div>
          <p class="amount"> -352</p>
        </div>
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

<template>

  <div class="home-page">
    <toolbar/>
    <month-toggler/>
    <sumnary-balance/>
    <div class="category ">
      <div v-for="category in categories"
           :key="category.id"
           class="col-4"
           :class="{
             'green ': coreStore.state === 'incomes',
              'red': coreStore.state === 'expenses',
}"
           @click="addTransactionToCategory(category)"
      >
        <p class="black">{{ category.title }}</p>
        <font-awesome-icon class="categories" :icon="category.icon"/>
        <p>500</p>
      </div>
    </div>
  </div>
<transaction-form/>
</template>

<script>

import MonthToggler from "@/components/widgets/MonthToggler.vue";
import Toolbar from "@/components/widgets/Toolbar.vue";
import SumnaryBalance from "@/components/widgets/SumnaryBalance.vue";
import TransactionForm from "@/components/transactions/TransactionForm.vue";
import {mapStores} from "pinia";
import {useCategoriesStore} from "@/stores/categories.js";
import {useCoreStore} from "@/stores/core.js";
import {useTransactionsStore} from "@/stores/transactions.js";

export default {
  components: {MonthToggler, Toolbar, SumnaryBalance,TransactionForm},
  data() {
    return {}
  },
  computed: {
    ...mapStores(useCategoriesStore, useCoreStore, useTransactionsStore),
    categories() {
      if (this.coreStore.state === 'expenses') {
        return this.categoriesStore.expensesCategories
      } else if (this.coreStore.state === 'incomes') {
        return this.categoriesStore.incomesCategories
      }
      return this.categoriesStore.categories;

    }
  },
  methods:{
    addTransactionToCategory(category){
      this.transactionsStore.formTransaction.category_id = category.id;
      this.transactionsStore.formTransaction.type = category.type;

      this.transactionsStore.showForm = true;
    }
  },
  created() {
    this.categoriesStore.fetchCategories()
  },
}
</script>



<template>
  <div class="home-page">
    <toolbar/>
    <month-toggler/>
    <sumnary-balance/>

    <div v-for="group in groupedTransactions" :key="group.date" class="cont">
      <div class="day">
        <p>{{ group.date }}</p>
        <p>-1250</p>
      </div>

      <div>
        <div
            v-for="transaction in group.transactions"
            :key="transaction.id"
            class="shopping"
            @click="editTransaction(transaction)"
        >
          <div class="icon-and-text">
            <font-awesome-icon class="me-2  case"
                               :icon="categoriesStore.getCategory(transaction.category_id)?.icon "/>
            <div>
              <div class="subtext"> {{ transaction.description }}</div>
              <div class="title">{{ categoriesStore.getCategory(transaction.category_id)?.title }}</div>
            </div>
          </div>
          <p>{{ transaction.amount }}</p>
        </div>
      </div>
    </div>
  </div>

  <transaction-form/>
</template>


<script>

import MonthToggler from "@/components/widgets/MonthToggler.vue";
import Toolbar from "@/components/widgets/Toolbar.vue";
import SumnaryBalance from "@/components/widgets/SumnaryBalance.vue";
import {mapStores} from "pinia";
import {useTransactionsStore} from "@/stores/transactions.js";
import {useCategoriesStore} from "@/stores/categories.js";
import TransactionForm from "@/components/transactions/TransactionForm.vue";

export default {
  components: {
    TransactionForm,
    MonthToggler,
    Toolbar,
    SumnaryBalance,

  },

  data() {


    return {};

  },
  methods: {
    editTransaction(transaction) {
      this.transactionsStore.formTransaction = {...transaction};
      this.transactionsStore.showForm = true;
    },
    getDateWithoutTime(dateString) {
      return new Date(Date.parse(dateString)).toISOString().split('T')[0];
    },


  },
  computed: {
    ...mapStores(useTransactionsStore, useCategoriesStore),
    groupedTransactions() {


      const groupedTransactions = [];

      this.transactionsStore.transactions.forEach((transaction) => {
        const date = this.getDateWithoutTime(transaction.spent_at);

        let groupIndex = groupedTransactions.findIndex((item) => item.date === date);
        if (groupIndex === -1) {
          groupedTransactions.push({
            date: date,
            transactions: [],
          });
          groupIndex = groupedTransactions.length - 1;
        }

        groupedTransactions[groupIndex].transactions.push(transaction);
      });

      return groupedTransactions;
    },
    currentDate() {
      const today = new Date();
      const options = {year: 'numeric', month: 'numeric', day: 'numeric'};
      return today.toLocaleDateString(undefined, options);
    }

  }


};
</script>
<style>
@import '@/assets/_history.scss';
</style>
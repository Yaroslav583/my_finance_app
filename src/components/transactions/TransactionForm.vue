<template>
  <div class="transaction-form-box" v-if="transactionsStore.showForm" @click.self="transactionsStore.showForm = false">
    <div class="transaction-form ">
      <div class="mb-3 justify-content-between d-flex align-items-center">
        <div class="category-box ">
          <div class="icon-box d-inline-block mr-2">
            <font-awesome-icon class="avatar-user"
                               :icon="categoriesStore.getCategory(transactionsStore.formTransaction.category_id)?.icon"/>
          </div>
          {{ categoriesStore.getCategory(transactionsStore.formTransaction.category_id)?.title }}
        </div>
        <a href="#">

          <font-awesome-icon class="me-4" v-if="transactionsStore.formTransaction.id" icon="trash" @click="deleteTransaction" />
        </a>
      </div>
      <input
          id="transaction-form-amount"
          type="text"
          class="form-control mb-2"
          placeholder="Amount"
          v-model="transactionsStore.formTransaction.amount"

      />


      <input
          id="transaction-form-description"
          type="text"
          class="form-control mb-2"
          placeholder="Description"
          v-model="transactionsStore.formTransaction.description"
      />
      <button type="button" class="btn btn-primary" @click="transactionsStore.save()">
        {{ transactionsStore.formTransaction.id ? 'Edit' : 'Add' }}
      </button>

    </div>
  </div>


</template>


<script>


import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {mapStores} from "pinia";
import {useTransactionsStore} from "@/stores/transactions.js";
import {useCategoriesStore} from "@/stores/categories.js";

export default {
  components: {FontAwesomeIcon},
  data() {
    const stores = {
      transactions: useTransactionsStore(),
      categories: useCategoriesStore(),
      deleteTransaction() {
        if (stores.transactions.formTransaction.id) {
          stores.transactions.deleteTransaction(stores.transactions.formTransaction.id);
        }
      }
    };

    return stores;
  },

  methods: {},
  computed: {
    ...mapStores(useTransactionsStore, useCategoriesStore)

  },
}
</script>
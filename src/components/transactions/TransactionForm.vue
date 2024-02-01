<template>
  <div class="transaction-form-box" v-if="transactionsStore.showForm" @click.self="transactionsStore.showForm = false">
    <div class="transaction-form ">
      <div class="mb-3 justify-content-between d-flex align-items-center">
        <div class="category-box ">
          <div class="avatar-user"></div>
          <div class="icon-box d-inline-block mr-3">

          </div>

         </div>
        <a href="#"> <font-awesome-icon icon="trash"/></a>
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
      <button type="button" class="btn btn-primary">Add</button>
     </div>
   </div>


 </template>


 <script>


 import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
 import {mapStores} from "pinia";
 import {useTransactionsStore} from "@/stores/transactions.js";

 export default {
   components: {FontAwesomeIcon},
   data() {
     return {}
   },

   computed: {
     ...mapStores(useTransactionsStore)
   },
 }
 </script>
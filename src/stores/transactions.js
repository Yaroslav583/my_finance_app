import {defineStore} from "pinia";
import axios from "axios";


export const useTransactionsStore = defineStore('transactions', {
    state: () => {
        return {
            transactions: [],
            showForm: false,
            formTransaction: {},


        }
    },
    getters: {},
    actions: {
        async fetchTransactions() {
            axios.get('/transactions').then((response) => {
                this.transactions = response.data;
            }).catch((error) => {
                console.log(error);
            })
        },
        save() {
            if (this.formTransaction.id) {
                axios.put(`/transactions/${this.formTransaction.id}`, this.formTransaction).then((response) => {
                    const index = this.transactions.findIndex((item) => item.id === this.formTransaction.id);

                    if (index !== -1) {
                        this.transactions[index] = response.data;

                    }
                    this.transactions.push(response.data);
                    this.showForm = false;

                });
            } else {

                axios.post('/transactions', this.formTransaction).then((response) => {
                    this.transactions.push(response.data);
                    this.showForm = false;

                });
            }
        },
         deleteTransaction(transactionId) {
            try {
                 axios.delete(`/transactions/${transactionId}`);
                this.transactions = this.transactions.filter(transaction => transaction.id !== transactionId);
                this.showForm = false;
            } catch (error) {
                console.error('Error deleting transaction:', error);
            }
        }
    }
});
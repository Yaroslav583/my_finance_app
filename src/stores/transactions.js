import {defineStore} from "pinia";
import axios from "axios";


export const useTransactionsStore = defineStore('transactions', {
    state: () => {
        return {
            showForm:false,
            formTransaction:{

            }

        }
    },
    getters: {

    },
    actions: {

    }
})
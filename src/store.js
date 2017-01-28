import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        formDetails: {
            reference: "",
            columns: 1,
            header: ""
        },
        listOne: [],
        listTwo: [],
        listThree: []
    },
    mutations: {
        UPDATE_FORM_DETAILS(state, data){
            for(let prop in data){
                if(state.formDetails.hasOwnProperty(prop)){
                    Vue.set(state.formDetails, prop, data[prop])
                }
            }
        }
    },
    actions: {
        updateFormDetails({commit}, data){
            commit("UPDATE_FORM_DETAILS", data)
        }
    },
    getters: {
        form: state => {
            return state.formDetails
        },
        listOne: state => {
            return state.listOne
        },
        listTwo: state => {
            return state.listTwo
        },
        listThree: state => {
            return state.listThree
        }
    }
})

export default store
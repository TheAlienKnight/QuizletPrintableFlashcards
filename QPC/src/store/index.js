import { createStore } from 'vuex'

export default createStore({
  state: {
    settings: {
      theme: localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
      accessibility: localStorage.getItem("accessibility") ? JSON.parse(localStorage.getItem("accessibility")) : {
        txtgradient: "",
        txtstyle: ""
      },
      styling: localStorage.getItem("styling") ? JSON.parse(localStorage.getItem("styling")) : {
        font: {
          term: "",
          definition: ""
        },
        colors: {
          term: "",
          definition: ""
        }
      }
    },
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

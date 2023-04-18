import { createStore } from 'vuex'
import { CardSet } from '../classes/CardSet'

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
    cards: {
      cardSets: localStorage.getItem("cardSets") ? JSON.parse(localStorage.getItem("cardSets")) : [],
      mapped: false
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    mapCards() {
      if (this.state.cards.mapped) return;
      let newSets = []
      this.state.cards.cardSets.forEach((card) => {
        let classified = new CardSet()
        classified.fromJSON(card)
        newSets.push(classified)
      })
      this.state.cards.cardSets = newSets
      console.log(this.state.cards)
      this.state.cards.mapped = true
      console.log("[Actions] Replaced JSON set data with CardSet class data.")
    }
  },
  modules: {
  }
})

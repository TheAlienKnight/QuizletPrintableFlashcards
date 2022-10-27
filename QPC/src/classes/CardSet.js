import store from "../store"
class CardSet {
    id
    title
    description
    cards
    // Not sure if I will do anything with these values, may discard them later
    dateCreated
    dateEdited
    dateLastViewed
    // 
    imported
    constructor(imported) {
        this.id = self.crypto.randomUUID()
        this.title = "Untitled Set"
        this.description = 'No Description Set'
        this.cards = []
        this.dateCreated = new Date().toLocaleDateString()
        this.dateLastViewed = this.dateCreated
        this.dateLastEdited = this.dateCreated
        this.imported = imported
    }
    fromJSON(json) {
        this.title = json.title
        this.description = json.description
        this.id = json.id
        this.cards = json.cards
        this.dateCreated = json.dateCreated
        this.imported = json.imported
    }
    toJSON() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            cards: this.cards,
            dateCreated: this.dateCreated,
            dateLastViewed: this.dateLastViewed,
            dateLastEdited: this.dateLastEdited,
            imported: this.imported
        }
    }
    createCards(termDefArray) {
        termDefArray.forEach((card) => {
            this.createCard(card.term, card.definition)
        })
    }
    createCard(term, definition) {
        const card = {
            id: self.crypto.randomUUID(),
            term: term,
            definition: definition
        }
        this.cards.push(card)
        return card;
    }
    createSet(title, description) {
        this.title = title
        this.description = description
        store.state.cards.cardSets.push(this)
        localStorage.setItem("cardSets", JSON.stringify(store.state.cards.cardSets.map((card) => card.toJSON())))
        console.log("[Actions] New set created, updated Local Storage, and Vuex Store")
    }
    deleteCard(id) {
        this.cards = this.cards.filter((card) => card.id != id)
    }
}
export { CardSet }
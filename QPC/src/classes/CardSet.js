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
    deleteCard(id) {
        this.cards = this.cards.filter((card) => card.id != id)
        this.saveChanges()
    }
    createSet(title, description) {
        this.title = title
        this.description = description
        store.state.cards.cardSets.push(this)
        this.saveChanges()
        console.log("[Actions] New set created, updated Local Storage, and Vuex Store")
    }
    saveChanges() {
        this.dateLastEdited = new Date().toLocaleDateString()
        localStorage.setItem("cardSets", JSON.stringify(store.state.cards.cardSets.map((card) => card.toJSON())))
    }
    deleteSelf() {
        store.state.cards.cardSets.splice(store.state.cards.cardSets.indexOf(this), 1)
        this.saveChanges()
    }
}
export { CardSet }
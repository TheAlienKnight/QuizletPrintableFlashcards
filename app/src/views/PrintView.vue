<template>
    <div id="print" :class="[
        $store.state.settings.theme,
        $store.state.settings.accessibility.txtgradient,
        $store.state.settings.accessibility.txtstyle,
    ]">
        <div :class="[
                $store.state.settings.theme,
                $store.state.settings.accessibility.txtgradient,
                $store.state.settings.accessibility.txtstyle, 'hero is-fullheight']">
            <NavBar></NavBar>
            <div class="container mobile centered" v-if="!this.id">
                <p class="medium-text">
                    Hey! You should really only be accessing this page from the dashboard, or from a bookmark link with
                    the
                    set
                    id in the url. As of right now, this function is unavailable because the id doesn't exist, or is
                    invalid.
                </p>
                <br /><br />
                <router-link :to="'/dashboard'"><button class="button">Go To Dashboard</button></router-link>
            </div>
            <div class="container mobile" v-if="this.id">
                <h1 class="large-text" style="text-align: center">View/Edit/Print - {{ this.$data.set.title }}</h1>
                <h4 class="small-text" style="text-align: center">You can directly edit the existing cards, add new
                    cards,
                    or generate a PDF to print on flashcards.
                </h4>
                <hr>
                <div class="centered">
                    <button class="button" @click="this.makePDF()">Print Flashcards (4x6, or 3x5)</button>&nbsp;
                    &nbsp;
                    <button class="button"
                        @click="this.$data.editmode = !this.$data.editmode; this.$data.printMode = 'list'">Toggle Edit
                        Mode {{ this.$data.editmode ? 'Off' : 'On' }}</button>

                </div>
                <hr>
                <CardCard v-for="card in $data.set.cards" :key="card.id" :term="card.term" :definition="card.definition"
                    :id="card.id" :deleteSelf="deleteCard" :editmode="$data.editmode" :saveEdits="$data.set.saveChanges"
                    :card="card">
                </CardCard>
                <br>
                <div class="centered" v-if="this.$data.editmode">
                    <button class="button" @click="addCard()">Add Card</button>&nbsp;&nbsp;
                    <button class="button" @click="this.$data.editmode = !this.$data.editmode;">Turn Off Edit Mode</button>
                </div>

            </div>
            <div class="is-fullheight-10vh"></div>
            <FooterObject></FooterObject>
        </div>
    </div>
</template>
<script>
import { FlashcardPDF } from "../classes/FlashcardPDF.js";
import NavBar from "@/components/NavbarMenu.vue";
import FooterObject from "@/components/FooterObject.vue";
import CardCard from "@/components/CardCard.vue";
export default {
    name: "PrintView",
    props: ["id"],
    components: {
        NavBar,
        FooterObject,
        CardCard
    },
    beforeMount() {
        this.$store.dispatch('mapCards')
        this.getSet()
    },
    data() {
        return {
            set: {},
            printView: false,
            editmode: false,
            printMode: 'list'
        };
    },
    methods: {
        getSet() {
            if (!this.id) return;
            this.$data.set = this.$store.state.cards.cardSets.filter((set) => set.id == this.id)[0]
            if (this.$data.set == {}) this.id = null;
        },
        addCard() {
            this.$data.set.createCard("New Term", "New Definition")
            // we probably should save it after this too, to avoid any weird memory things
            this.$data.set.saveChanges()
        },
        deleteCard(id) {
            // it may seem like you'd be able to just pass in $data.set.deleteCard as a prop, but you lose the proper state and it will fail
            this.$data.set.deleteCard(id)
        },
        makePDF() {
            new FlashcardPDF(this.set).getFile()
        },
    },
};
</script>
  
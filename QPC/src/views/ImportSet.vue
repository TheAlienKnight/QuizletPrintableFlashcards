<template>
    <NavBar></NavBar>
    <div id="importset" :class="[
        $store.state.settings.theme,
        $store.state.settings.accessibility.txtgradient,
        $store.state.settings.accessibility.txtstyle,
    ]">
        <br />
        <div class="container mobile">
            <h1 class="large-text has-text-centered">Import Quizlet Set</h1>
            <h4 class="small-text has-text-centered">Takes text data and creates the same cards here!</h4>
            <br>
            <div class="columns w50">
                <div class="column">
                    <div class="field">
                        <label class="label has-text-centered">Term/Definition Separator</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="" v-model="$data.separators.term">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label has-text-centered">Set Title</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="" v-model="$data.set.title">
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="field">
                        <label class="label has-text-centered">Row Separator</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="" v-model="$data.separators.row">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label has-text-centered">Set Description</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="" v-model="$data.set.description">
                        </div>
                    </div>
                </div>
            </div>
            <div class="w60">
                <div class="field">
                    <label class="label has-text-centered">Exported Flashcard Text</label>
                    <textarea class="textarea" placeholder="" rows="10" v-model="$data.text"></textarea>
                </div>
            </div>
            <br>
            <hr class="w40">
            <br>
            <div class="w60 centered has-text-centered">
                <p class="small-text">Found <b>{{ $data.parsed.length }}</b> Cards</p>
                <p class="small-text">You can choose to preview the cards, or click done to finish.</p>
                <br>
                <button class="button centered on-hover-grow"
                    @click="this.previewSet()">Preview</button>&nbsp;&nbsp;&nbsp;
                <button class="button centered on-hover-grow" @click="this.createSet()">Done</button>
            </div>
            <br>
            <hr class="w40">
            <br>
            <div v-if="$data.previewing">
                <CardCard v-for="card in $data.cardSet.cards" :key="card.id" :term="card.term"
                    :definition="card.definition"></CardCard>
            </div>
        </div>
        <div class="is-fullheight-60vh"></div>
        <FooterObject></FooterObject>
    </div>
</template>
<style scoped>

</style>
<script>
import CardCard from "@/components/CardCard.vue"
import { CardSet } from '@/classes/CardSet.js'
import NavBar from "@/components/NavbarMenu.vue";
import FooterObject from "@/components/FooterObject.vue";
export default {
    name: "ImportSet",
    components: {
        NavBar,
        FooterObject,
        CardCard
    },
    data() {
        return {
            separators: {
                term: '+++',
                row: '&&&'
            },
            set: {
                title: 'Untitled Set',
                description: 'My Imported Set',
            },
            text: '',
            parsed: [],
            cardSet: new CardSet(true),
            previewing: false
        };
    },
    beforeCreate() {
        this.$store.dispatch('mapCards')
    },
    methods: {
        previewSet() {
            this.parseData()
            this.$data.cardSet.createCards(this.$data.parsed)
            this.$data.previewing = true
        },
        createSet() {
            this.parseData()
            setTimeout(() => {
                // if the preview was never run, make sure we actually make the cards lol
                if(!this.$data.previewing) this.$data.cardSet.createCards(this.$data.parsed)
                this.$data.cardSet.createSet(this.$data.set.title, this.$data.set.description)
                this.text = ''
                this.set = {
                    title: 'Untitled Set',
                    description: 'My Imported Set',
                }
                this.cardSet = new CardSet(true);
                this.previewing = false;
                this.parsed = []
            }, 100, this)

        },
        parseData() {
            let cards = this.$data.text.split(this.$data.separators.row)
            // quizlet for some ungodly reason adds an extra row separator at the end??? sigh.
            cards.pop()
            cards.forEach((data, i) => {
                let split = data.split(this.$data.separators.term)
                cards[i] = { term: split[0], definition: split[1] }
            })
            this.$data.parsed = cards;
        }
    }
};
</script>
  
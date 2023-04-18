<template>
    <div id="newset" :class="[
        $store.state.settings.theme,
        $store.state.settings.accessibility.txtgradient,
        $store.state.settings.accessibility.txtstyle,
    ]">
        <div class="hero is-fullheight">
            <NavBar></NavBar>
            <div class="container mobile">
                <h1 class="large-text has-text-centered">New Study Set</h1>
                <h4 class="small-text has-text-centered">Creates a new set saved on your device, it has the same
                    functionality
                    as importing from other sites!</h4>
                <hr>
                <br>
                <div class="columns w50">
                    <div class="column">
                        <div class="field">
                            <label class="label has-text-centered">Set Title</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="" v-model="$data.set.title">
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="field">
                            <label class="label has-text-centered">Set Description</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="" v-model="$data.set.description">
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <hr>
                <div class="centered">
                    <router-link :to="'/print/' + this.cardSet.id"><button class="button centered on-hover-grow"
                            @click="this.createSet()">Create &
                            Edit</button></router-link>
                </div>
            </div>
            <FooterObject></FooterObject>
        </div>
    </div>
</template>
<style scoped></style>
<script>
import NavBar from "@/components/NavbarMenu.vue";
import FooterObject from "@/components/FooterObject.vue";
import { CardSet } from '@/classes/CardSet.js'
export default {
    name: "NewSet",
    components: {
        NavBar,
        FooterObject,
    },
    beforeCreate() {
        this.$store.dispatch('mapCards')
    },
    data() {
        return {
            set: {
                title: 'New Untitled Set',
                description: 'My New Set',
            },
            cardSet: new CardSet(true),
        };
    },
    methods: {
        createSet() {
            // add default card
            this.$data.cardSet.createCard("Smarty Pants", "You! You've got this, you'll rock whatever you're studying for!")
            this.$data.cardSet.saveChanges()
            this.$data.cardSet.createSet(this.$data.set.title, this.$data.set.description)
        }
    }
};
</script>
  
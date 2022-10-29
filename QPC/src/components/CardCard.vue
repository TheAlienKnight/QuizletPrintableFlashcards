<template>
    <div :class="[
        'cardcard',
        $store.state.settings.theme,
        $store.state.settings.accessibility.txtgradient,
        $store.state.settings.accessibility.txtstyle,
    ]">
        <div class="box set-content">
            <div v-if="editmode">
                <span @click="deleteCard()">
                    {{ this.$data.deleteClicked == 0 ? '❌ Delete' : '❌ Confirm Deletion' }}
                </span>&nbsp;&nbsp; <b>|</b> &nbsp;&nbsp;
                <span @click="saveChanges()">{{ !this.$data.saved ? '✅ Save Changes' : '😊 Saved!' }}</span>
            </div>
            <div class="columns" v-if="!editmode">
                <div class="column is-term" style="margin: auto;">
                    <h1 class="medium-text" style="text-align: center;">{{ term }}</h1>
                </div>
                <div class="is-separator"></div>
                <div class="column is-definition">
                    <p class="tiny-text">{{ definition }}</p>
                </div>
            </div>
            <!--Edit mode specific changes-->
            <div class="columns" v-if="editmode">
                <div class="column is-term" style="margin: auto;">
                    <input class="input" type="text" style="text-align: center;" v-model="this.card.term">
                </div>
                <div class="is-separator"></div>
                <div class="column is-definition">
                    <textarea class="tiny-text textarea has-fixed-size" v-model="this.card.definition"></textarea>
                </div>
            </div>
        </div>
        <br>
    </div>
</template>
<style scoped>

</style>
<script>
// @ is an alias to /src
export default {
    name: "CardCard",
    components: {},
    props: ["term", "definition", "style", "editmode", "id", "deleteSelf", "saveEdits", "card"],
    data() {
        return {
            side: 'term',
            deleteClicked: 0,
            saved: false
        };
    },
    methods: {
        deleteCard() {
            this.$data.deleteClicked++;
            if (this.$data.deleteClicked >= 2) this.deleteSelf(this.id);
        },
        saveChanges() {
            this.$data.saved = true;
            setTimeout(() => {
                this.$data.saved = false;
            }, 3000)
            this.saveEdits()
        }
    },
};
</script>
  
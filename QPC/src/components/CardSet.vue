<template>
    <div :class="[
        'cardset',
        $store.state.settings.theme,
        $store.state.settings.accessibility.txtgradient,
        $store.state.settings.accessibility.txtstyle,
    ]">
        <div class="box">
            <h1 class="medium-text has-text-centered" style="text-align: center;">{{ set.title }}</h1>
            <h3 class="small-text has-text-centered" style="text-align: center;">{{ set.cards.length }} Cards</h3>
            <p class="tiny-text has-text-centered">{{ set.description }}</p>
            <hr>
            <div class="notification is-danger has-text-centered" v-if="$data.tappedDelete == 1">
                Are you sure you want to delete this set? There's no going back, you'll have to re-import it from
                quizlet again if you want to print it in the future. <br><br>
                <div class="centered"><button class="button" @click="$data.tappedDelete--;">Undo!</button></div>
                <br><b>If you are sure, click delete again to
                    continue!</b>
            </div>
            <div class="centered">
                <button class="button" @click="deleteSet()">Delete</button>
                <router-link :to="'/print/'+set.id"><button class="button">Print/Edit/View</button></router-link>
            </div>
        </div>
    </div>
</template>
  
<script>
// @ is an alias to /src
export default {
    name: "CardSet",
    components: {},
    props: ["set"],
    data() {
        return {
            tappedDelete: 0
        };
    },
    methods: {
        deleteSet() {
            this.tappedDelete++;
            if (this.$data.tappedDelete >= 2) this.set.deleteSelf();
        }
    },
};
</script>
  
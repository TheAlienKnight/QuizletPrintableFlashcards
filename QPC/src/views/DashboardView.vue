<template>
    <NavBar></NavBar>
    <div id="dashboard" :class="[
        $store.state.settings.theme,
        $store.state.settings.accessibility.txtgradient,
        $store.state.settings.accessibility.txtstyle,
    ]">
        <br />
        <div class="container mobile">
            <h1 class="large-text" style="text-align: center">Flashcard Dashboard</h1>
            <h4 class="small-text" style="text-align: center"><b>{{ $store.state.storage.cardSets.length }}</b> Sets
            </h4>
            <hr>
            <h2 class="medium-text" style="text-align: center" v-if="$store.state.storage.cardSets.length <= 0">😭 You don't have any saved sets!</h2>
            <div class="columns">
                <div class="column">
                    <CardSet
                        v-for="set in $store.state.storage.cardSets.slice(0, Math.ceil($store.state.storage.cardSets.length / 2))"
                        :key="set.id" :set="set"></CardSet>
                </div>
                <div class="column">
                    <CardSet
                        v-for="set in $store.state.storage.cardSets.slice(Math.ceil($store.state.storage.cardSets.length / 2))"
                        :key="set.id" :set="set"></CardSet>
                </div>
            </div>
        </div>
        <div class="is-fullheight-40vh"></div>
        <FooterObject></FooterObject>
    </div>
</template>
<style scoped>

</style>
<script>
import NavBar from "@/components/NavbarMenu.vue";
import FooterObject from "@/components/FooterObject.vue";
import CardSet from "@/components/CardSet.vue";
export default {
    name: "DashboardView",
    components: {
        NavBar,
        FooterObject,
        CardSet
    },
    data() {
        return {};
    },
    methods: {
    }
};
</script>
  
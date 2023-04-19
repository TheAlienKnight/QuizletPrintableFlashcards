<template>
    <div id="home" :class="[
        $store.state.settings.theme,
        $store.state.settings.accessibility.txtgradient,
        $store.state.settings.accessibility.txtstyle,
    ]">
        <div :class="[
                $store.state.settings.theme,
                $store.state.settings.accessibility.txtgradient,
                $store.state.settings.accessibility.txtstyle, 'hero is-fullheight']">
            <NavBar></NavBar>
            <img :class="[
                'image',
                'is-home-logo',
                'on-hover-grow',
            ]" src="../assets/img/logo-wide.svg" />
            <h1 class="large-text" style="text-align: center">Flashcard Toolkit</h1>
            <br />
            <div class="container mobile home">
                <p style="text-align: center" class="medium-text">
                    A free, offline Flashcard Printer + Study Tool<br /><br />
                </p>
                <router-link :to="'/import'"><button class="button is-success">Print Your Flashcard
                        Sets</button></router-link>
            </div>
            <div class="is-fullheight-10vh"></div>
            <FooterObject></FooterObject>
        </div>
    </div>
</template>
<style scoped></style>
<script>
import NavBar from "@/components/NavbarMenu.vue";
import FooterObject from "@/components/FooterObject.vue";
export default {
    name: "HomeView",
    components: {
        NavBar,
        FooterObject,
    },
    data() {
        return {

        };
    }
};
</script>
  
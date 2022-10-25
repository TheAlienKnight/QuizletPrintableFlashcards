<template>
    <NavBar></NavBar>
    <div id="home" :class="[
        $store.state.settings.theme,
        $store.state.settings.accessibility.txtgradient,
        $store.state.settings.accessibility.txtstyle,
    ]">
        <br />
        <img :class="[
            'image',
            'is-home-logo',
            'on-hover-grow',
        ]" src="../assets/img/logo-wide.svg" />
        <h1 class="large-text" style="text-align: center">Quizlet Flashcard Printer</h1>
        <br />
        <div class="container mobile home">
            <p style="text-align: center" class="medium-text">
                Quizlet, Inc. removed the ability to print on flashcards. I wanted it back.<br /><br />
            </p>
            <button class="button is-success">Print Your Quizlet Sets</button>
        </div>
        <div class="is-fullheight-20vh"></div>
        <FooterObject></FooterObject>
    </div>
</template>
<style scoped>

</style>
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
        return {};
    },
};
</script>
  
<template>
    <NavBar></NavBar>
    <div id="about" :class="[
        $store.state.settings.theme,
        $store.state.settings.accessibility.txtgradient,
        $store.state.settings.accessibility.txtstyle,
    ]">
        <br />
        <div class="container mobile">
            <p style="text-align: center" class="medium-text">
                WIP - Will write about why i did this and spent time on it that could have been better used for studying for my Security+ Exam<br /><br />
            </p>
        </div>
        <div class="is-fullheight-60vh"></div>
        <FooterObject></FooterObject>
    </div>
</template>
<style scoped>

</style>
<script>
import NavBar from "@/components/NavBar.vue";
import FooterObject from "@/components/FooterObject.vue";
export default {
    name: "AboutView",
    components: {
        NavBar,
        FooterObject,
    },
    data() {
        return {};
    },
};
</script>
  
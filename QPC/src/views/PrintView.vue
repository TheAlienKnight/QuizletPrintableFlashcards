<template>
    <NavBar></NavBar>
    <div id="print" :class="[
        $store.state.settings.theme,
        $store.state.settings.accessibility.txtgradient,
        $store.state.settings.accessibility.txtstyle,
    ]">
        <br />
        <div class="container mobile">
            <p style="text-align: center" class="medium-text">
                WIP - Will be the page you CTRL+P on (or click a button, i guess i can do that too)<br /><br />
            </p>
        </div>
        <div class="is-fullheight-60vh"></div>
        <FooterObject></FooterObject>
    </div>
</template>
<style scoped>

</style>
<script>
import NavBar from "@/components/NavbarMenu.vue";
import FooterObject from "@/components/FooterObject.vue";
export default {
    name: "PrintView",
    components: {
        NavBar,
        FooterObject,
    },
    data() {
        return {};
    },
};
</script>
  
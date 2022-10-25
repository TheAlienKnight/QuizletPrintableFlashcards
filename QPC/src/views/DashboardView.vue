<template>
    <NavBar></NavBar>
    <div id="dashboard" :class="[
        $store.state.settings.theme,
        $store.state.settings.accessibility.txtgradient,
        $store.state.settings.accessibility.txtstyle,
    ]">
        <br />
        <div class="container mobile">
            <p style="text-align: center" class="medium-text">
                WIP - This will hold the sets you've stored on your device local storage, let you reprint them, replace,
                edit, share locally (yes, really! I don't want or need to host a database for this site), and some other "things"<br /><br />
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
    name: "DashboardView",
    components: {
        NavBar,
        FooterObject,
    },
    data() {
        return {};
    },
};
</script>
  
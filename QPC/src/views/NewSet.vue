<template>
    <NavBar></NavBar>
    <div id="newset" :class="[
        $store.state.settings.theme,
        $store.state.settings.accessibility.txtgradient,
        $store.state.settings.accessibility.txtstyle,
    ]">
        <br />
        <div class="container mobile">
            <p style="text-align: center" class="medium-text">
               New set creator goes here- may as well add the functionality if its like. 1 more step than usual lol<br /><br />
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
    name: "NewSet",
    components: {
        NavBar,
        FooterObject,
    },
    data() {
        return {};
    },
};
</script>
  
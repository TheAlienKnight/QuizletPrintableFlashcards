<template>
    <div id="faq" :class="[
        $store.state.settings.theme,
        $store.state.settings.accessibility.txtgradient,
        $store.state.settings.accessibility.txtstyle,
    ]">
        <div :class="[
                $store.state.settings.theme,
                $store.state.settings.accessibility.txtgradient,
                $store.state.settings.accessibility.txtstyle, 'hero is-fullheight']">
            <NavBar></NavBar>
            <div class="container mobile">
                <h1 class="large-text has-text-centered">FAQ / About</h1>
                <h4 class="small-text has-text-centered">Questions you may have... with answers! Huzzah!</h4>
                <hr>
                <br>
                <div class="has-text-centered">
                    <p class="small-text"><b>Q:</b> Why make this?</p>
                    <p class="small-text"><b>A:</b> I needed the ability to print on 3x5, and 4x6 notecards. <br>I then learned, teachers used Quizlets printable flashcard function often, and when it was removed, no other real alternative came about. So I made one.</p>
                    <br>
                    <p class="small-text"><b>Q:</b> Are you affiliated with Quizlet™ or other study sites?</p>
                    <p class="small-text"><b>A:</b> Ha, no. I am not. I am just a 21 year old who wanted to print on flashcards again.</p>
                    <br>
                    <p class="small-text"><b>Q:</b> Can I contribute to the site?</p>
                    <p class="small-text"><b>A:</b> Sure thing! This entire site is Open Source, and on Github.</p>
                    <br>
                    <p class="small-text"><b>Q:</b> Do you store any data?</p>
                    <p class="small-text"><b>A:</b> Nope, I have no desire to maintain that right now. Everything is stored on your local device.</p>
                    <br>
                    <p class="small-text"><b>Q:</b> Can I save the site for offline use?</p>
                    <p class="small-text"><b>A:</b> Yup! You can click the "Install App" button on desktop, or "add to homepage" button on mobile.</p>
                    <br>
                    <p class="small-text"><b>Q:</b> Will this site get updates?</p>
                    <p class="small-text"><b>A:</b> Of course! When it does, any offline apps you've installed will prompt you to update :)</p>
                </div>
            </div>
            <div class="is-fullheight-10vh"></div>
        </div>
        <FooterObject></FooterObject>
    </div>
</template>
<style scoped></style>
<script>
import NavBar from "@/components/NavbarMenu.vue";
import FooterObject from "@/components/FooterObject.vue";
export default {
    name: "FAQView",
    components: {
        NavBar,
        FooterObject,
    },
    data() {
        return {};
    },
};
</script>
  
<template>
    <div :class="[
        'footer',
        'footerObject',
        $store.state.settings.theme,
        $store.state.settings.accessibility.txtgradient,
        $store.state.settings.accessibility.txtstyle,
    ]">
        <div class="columns">
            <div class="column">
                <div class="box listing">
                    <p class="small-text" style="text-align: center">
                        <b>© AJ Nicoloff</b> - <b>2023</b>
                    </p>
                    <p class="small-text" style="text-align: center">
                        <a href="https://github.com/TheAlienKnight/QuizletPrintableFlashcards">Github</a>&nbsp; |
                        &nbsp;<a href="Quizlet">Quizlet</a>&nbsp; |
                        &nbsp;<a href="https://rainwave.cc/">Rainwave Radio (Great for studying)</a>
                    </p>
                    <br />
                    <hr style="width: 35%; margin: auto" />
                    <br />

                    <p class="small-text" style="text-align: center">
                        Made with 💗 - Using Vue 3, and ADHD
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
// @ is an alias to /src
export default {
    name: "FooterObject",
    components: {},
    props: [],
    data() {
        return {};
    },
    methods: {},
};
</script>
  
<template>
    <div :class="[
        'cardcard',
        $store.state.settings.theme,
        $store.state.settings.accessibility.txtgradient,
        $store.state.settings.accessibility.txtstyle,
    ]">
        <div class="box set-content">
            <div class="columns">
                <div class="column is-term" style="margin: auto;">
                    <h1 class="medium-text" style="text-align: center;">{{ term }}</h1>
                </div>
                <div class="is-separator"></div>
                <div class="column is-definition">
                    <p class="tiny-text">{{ definition }}</p>
                </div>
            </div>
        </div>
        <br>
    </div>
</template>
<style scoped>

</style>
<script>
// @ is an alias to /src
export default {
    name: "CardCard",
    components: {},
    props: ["term", "definition", "style"],
    data() {
        return {
            side: 'term'
        };
    },
    methods: {},
};
</script>
  
<template>
    <div :class="[
        'cardset',
        $store.state.settings.theme,
        $store.state.settings.accessibility.txtgradient,
        $store.state.settings.accessibility.txtstyle,
    ]">
        <div class="box">
            <h1 class="medium-text" style="text-align: center;">{{ set.title }}</h1>
            <h3 class="small-text" style="text-align: center;">{{ set.cards.length }} Cards</h3>
            <p class="tiny-text">{{ set.description }}</p>
        </div>
    </div>
</template>
  
<script>
// @ is an alias to /src
export default {
    name: "CardSet",
    components: {},
    props: ["set"],
    data() {
        return {};
    },
    methods: {},
};
</script>
  
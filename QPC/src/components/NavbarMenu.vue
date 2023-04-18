<template>
    <nav :class="[
        'navbar',
        $store.state.settings.theme,
        $store.state.settings.accessibility.txtgradient,
        $store.state.settings.accessibility.txtstyle,
    ]" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a role="button" id="navBurger" class="navbar-burger" aria-label="menu" aria-expanded="true" data-target="nav"
                @click="toggleBurger()">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="nav" :class="[burger ? 'navbar-menu is-active' : 'navbar-menu']">
            <div class="navbar-start" style="text-align: center; margin: auto">
                <img src="../assets/img/logo-tall.svg" width="70" height="70"
                    style="margin-left: 5px; margin-top: 5px; margin-bottom: 5px; margin-top: 5px;" />
                <router-link class="navbar-item attention" :to="'/'">
                    Home
                </router-link>
                <router-link class="navbar-item attention" :to="'/faq'">
                    FAQ
                </router-link>
                <router-link class="navbar-item attention" :to="'/create'">
                    Create
                </router-link>
                <router-link class="navbar-item attention" :to="'/dashboard'">
                    Dashboard
                </router-link>
                <router-link class="navbar-item attention" :to="'/import'">
                    Import
                </router-link>
            </div>
        </div>
    </nav>
    <div :class="[
        'navbar-end',
        $store.state.settings.theme,
        $store.state.settings.accessibility.txtgradient,
        $store.state.settings.accessibility.txtstyle,
    ]">
        <img @click="this.toggleAccessibility()" style="margin-right: 5px; cursor: pointer" alt="accessibility menu"
            width="40" height="40" src="../assets/icons/accessibility.png" />
        <AccessibilityMenu v-if="this.$data.accessibilityMenu" :toggleAccessibility="this.toggleAccessibility">
        </AccessibilityMenu>
    </div>
</template>
  
<script>
// @ is an alias to /src
import AccessibilityMenu from "@/components/AccessibilityMenu.vue";
export default {
    name: "NavbarMenu",
    components: {
        AccessibilityMenu,
    },
    props: [],
    data() {
        return {
            burger: false,
            title: "",
            accessibilityMenu: false,
        };
    },
    created() {
        this.$data.title = document.title;
    },
    methods: {
        toggleBurger() {
            this.$data.burger = !this.$data.burger;
        },
        toggleAccessibility() {
            this.$data.accessibilityMenu = !this.$data.accessibilityMenu;
        },
    },
};
</script>
  
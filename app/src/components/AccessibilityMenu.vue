<template>
  <div
    :class="[
      'modal',
      'is-active',
      $store.state.settings.accessibility.txtgradient,
      $store.state.settings.accessibility.txtstyle
    ]"
  >
    <div class="modal-background" @click="toggleAccessibility()"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Accessibility Menu</p>
      </header>
      <section class="modal-card-body">
        <div class="columns">
          <div class="column">
            <p class="small-text">ADHD/Dyslexia Text Gradients</p>
            <div class="select is-primary">
              <select v-model="$store.state.settings.accessibility.txtgradient">
                <option value="">None</option>
                <option value="txtgradient-crlp">Clown Red / Lavender Purple</option>
                <option value="txtgradient-blgl">{{ $store.state.settings.theme == "light" ? 'Dark Blue/Gold' : 'Sky Blue/Lemon Yellow' }}</option>
              </select>
            </div>
          </div>
          <div class="column">
            <p class="small-text">Text Style</p>
            <div class="select is-primary">
              <select v-model="$store.state.settings.accessibility.txtstyle">
                <option value="">None</option>
                <option value="txtstyle-bold">Bold</option>
                <option value="txtstyle-bolder">Bolder</option>
              </select>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <p class="small-text">Website Brightness</p>
            <div class="select is-primary">
              <select v-model="$store.state.settings.theme">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success"  @click="clearSettings()">Reset</button>
        <button class="button is-success " @click="writeToCookie()">
          Save as Default
        </button>
      </footer>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="toggleAccessibility()"
    ></button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "AccessibilityMenu",
  components: {},
  props: ["toggleAccessibility"],
  data() {
    return {};
  },
  methods: {
    writeToCookie() {
      localStorage.setItem(
        "accessibility",
        JSON.stringify(this.$store.state.settings.accessibility)
      );
      localStorage.setItem("theme", this.$store.state.settings.theme)
    },
    clearSettings() {
      localStorage.removeItem("accessibility");
      localStorage.removeItem("theme");
      this.$store.state.settings.accessibility = {
        txtgradient: "",
        txtstyle: ""
      };
      this.$store.state.settings.theme = "light"
    },
  },
};
</script>

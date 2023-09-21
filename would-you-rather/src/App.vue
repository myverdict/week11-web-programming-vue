<!-- this is the parent component of the WouldYouRather.vue -->
<template>
  <div id="app">
    <h1>Would you rather...</h1>

    <!-- would-you-rather element suggested by vs code -->
    <!-- v-bind:props from the WouldYouRather.vue component -->
    <!-- data sent from App.vue to the WouldYouRather.vue component -->
    <would-you-rather
      v-bind:question="wyrQuestion"
      v-bind:answer1="wyrAnswer1"
      v-bind:answer2="wyrAnswer2"
      v-on:answer-selected="answerSelected"
    />

    <!-- Another way would be, however kebab-case is preferred in the DOM -->
    <!-- <WouldYouRather /> -->

    <p>{{ userSelectionMsg }}</p>
  </div>
</template>

<script>
import WouldYouRather from "./components/WouldYouRather.vue";

export default {
  // register the child components
  components: {
    WouldYouRather,
  },
  // declare reactive state using data
  data() {
    return {
      wyrQuestion: "Would you rather be a detective or a pilot?",
      wyrAnswer1: "Detective",
      wyrAnswer2: "Pilot",
      userSelectionMsg: "",
    };
  },
  methods: {
    answerSelected(choice) {
      this.userSelectionMessage = `Thanks! you chose ${choice}`;
    },
  },
};
</script>

<style>
/* these styles are are also applied to WouldYouRather.vue */
body {
  background-color: lightslategray;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 10px;
  background-color: lavender;
}
</style>

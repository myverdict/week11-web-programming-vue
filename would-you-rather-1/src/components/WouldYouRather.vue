<!-- this is a child component of the App.vue -->

<template>
  <div class="wyr">
    <h2>Please make your choice!</h2>

    <!-- Would you rather question -->
    <h3>{{ question }}</h3>

    <div id="ans">
      <!-- radio buttons for the answers -->
      <input
        type="radio"
        id="answer-one"
        v-model="choice"
        v-bind:value="answer1"
        v-on:change="choiceMade"
      />
      <label for="answer-one">{{ answer1 }}</label>

      <input
        type="radio"
        id="answer-two"
        v-model="choice"
        v-bind:value="answer2"
        v-on:change="choiceMade"
      />
      <label for="answer-two">{{ answer2 }}</label>
    </div>
  </div>
</template>

<script>
export default {
  // The App.vue parent will provide these values here (never modify a prop in a component)
  props: {
    question: String,
    answer1: String,
    answer2: String,
  },
  // for the radio button choices: data is a function that returns an object
  data() {
    return {
      choice: "",
    };
  },
  methods: {
    // create a choiceMade method here
    choiceMade() {
      this.$emit("answer-changed", this.choice);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.wyr {
  border: 2px solid black;
  background-color: greenyellow;
  margin: 10px;
  color: black;
  padding: 20px;
}
#ans {
  padding: 20px;
}
label {
  padding-right: 10px;
}
</style>

<!-- this is a child component of the App.vue -->

<template>
  <div class="wyr">
    <h2>Would you rather...</h2>
    <h3>{{ question }}</h3>

    <!-- creating radio buttons for the answers -->
    <input
      type="radio"
      :name="question"
      :id="answer1"
      v-model="choice"
      v-bind:value="answer1"
      v-on:change="choiceMade"
    />
    <label :for="answer1">{{ answer1 }}</label>

    <input
      type="radio"
      :name="question"
      :id="answer2"
      v-model="choice"
      v-bind:value="answer2"
      v-on:change="choiceMade"
    />
    <label :for="answer2">{{ answer2 }}</label>
  </div>
</template>

<script>
export default {
  // The App.vue parent will provide these values here (never modify a prop in a component)
  props: {
    id: Number,
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
  emits: ["answer-changed"],
  methods: {
    choiceMade() {
      // send an event to the parent App.vue about the choice made and the question id
      this.$emit("answer-changed", this.choice, this.id);
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

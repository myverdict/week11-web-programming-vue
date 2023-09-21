<template>
  <div>
    <div class="card student-list m-2 p-2">
      <h4 class="card-title">Student List</h4>

      <div id="student-table">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>StarID</th>
              <th>Present?</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="student in students"
              v-bind:key="student.starID"
              v-bind:class="student.present ? 'present' : 'absent'"
            >
              <td>{{ student.name }}</td>
              <td>{{ student.starID }}</td>
              <td>
                <input
                  type="checkbox"
                  name="arrivedOrLeft"
                  v-on:change="arrivedOrLeft(student, $event.target.checked)"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    students: Array,
  },
  emits: ["student-arrived-or-left"],
  methods: {
    arrivedOrLeft(student, present) {
      // TODO emit message to parent App.vue
      this.$emit("student-arrived-or-left", student, present);
    },
  },
};
</script>

<style scoped>
.present {
  color: grey;
  font-style: italic;
}
.absent {
  color: black;
  font-weight: bold;
}
</style>

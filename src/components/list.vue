<template>
  <v-simple-table height="300px">
    <thead>
      <tr>
        <th class="text-left">id</th>
        <th class="text-left">Name Task</th>
        <th class="text-left">tag</th>
        <th class="text-left">description</th>
        <th class="text-left">status</th>
        <th class="text-left">tools</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(task, id) in tasks" :key="task.id">
        <td>{{ task.id }}</td>
        <td>{{ task.title }}</td>
        <td>
          <span v-for="(chip, x) in task.chips" :key="x">{{ chip }}</span>
        </td>
        <td>{{ task.description }}</td>
        <td>{{ task.status }}</td>
        <td>
          <v-btn @click="deleteTask(id)">delete</v-btn>
          <v-btn @click="changeTask">change</v-btn>
        </td>
      </tr>
    </tbody>
  </v-simple-table></template
>

<script>
export default {
  name: "list",
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    }
  },
  methods: {
    deleteTask: function(index) {
      this.tasks.splice(index, 1);
      this.$store.dispatch("REMOVE_TASK");
    },
    changeTask: function() {
      this.$router.push("/editTask");
    }
  }
};
</script>

<style scoped></style>

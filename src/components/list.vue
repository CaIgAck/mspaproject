<template>
  <v-simple-table height="300px">
    <thead>
      <tr>
        <th class="text-left">id</th>
        <th class="text-left">Name</th>
        <th class="text-left">tag</th>
        <th class="text-left">description</th>
        <th class="text-left">status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(task, id) in tasks" :key="id">
        <td>{{ task.id }}</td>
        <td>{{ task.title }}</td>
        <td>{{ task.chips }}</td>
        <td>{{ task.description }}</td>
        <td>{{ task.status }}</td>
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
  }
};
</script>

<style scoped></style>

<template>
  <v-row justify="center">
    <v-simple-table height="300px" v-if="tasks.length">
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
        <tr v-for="(task, index) in tasks" :key="task.index">
          <td>{{ index + 1 }}</td>
          <td>{{ task.title }}</td>
          <td>
            <span v-for="(chip, x) in task.chips" :key="x">{{ chip }}</span>
          </td>
          <td class="text">
            <div class="disc">{{ task.description }}</div>
          </td>
          <td>{{ task.status }}</td>
          <td>
            <v-btn @click="deleteTask(index)" class="mr-2">delete</v-btn>
            <router-link tag="button" :to="'/editTask/' + task.id"
              ><v-btn>Change</v-btn>
            </router-link>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
    <p v-else>нет задач</p>
  </v-row>
</template>

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
    }
  }
};
</script>

<style lang="scss">
.disc {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.text {
  max-width: 400px;
}
</style>

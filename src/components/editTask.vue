<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" md="4">
        <form>
          <h2>{{ tasks.title }}</h2>
          <v-combobox chips clearable label="tag" multiple v-model="chips">
          </v-combobox>
          <v-text-field
            label="Description"
            required
            counter="2048"
            v-model="description"
          >
          </v-text-field>
          <v-text-field label="status" required counter="2048" v-model="status">
          </v-text-field>
          <v-btn dark class="mt-10" type="submit" @click.prevent="saveTask">
            сохранить
          </v-btn>
        </form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "editTask",
  data: () => ({
    status: "",
    description: "",
    chips: ""
  }),
  mounted() {
    this.description = this.tasks.description;
    this.chips = this.tasks.chips;
    this.status = this.tasks.status;
  },

  computed: {
    tasks() {
      return this.$store.getters.taskId(+this.$route.params.id);
    }
  },
  methods: {
    saveTask: function() {
      this.$store.dispatch("SAVE_TASK", {
        id: this.tasks.id,
        status: this.status,
        description: this.description
      });
      this.$router.push("/viewTask");
    }
  }
};
</script>

<style scoped></style>

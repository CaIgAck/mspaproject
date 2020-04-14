<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" md="4">
        <form @submit.prevent="submitHandler">
          <h2>Задание на сегодня</h2>
          <v-text-field
            label="Task name"
            required
            counter="2048"
            v-model="title"
          ></v-text-field>
          <v-combobox
            chips
            clearable
            label="tag"
            multiple
            v-model="chips"
          ></v-combobox>
          <v-text-field
            label="Description"
            required
            counter="2048"
            v-model="description"
          >
          </v-text-field>
          <v-btn dark class="mt-10" type="submit"> оставить </v-btn>
        </form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "create",
  data: () => ({
    title: "",
    description: "",
    chips: ""
  }),
  methods: {
    submitHandler: function() {
      const task = {
        title: this.title,
        description: this.description,
        chips: this.chips,
        id: Date.now(),
        status: "active"
      };
      this.$store.dispatch("CREATE_TASK", task),
        this.$router.push("/viewTask"),
        (this.title = ""),
        (this.description = ""),
        (this.chips = ""),
        console.log(task);
    }
  }
};
</script>

<style scoped></style>

<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" md="4">
        <form>
          <h2>Изменить</h2>
          <v-text-field
            label="Task name"
            required
            counter="2048"
          ></v-text-field>
          <v-combobox chips clearable label="tag" multiple></v-combobox>
          <v-text-field label="Description" required counter="2048">
          </v-text-field>
          <v-text-field label="status" required counter="2048"></v-text-field>
          <v-btn dark class="mt-10" type="submit"> сохранить </v-btn>
        </form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "editTask",
  computed: {}
};
</script>

<style scoped></style>

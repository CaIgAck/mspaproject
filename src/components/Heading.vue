<template>
  <v-app>
    <v-toolbar dense dark max-height="70">
      <v-toolbar-title>Проект jenkins</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <router-link to="/" class="btn"><v-btn>Home</v-btn></router-link>
        <router-link to="/viewTask" class="btn"
          ><v-btn>View Task</v-btn></router-link
        >
      </v-toolbar-items>
    </v-toolbar>
    <router-view />
  </v-app>
</template>
<script>
export default {
  name: "head"
};
</script>

<style scoped></style>

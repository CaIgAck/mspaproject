import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem("tasks") || "[]")
  },
  mutations: {
    CHANGE_TASK: (state, task) => {
      state.tasks.push(task);

      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    CLEAR_TASKS: () => localStorage.removeItem("tasks")
  },
  actions: {
    CREATE_TASK: (context, task) => {
      context.commit("CHANGE_TASK", task);
    },
    REMOVE_TASK: (context, task) => {
      context.commit("CLEAR_TASKS", task);
    }
  },
  getters: {
    tasks: state => state.tasks
  }
});

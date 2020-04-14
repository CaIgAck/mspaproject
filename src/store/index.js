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
    }
  },
  actions: {
    CREATE_TASK: (context, task) => {
      context.commit("CHANGE_TASK", task);
    }
  },
  getters: {
    tasks: state => state.tasks
  }
});

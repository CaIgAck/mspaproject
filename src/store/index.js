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
    CLEAR_TASKS: () => localStorage.removeItem("tasks"),
    SAVE_TASK_LIST: function(state, { id, description, status }) {
      const tasks = state.tasks.concat();
      const taskId = tasks.findIndex(t => t.id === id);
      const task = tasks[taskId];
      tasks[taskId] = { ...task, description, status };
      state.tasks = tasks;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
      debugger;
    }
  },
  actions: {
    CREATE_TASK: (context, task) => {
      context.commit("CHANGE_TASK", task);
    },
    REMOVE_TASK: (context, task) => {
      context.commit("CLEAR_TASKS", task);
    },
    SAVE_TASK: (context, task) => {
      context.commit("SAVE_TASK_LIST", task);
    }
  },
  getters: {
    tasks: state => state.tasks,
    taskId: state => id => state.tasks.find(t => t.id === id)
  }
});

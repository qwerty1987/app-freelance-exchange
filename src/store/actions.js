export default {
  addTask: ({ commit }, payload) => {
    payload.id = Date.now();
    commit("addTask", payload);
  },
  updateTaskStatusById: ({ commit }, payload) => {
    commit("updateTaskStatusById", payload);
  }
};

import { findTaskById } from "@/utils";
export default {
  addTask: (state, payload) => {
    state.tasks.push(payload);
  },
  updateTaskStatusById: (state, { id: taskId, status }) => {
    const id = parseInt(taskId);
    const task = findTaskById(state.tasks, id);
    task.status = status;
  }
};

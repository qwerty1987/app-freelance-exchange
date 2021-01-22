import { findTaskById } from "@/utils";
export default {
  tasks: state => state.tasks,
  getTaskById: state => taskId => {
    const id = parseInt(taskId);
    return findTaskById(state.tasks, id);
  }
};

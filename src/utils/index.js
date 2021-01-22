function findTaskById(tasks, id) {
  return tasks.find(task => task.id === id);
}

export { findTaskById };

export const STORAGE_KEY = "tasks-vuejs-test";

const localStoragePlugin = store => {
  store.subscribe((mutation, { tasks }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  });
};

export default [localStoragePlugin];

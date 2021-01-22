import { createStore } from "vuex";
import actions from "@/store/actions";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import plugins from "@/store/plugins";
export const STORAGE_KEY = "tasks-vuejs-test";

export default createStore({
  state: {
    tasks: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]")
  },
  mutations,
  actions,
  getters,
  plugins
});

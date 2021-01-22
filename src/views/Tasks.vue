<template>
  <template v-if="hasTask">
    <h3 class="text-white">All active items: {{ activeTasks }}</h3>
    <app-task v-for="task in tasks" :task="task" :key="task.id"></app-task>
  </template>
  <h1 v-else class="text-white center">No tasks yet</h1>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import AppTask from "@/components/AppTask";

export default {
  setup() {
    const store = useStore();
    const hasTask = computed(() => tasks.value.length > 0);
    const activeTasks = computed(() => {
      const activeTasks = store.getters.tasks.filter(
        task => task.status === "active"
      );
      return activeTasks.length;
    });
    const tasks = computed(() => store.getters.tasks);
    return {
      tasks,
      hasTask,
      activeTasks
    };
  },
  components: { AppTask }
};
</script>
<style scoped>
.filters-actions {
  display: flex;
  justify-content: space-around;
  margin: 1em 0;
}
</style>

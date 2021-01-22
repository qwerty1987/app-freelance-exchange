<template>
  <div v-if="task" class="card">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :status="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ task.deadlineDate }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button class="btn pending" @click="updateTaskStatus('pending')">
        Set as PENDING
      </button>
      <button class="btn done" @click="updateTaskStatus('done')">
        Set as DONE
      </button>
      <button class="btn cancelled" @click="updateTaskStatus('cancelled')">
        Set as CANCELLED
      </button>
    </div>
  </div>
  <h3 v-else class="text-white center">
    Задачи с id = <strong>{{ taskId }}</strong> нет.
  </h3>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import AppStatus from "@/components/AppStatus";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const taskId = computed(() => route.params.taskId);
    const task = computed(() => {
      return store.getters.getTaskById(taskId.value);
    });
    const updateTaskStatus = status =>
      store.dispatch("updateTaskStatusById", { id: taskId.value, status });
    return { task, taskId, updateTaskStatus };
  },
  components: { AppStatus }
};
</script>

<style scoped></style>

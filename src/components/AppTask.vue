<template>
  <div class="card">
    <h2 class="card-title">
      {{ task.title }}
      <AppStatus :status="task.status" />
    </h2>
    <p>
      <strong>
        <small>
          {{ task.deadlineDate }}
        </small>
      </strong>
    </p>

    <router-link :to="`/task/${task.id}`" custom v-slot="{ route }">
      <button class="btn primary" @click="goToTask(route.fullPath)">
        Посмотреть
      </button>
    </router-link>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import AppStatus from "@/components/AppStatus";
export default {
  name: "Task",
  props: ["task"],
  setup(props) {
    const router = useRouter();
    const goToTask = taskId => router.push(taskId);
    return { ...props, goToTask };
  },
  components: { AppStatus }
};
</script>

<style scoped></style>

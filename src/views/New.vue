<template>
  <form class="card" @submit.prevent="submit">
    <h1>Создать новую задачу</h1>
    <div class="form-control" :class="{ invalid: isInvalidTitle }">
      <label for="title">Title <span class="text-red">(*)</span></label>
      <input autocomplete="off" type="text" id="title" v-model="title" />
    </div>

    <div class="form-control" :class="{ invalid: isInvalidDeadlineDate }">
      <label for="date">Deadline date <span class="text-red">(*)</span></label>
      <input type="date" id="date" v-model="deadlineDate" />
    </div>

    <div class="form-control" :class="{ invalid: isInvalidDescription }">
      <label for="description">
        Description <span class="text-red">(*)</span>
      </label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" :disabled="!isValidForm">Создать</button>
  </form>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "New",
  setup() {
    const store = useStore();
    const router = useRouter();
    const title = ref("");
    const description = ref("");
    const deadlineDate = ref("");
    const isInvalidTitle = computed(() => title.value.length < 2);
    const isInvalidDescription = computed(() => description.value.length < 10);
    const isInvalidDeadlineDate = computed(() => deadlineDate.value === "");
    const isValidForm = computed(() => {
      return (
        !isInvalidTitle.value &&
        !isInvalidDeadlineDate.value &&
        !isInvalidDescription.value
      );
    });
    const addTask = task => store.dispatch("addTask", task);
    const checkDeadlineDate = deadlineDate => {
      const deadline = new Date(deadlineDate);
      const current = new Date();
      const year = deadline.getFullYear() < current.getFullYear();
      if (year) return false;
      const month = deadline.getMonth() < current.getMonth();
      if (month) return false;
      const day = deadline.getDate() < current.getDate();
      return !day;
    };
    const submit = () => {
      addTask({
        title: title.value,
        description: description.value,
        deadlineDate: deadlineDate.value,
        status: checkDeadlineDate(deadlineDate.value) ? "active" : "cancelled"
      });
      router.push("/");
    };
    return {
      title,
      description,
      deadlineDate,
      isInvalidTitle,
      isInvalidDescription,
      isInvalidDeadlineDate,
      isValidForm,
      submit
    };
  }
};
</script>

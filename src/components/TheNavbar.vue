<template>
  <header class="navbar">
    <router-link to="/"><strong>App Freelance Exchange</strong></router-link>

    <ul class="navbar-menu">
      <li v-for="link in links" :key="link">
        <router-link :to="link.to">{{ link.title }}</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  setup() {
    const links = [
      { to: "/", title: "Tasks" },
      { to: "/new", title: "New" }
    ];

    return {
      links
    };
  },
  name: "TheNavbar"
};
</script>

<style scoped></style>

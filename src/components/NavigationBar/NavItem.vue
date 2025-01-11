<script>
export default {
  props: {
    link: {
      type: String,
      default: '#',
    },
  },
  computed: {
    isActive() {
      const route = useRoute();
      return route.path === this.link;
    },
  },
};
</script>
<template>
  <li class="nav-item">
    <RouterLink :class="{ isActive: 'bg-white' }"
      class="nav-link d-flex rounded-circle p-0 align-items-center justify-content-center" :to="link">
      <slot></slot>
    </RouterLink>
  </li>
</template>

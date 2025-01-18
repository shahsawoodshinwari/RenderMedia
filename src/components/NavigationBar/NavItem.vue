<script>
export default {
  props: {
    link: {
      type: String,
      default: '#',
    },
  },
};
</script>
<template>
  <li class="nav-item">
    <RouterLink class="nav-link d-flex rounded-circle p-0 align-items-center justify-content-center" :to="link">
      <slot></slot>
    </RouterLink>
  </li>
</template>

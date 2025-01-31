<script>
export default {
  name: 'NavItem',
  props: {
    link: {
      type: Object,
    },
  },
}
</script>
<template>
  <li class="nav-item">
    <RouterLink class="nav-link d-flex p-2 align-items-center justify-content-center" :to="link">
      <slot></slot>
    </RouterLink>
  </li>
</template>

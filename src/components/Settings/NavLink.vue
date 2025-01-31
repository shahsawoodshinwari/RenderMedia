<script>
export default {
  name: "NavLink",
  props: {
    to: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      required: true,
    },
    showArrow: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<template>
  <component :is="to ? 'RouterLink' : 'a'" :to="to" :href="to ? undefined : null" role="button"
    class="text-decoration-none text-white d-flex justify-content-between gap-3">
    <span>{{ label }}</span>
    <svg v-if="showArrow" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
      class="bi bi-arrow-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd"
        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
    </svg>
  </component>
</template>

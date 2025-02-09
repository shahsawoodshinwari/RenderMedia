<script>
export default {
  props: {
    reply: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="col-9 col-md-7 ms-auto">
    <div class="text-bg-light ms-auto rounded-3 px-3 py-2 w-fit-content rounded-top-end-0">
      {{ reply.message }}
    </div>
    <div class="ms-auto w-fit-content">
      <small>
        {{ reply.time }}
      </small>
    </div>
  </div>
</template>

<style scoped>
.rounded-top-end-0 {
  border-top-right-radius: 0 !important;
}
</style>

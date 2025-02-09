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
  <div class="col-9 col-md-7 me-auto">
    <div class="me-auto">
      <div class="text-bg-light rounded-3 px-3 py-2 border-top-left-radius-0">
        {{ reply.message }}
      </div>
      <div class="text-start">
        <small>
          {{ reply.time }}
        </small>
      </div>
    </div>
  </div>
</template>

<style scoped>
.border-top-left-radius-0 {
  border-top-left-radius: 0 !important;
}

.invisible {
  visibility: hidden;
}
</style>

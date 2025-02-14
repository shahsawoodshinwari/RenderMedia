<script>
export default {
  name: 'MessageReceived',
  props: {
    reply: {
      type: Object,
      required: true,
    },
  }
}
</script>

<template>
  <div class="col-12">
    <div class="w-fit-content rounded px-3 py-2 text-bg-light me-auto">
      <div class="">{{ reply.message }}</div>
    </div>
    <div class="text-muted text-start">
      <small>
        <small>
          {{ reply.time }}
        </small>
      </small>
    </div>
  </div>
</template>

<style scoped>
.w-fit-content {
  width: fit-content;
}

.rounded {
  border-top-left-radius: 0 !important;
}
</style>

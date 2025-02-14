<script>
export default {
  name: 'MessageSent',
  props: {
    reply: {
      type: Object,
      required: true,
    },
  }
}
</script>

<template>
  <div class="col-9 col-md-7 ms-auto">
    <div class="w-fit-content rounded px-3 py-2 ms-auto message-sent text-bg-primary">
      <div class="">{{ reply.message }}</div>
    </div>
    <div class="text-muted text-end">
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

.message-sent {
  border-top-right-radius: 0 !important;
}
</style>

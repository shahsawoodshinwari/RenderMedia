<script>
export default {
  name: 'TicketDetailsCard',
  props: {
    ticket: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      //
    }
  },
}
</script>

<template>
  <RouterLink :to="{ name: 'tickets.show', params: { id: ticket.id } }"
    class="card bg-white text-dark rounded-4 border-0 text-decoration-none">
    <div class="card-body">
      <h1 class="fs-sm fs-4">[#{{ ticket.ticket_id }}] {{ ticket.title }}</h1>
      <p class="text-secondary mb-0">
        {{ ticket.description }}
      </p>
      <hr />
      <div class="d-flex justify-content-between align-items-center gap-3">
        <div>{{ __('tickets.created_at') }}: {{ ticket.created_at }}</div>
      </div>
    </div>
  </RouterLink>
</template>

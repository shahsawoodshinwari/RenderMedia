<script>
import NotFoundImage from '@/assets/no-bookings-found.png';

export default {
  name: 'NoTickets',
  data() {
    return {
      notFound: NotFoundImage,
    };
  },
};
</script>

<template>
  <div class="text-center">
    <img :src="notFound" class="img-fluid w-50 mb-3" :alt="__('tickets.no_tickets')" />
    <div class="fs-4 text-muted">
      {{ __('tickets.no_tickets') }}
    </div>
  </div>
</template>

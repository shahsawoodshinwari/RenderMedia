<script>
import TicketChats from '@/components/Tickets/TicketChats.vue';
import { useForm } from 'laravel-precognition-vue';

export default {
  name: 'TicketShow',
  components: {
    TicketChats,
  },
  data() {
    return {
      item: null,
      form: useForm('get', `/tickets/${this.$route.params.id}`, {}),
    };
  },
  mounted() {
    this.form.submit().then((response) => {
      this.item = response.data;
    });
  },
};
</script>

<template>
  <TicketChats :ticket="item" />
</template>

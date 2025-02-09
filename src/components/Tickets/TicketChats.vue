<script>
import { useUserStore } from '@/stores/userStore';
import MessageSent from '@/components/Tickets/MessageSent.vue';
import MessageReceived from '@/components/Tickets/MessageReceived.vue';

export default {
  name: 'TicketChats',
  components: {
    MessageSent,
    MessageReceived,
  },
  props: {
    ticket: {
      type: Object,
      required: true,
    },
  },
  computed: {
    userStore() {
      return useUserStore();
    },
  },
  methods: {
    isAuthor(author) {
      return this.userStore.name == author;
    },
  },
};
</script>

<template>
  <div v-if="ticket?.replies?.length" class="row g-3 mt-3 py-3 rounded">
    <template v-for="reply in ticket?.replies" :key="reply.id">
      <MessageSent v-if="isAuthor(reply.actual_sender)" :reply="reply" />
      <MessageReceived v-else :reply="reply" />
    </template>
  </div>
</template>

<style scoped>
/* Add styles if needed */
</style>

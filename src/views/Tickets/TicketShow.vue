<script>
import TicketCreate from './TicketCreate.vue';
import { useUserStore } from '@/stores/userStore';
import { useForm } from 'laravel-precognition-vue';
import NoTickets from '@/components/Tickets/NoTickets.vue';
import MessageSent from '@/components/Tickets/MessageSent.vue';
import MessageReceived from '@/components/Tickets/MessageReceived.vue';

export default {
  name: 'TicketShow',
  components: {
    NoTickets,
    MessageSent,
    TicketCreate,
    MessageReceived,
  },
  data() {
    return {
      replies: [],
      form: useForm('get', `/tickets/${this.$route.params.id}`, {}),
    };
  },
  computed: {
    userStore() {
      return useUserStore();
    },
  },
  async mounted() {
    this.fetchReplies();
  },
  methods: {
    isSentMessage(author) {
      return this.userStore.name === author;
    },
    async fetchReplies() {
      return this.form.submit().then((response) => {
        this.replies = response.data.replies;
      });
    },
  },
};
</script>

<template>
  <div class="d-flex flex-column h-100">
    <div class="flex-grow-1 overflow-y-auto container">
      <div class="row g-2 messages" v-if="replies.length > 0 && !form.processing">
        <template v-for="(reply, index) in replies" :key="index">
          <MessageSent class="user-select-none" v-if="isSentMessage(reply.actual_sender)" :reply="reply" />
          <MessageReceived class="user-select-none" v-else :reply="reply" />
        </template>
      </div>
      <div v-else-if="form.processing" class="text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <NoTickets v-else />
    </div>

    <TicketCreate @message-sent="fetchReplies" />
  </div>
</template>

<style scoped>
.overflow-y-auto::-webkit-scrollbar {
  display: none;
  max-height: 77vh;
}

.messages {
  font-size: medium;
}
</style>

<script>
import { useForm } from 'laravel-precognition-vue';

export default {
  name: 'TicketCreate',
  emits: ['message-sent'],
  data() {
    return {
      item: null,
      form: useForm('post', `/tickets/${this.$route.params.id}/reply`, {
        message: '',
      }),
    };
  },
  methods: {
    onSubmit() {
      this.form.submit().then((response) => {
        this.$emit('message-sent', response.data);
        this.form.reset();
      });
    }
  },
};
</script>

<template>
  <form @submit.prevent="onSubmit" class="sticky-bottom">
    <div class="form-group position-relative">
      <input type="text" v-model.trim="form.message" :placeholder="__('forms.send_message')" class="form-control" />
      <button type="submit"
        class="btn btn-sm btn-send btn-primary position-absolute top-50 translate-middle-y rounded-circle"
        :class="{ 'start-px-5': locale === 'ar', 'end-px-5': locale === 'en' }"
        :disabled="form.processing || !form.message">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-send-fill"
          viewBox="0 0 16 16">
          <path
            d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
        </svg>
      </button>
    </div>
  </form>
</template>

<style scoped>
.form-control {
  padding-left: 3.125rem !important;
}

.btn-send {
  width: 2.34rem;
  height: 2.34rem;
}

.start-px-5 {
  left: 5px !important;
}

.end-px-5 {
  right: 5px !important;
}
</style>

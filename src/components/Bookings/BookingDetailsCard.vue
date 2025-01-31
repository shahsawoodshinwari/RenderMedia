<script>
import { useForm } from 'laravel-precognition-vue'

export default {
  name: 'BookingDetailsCard',
  props: {
    booking: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      form: useForm('post', '/bookings', {}),
    }
  },
  methods: {
    paymentClass(paymentStatus) {
      switch (paymentStatus?.toLowerCase()) {
        case 'paid':
          return 'text-bg-success'
        case 'partial':
          return 'text-bg-warning'
        case 'unpaid':
          return 'text-bg-danger'
        default:
          return 'text-bg-secondary'
      }
    },
    reschedule() {
      this.form.submit().then((response) => {
        console.log(response)
      })
    },
  },
}
</script>

<template>
  <div class="card text-dark bg-white rounded-4 border-0">
    <div class="card-body px-2">
      <div class="row g-3 justify-content-end align-items-center">
        <div class="col-6">
          <div class="rounded-pill py-1 px-3 bg-light">
            <b>Service:</b> {{ booking.category?.title }}
          </div>
        </div>

        <div class="col-6">
          <div class="rounded-pill py-1 px-3 bg-light">
            <b>Short For:</b> {{ booking.sub_category?.title }}
          </div>
        </div>

        <div class="col-12">
          <div class="fw-bold fs-6">
            {{ booking.address }}
          </div>
        </div>

        <div class="col">
          <div class="flex-grow-1 fs-small">{{ booking.date }}</div>
          <div class="flex-grow-1 fs-small">{{ booking.time }}</div>
        </div>

        <div class="col-auto fs-small">
          Booking Id: #{{ booking.booking_id }}
          <div class="text-danger fw-medium py-1">Request: {{ booking.request_status }}</div>
        </div>

        <div class="col-6">
          <button :class="['btn', 'py-1', 'px-3', 'rounded-pill', 'fs-small', 'btn-primary']">
            <span>Reschedule</span>
          </button>
        </div>

        <div class="col-6">
          <div
            :class="[
              'rounded-pill',
              'py-1',
              'px-3',
              'fs-small',
              paymentClass(booking.payment_status),
            ]"
          >
            Payment: {{ booking.payment_status }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fs-small {
  font-size: small;
}

.fs-smaller {
  font-size: smaller;
}

.card .rounded-pill.bg-light {
  font-size: x-small;
  background-color: #001f3f29 !important;
}
</style>

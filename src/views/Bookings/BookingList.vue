<script>
import MazTabs from 'maz-ui/components/MazTabs'
import { useForm } from 'laravel-precognition-vue'
import MazTabsBar from 'maz-ui/components/MazTabsBar'
import NoBookingsFound from '@/assets/no-bookings-found.png'
import MazTabsContent from 'maz-ui/components/MazTabsContent'
import MazTabsContentItem from 'maz-ui/components/MazTabsContentItem'
import BookingDetailsCard from '@/components/Bookings/BookingDetailsCard.vue'
import BookingCardSkeleton from '@/components/Bookings/BookingCardSkeleton.vue'

export default {
  name: 'BookingList',
  components: {
    MazTabs,
    MazTabsBar,
    MazTabsContent,
    BookingDetailsCard,
    MazTabsContentItem,
    BookingCardSkeleton,
  },
  data() {
    return {
      tabs: [
        { id: 1, bookings: [], label: 'Ongoing' },
        { id: 2, bookings: [], label: 'Upcoming' },
        { id: 3, bookings: [], label: 'Completed' },
      ],
      currentTab: 1,
      form: useForm('get', '/bookings', {}),
      notFound: NoBookingsFound,
    }
  },
  mounted() {
    this.fetchBookings()
  },
  methods: {
    fetchBookings() {
      this.form.submit().then((response) => {
        const bookings = response.data.data

        // Ongoing bookings
        this.tabs[0].bookings = bookings.filter((booking) => {
          const status = booking.request_status?.toLowerCase()
          return status !== 'pending' && status !== 'completed'
        })

        // ongoing bookings
        this.tabs[2].bookings = bookings.filter(
          (booking) => booking.request_status?.toLowerCase() == 'pending',
        )

        // completed bookings
        this.tabs[2].bookings = bookings.filter(
          (booking) => booking.request_status?.toLowerCase() == 'completed',
        )
      })
    },
  },
}
</script>

<template>
  <MazTabs v-model="currentTab">
    <MazTabsBar
      :items="tabs"
      :persistent="true"
      :block="true"
      class="rounded-pill justify-content-between p-0 booking-tabs"
    >
      <template #default="{ item }">
        <div :class="['flex-grow-1', 'py-3', 'bg-primary']">
          {{ item.label }}
        </div>
      </template>
    </MazTabsBar>
    <MazTabsContent>
      <template v-if="form.processing">
        <BookingCardSkeleton></BookingCardSkeleton>
        <BookingCardSkeleton></BookingCardSkeleton>
      </template>
      <template v-else>
        <MazTabsContentItem
          v-for="(tab, index) in tabs"
          :tab="tab.id"
          :id="tab.id"
          :key="index"
          class="py-4"
        >
          <template v-if="tab.bookings.length > 0">
            <template v-for="(booking, bookingIndex) in tab.bookings" :key="bookingIndex">
              <BookingDetailsCard :booking="booking" />
            </template>
          </template>
          <template v-else>
            <div class="text-center">
              <img :src="notFound" class="img-fluid w-50 mb-3" alt="No bookings found" />
              <div class="fs-4 text-muted">No bookings found</div>
              <div class="fs-6 text-secondary">We couldn't find any bookings at the moment.</div>
            </div>
          </template>
        </MazTabsContentItem>
      </template>
    </MazTabsContent>
  </MazTabs>
</template>

<style>
.booking-tabs {
  overflow-y: hidden;
}

.booking-tabs button {
  border-radius: 50rem !important;
  padding-block: 1rem !important;
  padding-inline: 1.5rem !important;
  color: var(--bs-dark) !important;
  font-size: small;
}

.booking-tabs button.--active {
  background-color: var(--bs-primary) !important;
}

.m-tabs-bar__indicator {
  background-color: transparent !important;
}
</style>

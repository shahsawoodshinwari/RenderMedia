<script>
import MazTabs from 'maz-ui/components/MazTabs'
import { useForm } from 'laravel-precognition-vue'
import MazTabsBar from 'maz-ui/components/MazTabsBar'
import NoBookingsFound from '@/assets/no-bookings-found.png'
import MazTabsContent from 'maz-ui/components/MazTabsContent'
import MazTabsContentItem from 'maz-ui/components/MazTabsContentItem'
import TicketDetailsCard from '@/components/Tickets/TicketDetailsCard.vue'
import BookingCardSkeleton from '@/components/Bookings/BookingCardSkeleton.vue'

export default {
  name: 'TicketList',
  components: {
    MazTabs,
    MazTabsBar,
    MazTabsContent,
    TicketDetailsCard,
    MazTabsContentItem,
    BookingCardSkeleton,
  },
  data() {
    return {
      tabs: [
        { id: 1, data: [], label: this.__('tickets.open') },
        { id: 2, data: [], label: this.__('tickets.closed') },
      ],
      currentTab: 1,
      form: useForm('get', '/tickets', {}),
      notFound: NoBookingsFound,
    }
  },
  mounted() {
    this.fetchTickets()
  },
  methods: {
    fetchTickets() {
      this.form.submit().then((response) => {
        const tickets = response.data.data
        console.log(response)

        // open tickets
        this.tabs[0].data = tickets.filter(
          (ticket) => ticket.status?.toLowerCase() == 'open',
        )

        // closed tickets
        this.tabs[1].data = tickets.filter(
          (ticket) => ticket.status?.toLowerCase() == 'closed',
        )
      })
    },
  },
}
</script>

<template>
  <MazTabs v-model="currentTab">
    <MazTabsBar :items="tabs" :persistent="true" :block="true"
      class="rounded-pill justify-content-center text-center p-0 mx-auto ticket-tabs">
      <template #default="{ item }">
        <div class="tab-content">
          <div class="tab-label">{{ item.label }}</div>
        </div>
      </template>
    </MazTabsBar>
    <MazTabsContent>
      <template v-if="form.processing">
        <BookingCardSkeleton></BookingCardSkeleton>
        <BookingCardSkeleton></BookingCardSkeleton>
      </template>
      <template v-else>
        <MazTabsContentItem v-for="(tab, index) in tabs" :tab="tab.id" :id="tab.id" :key="index" class="py-4">
          <template v-if="tab.data.length > 0">
            <template v-for="(ticket, ticketIndex) in tab.data" :key="ticketIndex">
              <TicketDetailsCard :class="{ 'mb-2': ticketIndex !== tabs.length - 1 }" :ticket="ticket" />
            </template>
          </template>
          <template v-else>
            <div class="text-center">
              <img :src="notFound" class="img-fluid w-25 mb-3" :alt="__('tickets.no_tickets')" />
              <div class="fs-4 text-muted">
                {{ __('tickets.no_tickets') }}
              </div>
              <div class="fs-6 text-secondary">
                {{ __('tickets.no_tickets_description') }}
              </div>
            </div>
          </template>
        </MazTabsContentItem>
      </template>
    </MazTabsContent>
  </MazTabs>
</template>

<style>
.ticket-tabs {
  overflow-y: hidden;
  display: flex;
  /* Ensure proper flex behavior */
}

.ticket-tabs button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50rem !important;
  padding-block: 1rem !important;
  padding-inline: 1.5rem !important;
  color: var(--bs-dark) !important;
  font-size: small;
}

.ticket-tabs button.--active {
  background-color: var(--bs-primary) !important;
}

.ticket-tabs button.--active,
.ticket-tabs button.m-tabs-bar__item {
  flex-grow: 1 !important;
}

.m-tabs-bar__indicator {
  background-color: transparent !important;
}

/* Ensure content inside tabs is centered */
.tab-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  /* Ensure full height */
  width: 100%;
  /* Full width for centering */
}

.tab-label {
  text-align: center;
}
</style>

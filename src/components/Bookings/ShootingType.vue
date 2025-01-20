<script>
import { useForm } from 'laravel-precognition-vue'
import MazSelect from 'maz-ui/components/MazSelect'
import NoBookingsFound from '@/assets/no-bookings-found.png'

export default {
  name: 'ShootingType',
  components: {
    MazSelect,
  },
  inject: {
    category: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      data: [],
      notFound: NoBookingsFound,
      form: useForm('get', '/categories', {
        category_id: this.category,
      }),
      payload: {
        sub_category_id: '',
      }
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.form.submit().then(response => {
        console.log(response);
        this.data = response.data.data.length > 0 ? response.data.data[0].children : [];
      });
    }
  },
};
</script>

<template>
  <div v-if="data.length > 0 && !form.processing">
    <MazSelect v-model="payload.sub_category_id" color="primary" label="Select shooting type" class="rounded-pill w-100"
      :options="data" option-value-key="id" option-label-key="name" />
  </div>
  <div v-else>
    <div class="text-center">
      <img :src="notFound" class="img-fluid w-50 mb-3" alt="No bookings found" />
      <div class="fs-4 text-muted">Whoops</div>
      <div class="fs-6 text-secondary w-75 mx-auto">
        It looks like there is something missing from the data. Please refresh and come
        again.
      </div>
    </div>
  </div>
</template>

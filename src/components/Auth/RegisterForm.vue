<script>
import { MaskInput } from 'vue-3-mask'
import { useUserStore } from '@/stores/userStore'
import { useForm } from 'laravel-precognition-vue'

export default {
  name: 'RegisterForm',
  components: {
    MaskNumber: MaskInput,
  },
  data() {
    return {
      form: useForm('post', '/register', {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        gender: '',
        password: '',
        password_confirmation: '',
        privacy: false,
      }),
      userStore: useUserStore(),
      genders: [
        { key: 'male', value: 'Male' },
        { key: 'female', value: 'Female' },
        { key: 'other', value: 'Other' },
      ],
    }
  },
  methods: {
    onSubmit() {
      this.form
        .submit()
        .then((response) => {
          this.userStore.setUserData(response.data.data)
          this.$router.push({ name: 'home' })
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
<template>
  <form @submit.prevent="onSubmit" class="row justify-content-center g-3">
    <!-- First name -->
    <div class="col-12">
      <input
        v-model="form.first_name"
        name="first_name"
        @input="form.validate('first_name')"
        class="form-control"
        :class="{ 'is-invalid': form.invalid('first_name') }"
        :placeholder="__('forms.first_name')"
        autocomplete="given-name"
      />
      <div v-if="form.invalid('first_name')" class="invalid-feedback">
        {{ form.errors.first_name }}
      </div>
    </div>

    <!-- Last Name -->
    <div class="col-12">
      <input
        v-model="form.last_name"
        name="last_name"
        @input="form.validate('last_name')"
        class="form-control"
        :class="{ 'is-invalid': form.invalid('last_name') }"
        :placeholder="__('forms.last_name')"
        autocomplete="family-name"
      />
      <div v-if="form.invalid('last_name')" class="invalid-feedback">
        {{ form.errors.last_name }}
      </div>
    </div>

    <!-- Email Address -->
    <div class="col-12">
      <input
        v-model="form.email"
        name="email"
        @input="form.validate('email')"
        class="form-control"
        :class="{ 'is-invalid': form.invalid('email') }"
        :placeholder="__('forms.email')"
        autocomplete="email"
      />
      <div v-if="form.invalid('email')" class="invalid-feedback">
        {{ form.errors.email }}
      </div>
    </div>

    <!-- Phone -->
    <div class="col-12">
      <MaskNumber
        v-model="form.phone"
        name="phone"
        @input="form.validate('phone')"
        class="form-control"
        :class="{ 'is-invalid': form.invalid('phone') }"
        mask="+971 ##-###-####"
        :placeholder="__('forms.phone')"
        autocomplete="mobile"
      />
      <div v-if="form.invalid('phone')" class="invalid-feedback">
        {{ form.errors.phone }}
      </div>
    </div>

    <!-- Gender -->
    <div class="col-12">
      <select
        v-model="form.gender"
        name="gender"
        @change="form.validate('gender')"
        class="form-select"
        :class="{ 'is-invalid': form.invalid('gender') }"
      >
        <option value="">{{ __('forms.select_gender') }}</option>
        <option :value="gender.value" v-for="gender in genders" :key="gender.key">
          {{ __(gender.key) }}
        </option>
      </select>
      <div v-if="form.invalid('gender')" class="invalid-feedback">
        {{ form.errors.gender }}
      </div>
    </div>

    <!-- Password -->
    <div class="col-12">
      <input
        type="password"
        v-model="form.password"
        name="password"
        @input="form.validate('password')"
        class="form-control"
        :class="{ 'is-invalid': form.invalid('password') }"
        :placeholder="__('forms.password')"
        autocomplete="new-password"
      />
      <div v-if="form.invalid('password')" class="invalid-feedback">
        {{ form.errors.password }}
      </div>
    </div>

    <!-- Password Confirmation -->
    <div class="col-12">
      <input
        type="password"
        v-model="form.password_confirmation"
        name="password_confirmation"
        @input="form.validate('password_confirmation')"
        class="form-control"
        :class="{ 'is-invalid': form.invalid('password_confirmation') }"
        :placeholder="__('forms.password_confirmation')"
        autocomplete="new-password"
      />
      <div v-if="form.invalid('password_confirmation')" class="invalid-feedback">
        {{ form.errors.password_confirmation }}
      </div>
    </div>

    <!-- Remember me -->
    <div class="col-12">
      <div class="form-check">
        <input
          class="form-check-input"
          name="privacy"
          :class="{ 'is-invalid': form.invalid('privacy') }"
          v-model="form.privacy"
          @change="form.validate('privacy')"
          type="checkbox"
          value="accepted"
          id="privacy"
        />
        <label class="form-check-label" for="privacy">
          {{ __('forms.privacy') }}
        </label>
      </div>
    </div>

    <!-- Login -->
    <div class="col-8">
      <button class="btn btn-primary w-100" :disabled="form.processing">
        <div v-if="form.processing" class="spinner-border spinner-border-sm" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <span v-else>{{ __('buttons.sign_up') }}</span>
      </button>
    </div>

    <div class="col-12 text-center" v-if="routeExists('auth.login')">
      {{ __('register.already_member') }}
      <RouterLink :to="{ name: 'auth.login' }">{{ __('buttons.login') }}</RouterLink>
    </div>
  </form>
</template>

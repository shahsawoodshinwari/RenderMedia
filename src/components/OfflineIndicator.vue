<script>
export default {
  data() {
    return {
      onlineStatus: navigator.onLine,
    }
  },
  computed: {
    isOffline() {
      return !this.onlineStatus
    },
  },
  created() {
    window.addEventListener('online', this.updateOnlineStatus)
    window.addEventListener('offline', this.updateOnlineStatus)
  },
  unmounted() {
    window.removeEventListener('online', this.updateOnlineStatus)
    window.removeEventListener('offline', this.updateOnlineStatus)
  },
  methods: {
    updateOnlineStatus() {
      this.onlineStatus = navigator.onLine
    },
  },
}
</script>

<template>
  <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <div class="position-fixed w-100 text-center py-2 text-bg-warning" v-show="isOffline">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-info-circle-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
        />
      </svg>
      <span class="ms-3">You are offline</span>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

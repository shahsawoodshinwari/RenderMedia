<template>
  <RouterView />
  <InstallDialog ref="installDialog" />
</template>

<script>
import InstallDialog from '@/components/InstallDialog.vue';

export default {
  name: 'App',
  components: {
    InstallDialog,
  },
  mounted() {
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      this.$refs.installDialog.setInstallPrompt(event);
    });
  }
};
</script>
